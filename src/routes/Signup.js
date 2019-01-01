import React, { Component } from 'react'
import { Link } from "react-router-dom"


import { authGoogleUser } from "../firebase/auth"
import { createUser, getUserRef } from "../firebase/db"

export default class Signup extends Component {

  handleSignup = async e => {
    e.preventDefault()
    try {
      const user = authGoogleUser().then(res => {
        createUser(res.user)
        this.props.history.push("/user")
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