import React, { Component } from 'react'
import { Link } from "react-router-dom"

import { pushArr, getUserRef } from "../firebase/db"

export default class Note extends Component {
  constructor(props) {
    super(props)
    this.state = {
      note: null
    }
  }

  componentDidMount() {
    this.noteObservable = getUserRef().collection("notes").doc(this.props.match.params.uid).onSnapshot(snapshot => {
      this.setState({
        note: snapshot.data()
      })
    })
  }

  componentWillUnmount() {
    this.noteObservable = null
  }

  render() {
    return (
      <>
        <h1>Note</h1>
        { this.state.note && (
          <textarea>{ this.state.note.content }</textarea>
        ) }
      </>
    )
  }

}