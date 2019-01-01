import React, { Component } from 'react'

import db, { getUserRef } from "../firebase/db"
import auth from "../firebase/auth"

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

  push() {
    getUserRef().update({
      [("random-" + Math.random()).replace(/\./g, "-")]: "heck",
      dog: Math.random()
    })
  }

  render() {
    return (
      <>
        <h1>user</h1>
        <button onClick={ e => this.signOut(e) }>sign out</button>
        <button onClick={ e => this.push(e) }>add thing to test</button>
      </>
    )
  }

}