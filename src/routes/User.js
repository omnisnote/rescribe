import React, { Component } from 'react'

import db, { getUserRef } from "../firebase/db"
import auth from "../firebase/auth"

import Sidebar from "../containers/Sidebar"

export default class User extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: ""
    }
  }

  signOut() {
    auth.signOut()
  }

  render() {
    return (
      <>
        <Sidebar />
        <div>
          <h1>user</h1>
          <button onClick={ e => this.signOut(e) }>sign out</button>
        </div>
      </>
    )
  }
}