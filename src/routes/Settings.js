import React, { Component } from 'react'

import { getUserRef } from "../firebase/db"

import UserContext from "../context"

import Sidebar from "../containers/Sidebar"

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
      <>
        <Sidebar />
        <div><h1>settings</h1></div>
      </>
    )
  }
}