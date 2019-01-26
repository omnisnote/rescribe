import React, { Component } from 'react'
import { Link } from "react-router-dom"

import { authGoogleUser } from "../firebase/auth"
import { createUser, getUserRef } from "../firebase/db"

import wave from "../assets/basic-bg.svg"

export default class Signup extends Component {

  handleGoogleSignup = async e => {
    e.preventDefault()
    try {
      authGoogleUser().then(res => {
        createUser(res.user)
        this.props.history.push("/user")
      })
    } catch (error) {
      alert(error)
    }
  }

  render() {
    return (
      <div className="in-up signup">
        <img src={ wave } className="bg"/>
        <div className="card">
          <Link to="/login">login</Link>
          <h1>Signup</h1>
          <input type="text" className="email" placeholder="email"/>
          <input type="password" className="password" placeholder="password"/>
          <button className="submit">Submit!</button>
        </div>
        <button className="google" onClick={ e => this.handleGoogleSignup(e) }>sign up with Google</button>
      </div>
    )
  }

}