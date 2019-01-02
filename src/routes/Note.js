import React, { Component } from 'react'
import { Link } from "react-router-dom"

import { getUserRef, getNote } from "../firebase/db"

import UserContext from "../context"

export default class Note extends Component {
  constructor(props) {
    super(props)
    this.state = {
      note: null,
      uid: props.match.params.uid,
    }
  }

  static contextType = UserContext

  getNotesDoc() {
    return getUserRef().collection("notes").doc(this.props.match.params.uid)
  }

  componentDidMount() {
    this.noteObservable = this.getNotesDoc().onSnapshot(snapshot => {
      this.setState({
        note: snapshot.data()
      })
    })
  }

  componentWillUnmount() {
    this.noteObservable = null

    //TODO: figure out a workaround for this being in the state thing
    this.getNotesDoc().set({
      content: document.getElementById("h").value
    })
  }

  getMeta() {
    //TODO: store this in state or something
    return getNote(this.context.notes, this.state.uid)
  }

  setTitle(e) {
    
  }

  render() {
    return (
      <>
        <Link to="/notes">go back</Link>
        <h1>Note</h1>
        { this.context.notes && <p>{ this.getMeta().title }</p> }
        { this.state.note && (
          <textarea id="h">{ this.state.note.content }</textarea>
        ) }
      </>
    )
  }

}