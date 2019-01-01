import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom"

import Signup from "../routes/Signup"
import Login from "../routes/Login"

export default class App extends Component {
  render() {
    return (
      <div>
        <Router className="app">
          <>
            <Switch>
              <Route exact path="/signup" component={ Signup }/>
              <Route exact path="/login" component={ Login }/>

              <Redirect to="/login" />
            </Switch>
          </>
        </Router>
      </div>
    )
  }
}

