import React, { Component } from 'react'

import db, { getUserRef } from "../firebase/db"
import auth from "../firebase/auth"

export default class User extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: ""
    }
  }

  componentDidMount() {
    this.userObservable = getUserRef().onSnapshot(snapshot => {
      this.setState({
        data: snapshot.data()
      })
    })
  }

  componentWillUnmount() {
    this.userObservable = null
  }

  signOut() {
    auth.signOut()
  }

  render() {
    return (
      <>
        <h1>user</h1>
        <p>{ JSON.stringify(this.state.data) }</p>

        <button onClick={ e => this.signOut(e) }>sign out</button>
      </>
    )
  }

}