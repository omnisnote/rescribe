import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom"

export default class App extends Component {
  render() {
    return (
      <div>
        <Router className="app">
          <Route path="/heck" render={ e => <h1>hello from heck</h1> }/>
        </Router>
      </div>
    )
  }
}

