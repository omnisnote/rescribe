import React, { Component } from 'react'
import { Link } from "react-router-dom"

import { pushArr, getUserRef } from "../firebase/db"

export default class Notes extends Component {
  constructor(props) {
    super(props)
    this.state = {
      notes: null
    }
  }

  componentDidMount() {
    this.notesObservable = getUserRef().onSnapshot(snapshot => {
      this.setState({
        notes: snapshot.data().notes
      })
    })
  }

  componentWillUnmount() {
    this.notesObservable = null
  }

  addNote(e) {
    getUserRef().collection("notes").add({
      content: "hello!"
    }).then(ref => {
      pushArr(getUserRef(), "notes", {
        title: "new document",
        uid: ref.id
      })
    })
  }

  render() {
    return (
      <>
        <h1>Notes</h1>
        { this.state.notes ? this.state.notes.map((note, i) => (
          <div key={i}><h1>{note.title}</h1></div>
        )) : <p>loading notes</p> }

        <button onClick={ e => this.addNote(e) }>add note</button>
      </>
    )
  }

}