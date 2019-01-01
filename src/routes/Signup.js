import React, { Component } from 'react'
import { Link } from "react-router-dom"


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
        <Link to="/login">login</Link>
        <h1>Signup</h1>
        <button onClick={ e => this.handleSignup(e) }>click here to sign up</button>
      </>
    )
  }

}