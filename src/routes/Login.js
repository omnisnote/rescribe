import React, { Component } from 'react'
import { Link } from "react-router-dom"

import { authGoogleUser } from "../firebase/auth"
import { createUser, getUserRef } from "../firebase/db"

import wave from "../assets/basic-bg.svg"

export default class Login extends Component {

  handleGoogleLogin = async e => {
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

  handleLogin = e => {

  }

  render() {
    return (
      <div className="in-up login">
        <img src={ wave } className="bg"/>
        <div className="card">
          <Link to="/signup">sign up</Link>
          <h1>Login</h1>
          <input type="text" className="email" placeholder="email"/>
          <input type="password" className="password" placeholder="password"/>
          <button className="submit">Submit!</button>

        </div>
        <button className="google" onClick={ e => this.handleGoogleLogin(e) }>login with Google</button>
      </div>
    )
  }

}