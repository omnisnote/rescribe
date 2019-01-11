import React, { Component } from 'react'
import { Link } from "react-router-dom"

import UserContext from "../context"

import { transformToArr, getUserRef, createNote } from "../firebase/db"

import NewNote from "../containers/NewNote"
import Sidebar from "../components/Sidebar"

export default class Notes extends Component {
  constructor(props) {
    super(props)
  }

  static contextType = UserContext

  addNote(e) {
    createNote("new Note", "", (ref, res) => this.props.history.push("/note/" + ref.id))
  }

  render() {
    return (
      <>
        <Sidebar />
        <div className="notes">
          <NewNote />
          { this.context.notes ? transformToArr(this.context.notes).map((note, i) => (
            <Link to={"/note/" + note.uid} key={i}>
              <div className="note">
                { note.title }
              </div>
            </Link>
          )) : <p>loading notes</p> }
        </div>        
      </>
    )
  }

}