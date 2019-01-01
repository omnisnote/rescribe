import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom"

import auth from "../firebase/auth"

import Signup from "../routes/Signup"
import Login from "../routes/Login"

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      ready: false
    }
  }

  componentDidMount() {
    this.authObservable = auth.onAuthStateChanged(user => {
      console.log(user)
      this.setState({ ready: !!user })
    })
  }

  componentWillUnmount() {
    this.authObservable = null
    this.userObservable = null
  }

  render() {
    return (
      <div>
      {
        this.state.ready ? (
          
          <Router className="app">
            <>
              <Switch>
                <Route exact path="/signup" component={ Signup }/>
                <Route exact path="/login" component={ Login }/>
  
                <Redirect to="/login" />
              </Switch>
            </>
          </Router>
  
        ) : <p>Loading</p>
      }
      </div>

    )
  }
}

