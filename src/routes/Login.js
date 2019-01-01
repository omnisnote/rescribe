import React, { Component } from 'react'
import { Link } from "react-router-dom"

import { createGoogleUser } from "../firebase/auth"
import { createUser, getUserRef } from "../firebase/db"

export default class Login extends Component {

  handleLogin = async e => {
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
        <Link to="/signup">sign up</Link>
        <h1>Login</h1>
        <button onClick={ e => this.handleLogin(e) }>click here to login</button>
      </>
    )
  }

}