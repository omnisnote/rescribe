import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom"

import UserContext from "../context"

import auth from "../firebase/auth"
import { getUserRef } from "../firebase/db"

import Signup from "../routes/Signup"
import Login from "../routes/Login"
import User from "../routes/User"
import Notes from "../routes/Notes"
import Note from '../routes/Note'

import Loading from "../components/Loading"

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: {
        ready: false,
        checked: false,
      }
    }
  }

  componentDidMount() {
    this.authObservable = auth.onAuthStateChanged(user => {
      this.setState({ 
        user: {
          ready: !!user,
          checked: true
        }
      })
      if(user) {
        this.userObservable = getUserRef().onSnapshot(snapshot => {
          this.setState({
            user: {
              ...this.state.user,
              ...snapshot.data()
            }
          })
        })
      }
    })
  }

  componentWillUnmount() {
    this.authObservable = null
    this.userObservable = null
  }

  render() {
    return (
      <div className="app">
        <UserContext.Provider value={ this.state.user }>
          <Router>
            <Switch>
              {/* public paths */}
              { !this.state.user.ready && ( <>
                <Route exact path="/signup" component={ Signup }/>
                <Route exact path="/login" component={ Login }/>
                { this.state.user.checked && <Redirect to="/signup" /> }
              </> )}
              

              {/* authed paths */}
              { this.state.user.ready ? (
                <Switch>
                  <Route exact path="/user" component={ User }/>   
                  <Route exact path="/notes" component={ Notes }/>   
                  <Route exact path="/note/:uid" component={ Note }/>   

                  <Redirect to="/notes" />
                </Switch>      
              ) : <Loading /> }
            </Switch>
          </Router>
        </UserContext.Provider>
      </div>

    )
  }
}

