import React, { Component } from 'react'
import { Link } from "react-router-dom"

import auth, { authGoogleUser } from "../firebase/auth"
import { createUser, getUserRef } from "../firebase/db"

import wave from "../assets/basic-bg.svg"

export default class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      shake: false
    }
  }

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
    auth.signInWithEmailAndPassword(this.emailEl.value, this.passwordEl.value).catch(err => {
      this.setState({
        shake: true,
        err: err.message
      })
    })
  }

  render() {
    return (
      <div className="in-up login">
        <img src={ wave } className="bg"/>
        <div className={ "card " + (this.state.shake ? "shake" : "")}>
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
        </div>
        <button className="google" onClick={ e => this.handleGoogleLogin(e) }>login with Google</button>
      </div>
    )
  }

}