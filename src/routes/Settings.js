import React, { Component } from 'react'

import { getUserRef } from "../firebase/db"
import auth from "../firebase/auth"

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

  signout() {
    auth.signOut().then(() => {
      //TODO: implement this
    }, (error) => {

    })
  }

  render() {
    return (
      <>
        <Sidebar />
        <div className="settings">
          <h1>settings</h1>
          <button className="button" onClick={ e => this.signout() }>signout</button>
        </div>
      </>
    )
  }
}