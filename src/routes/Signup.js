import React, { Component } from 'react'

import auth, { createGoogleUser, createUserKey } from "../firebase/auth"

export default class Signup extends Component {

  handleSignup = async  e => {
    e.preventDefault()

    try {
      const user = createGoogleUser().then(res => {
        console.log(res)
        createUserKey(res.user.uid)
        this.props.history.push("/")
      });
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