import React, { Component } from 'react'
import { Link } from "react-router-dom"

import { getUserRef, setMeta } from "../firebase/db"

import UserContext from "../context"
import ConfirmInput from "../components/ConfirmInput"
import Editor from "../components/Editor"

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
    return this.context.notes[this.state.uid]
  }

  render() {
    return (
      <div className="note-editor">
        { this.context.notes && 
          <ConfirmInput className="title-input"
            defaultValue={ this.getMeta().title } 
            onChange={ e => setMeta(this.state.uid, {
              title: e
            }) }/> 
        }
        { this.state.note && (
          <Editor content={ this.state.note.content } />
        ) }
      </div>
    )
  }

}