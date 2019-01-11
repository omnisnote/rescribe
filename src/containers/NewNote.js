import React, { Component } from 'react'
import { getUserRef, createNote } from "../firebase/db"

export default class NewNote extends Component {

  constructor(props) {
    super(props)
    this.state = {}
  }

  create(e) {
    createNote()
  }

  render() {
    return (
      <div className="new-note">
        <textarea placeholder="take a note" autosize={{ minRows: 4, maxRows: 4 }} />
        <button onClick={ e => this.create(e) }></button>
      </div>
    )
  }
}