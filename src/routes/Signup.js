import React, { Component } from 'react'

import auth from "../firebase/auth"

export default class Signup extends Component {

  handleSignup = async  e => {
    e.preventDefault()

    try {
      const user = await auth.createUserWithEmailAndPassword("alexa.griffin42@gmail.com", "password123");
      this.props.history.push("/")
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