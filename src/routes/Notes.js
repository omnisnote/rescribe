import React, { Component } from 'react'
import { Link } from "react-router-dom"

import UserContext from "../context"

import { pushArr, getUserRef } from "../firebase/db"

export default class Notes extends Component {
  constructor(props) {
    super(props)
  }

  static contextType = UserContext

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
        { this.context.notes ? this.context.notes.map((note, i) => (
          <div key={i}>
            <Link to={"/note/" + note.uid}>
              <p>{note.title}</p>
            </Link>
          </div>
        )) : <p>loading notes</p> }

        <button onClick={ e => this.addNote(e) }>add note</button>
      </>
    )
  }

}