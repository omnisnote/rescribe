import React, { Component } from 'react'

import { createGoogleUser } from "../firebase/auth"
import { createUser, getUserRef } from "../firebase/db"

export default class Signup extends Component {

  handleSignup = async e => {
    e.preventDefault()
    try {
      const user = createGoogleUser().then(res => {
        createUser(res.user)
      })
    } catch (error) {
      alert(error)
    }
  }

  render() {
    return (
      <>
        <h1>Signup</h1>
        <button onClick={ e => this.handleSignup(e) }>test</button>
      </>
    )
  }

}