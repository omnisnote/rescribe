import React, { Component } from 'react'
import { Link } from "react-router-dom"

import { pushArr, getUserRef } from "../firebase/db"

export default class Note extends Component {
  constructor(props) {
    super(props)
    this.state = {
      ref: getUserRef().collection("notes").doc(props.match.params.uid),
      note: null
    }
  }

  componentDidMount() {
    this.noteObservable = this.state.ref.onSnapshot(snapshot => {
      this.setState({
        note: snapshot.data()
      })
    })
  }

  componentWillUnmount() {
    this.noteObservable = null

    this.state.ref.set({
      content: document.getElementById("h").value
    })
  }

  render() {
    return (
      <>
        <Link to="/notes" onClick={ e => this.save(e) }>go back</Link>
        <h1>Note</h1>
        
        { this.state.note && (
          <textarea id="h">{ this.state.note.content }</textarea>
        ) }
      </>
    )
  }

}