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
        <div className="form">
          <Link to="/signup">sign up</Link>
          <h1>Login</h1>
          <input type="text" 
                 className="email" 
                 placeholder="email"
                 ref={ el => this.emailEl = el }/>
          <input type="password" 
                 className="password" 
                 placeholder="password"
                 ref={ el => this.passwordEl = el }/>
          <button className="submit" onClick={ e => this.handleLogin() }>Submit!</button>
          <p>{ this.state.err || " " }</p>
          <button className="google" onClick={ e => this.handleGoogleLogin(e) }>login with Google</button>
        </div>
      </div>
    )
  }

}