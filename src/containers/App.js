import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom"

import auth from "../firebase/auth"

import Signup from "../routes/Signup"
import Login from "../routes/Login"
import User from "../routes/User"
import Notes from "../routes/Notes"

import Loading from "../components/Loading"

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      ready: false,
      checked: false
    }
  }

  componentDidMount() {
    this.authObservable = auth.onAuthStateChanged(user => {
      this.setState({ 
        ready: !!user,
        checked: true
      })
    })
  }

  componentWillUnmount() {
    this.authObservable = null
  }

  render() {
    return (
      <div className="app">
        <Router>
          <Switch>
            {/* public paths */}
            { !this.state.ready && ( <>
              <Route exact path="/signup" component={ Signup }/>
              <Route exact path="/login" component={ Login }/>
              { this.state.checked && <Redirect to="/signup" /> }
            </> )}
            

            {/* authed paths */}
            { this.state.ready ? (
              <Switch>
                <Route exact path="/user" component={ User }/>   
                <Route exact path="/notes" component={ Notes }/>   

                <Redirect to="/notes" />
              </Switch>      
            ) : <Loading /> }
          </Switch>
        </Router>
      </div>

    )
  }
}

