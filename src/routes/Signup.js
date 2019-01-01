import React, { Component } from 'react'

import auth, { createGoogleUser } from "../firebase/auth"
import { createUser, getUserRef } from "../firebase/db"

export default class Signup extends Component {

  constructor(props) {
    super(props)

    this.state = {
      user: {}
    }
  }

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

  componentDidMount() {
    this.authObservable = auth.onAuthStateChanged(user => {
      const ref = getUserRef()
      this.userObservable = ref.onSnapshot(snapshot => {
        this.setState({
          user: snapshot.data()
        })
      })
    })
    
  }

  componentWillUnmount() {
    this.authObservable = null
    this.userObservable = null
  }

  render() {
    return (
      <>
        <h1>Signup</h1>
        <p>{ JSON.stringify(this.state.user) }</p>
        <button onClick={ e => this.handleSignup(e) }>test</button>
      </>
    )
  }

}