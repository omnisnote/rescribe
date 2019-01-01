import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <h1>{ (process.env.REACT_APP_HECK) }</h1>
      </div>
    )
  }
}

