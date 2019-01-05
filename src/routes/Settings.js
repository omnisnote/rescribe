import React, { Component } from 'react'

import { getUserRef } from "../firebase/db"

import UserContext from "../context"


export default class Settings extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  static contextType = UserContext

  saveSettings() {
    getUserRef().settings.set(this.state)
  }

  render() {
    return (
      <div><h1>settings</h1></div>
    )
  }
}