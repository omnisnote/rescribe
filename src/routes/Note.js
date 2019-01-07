import React, { Component } from 'react'
import { Link } from "react-router-dom"

import { getUserRef, setMeta } from "../firebase/db"

import UserContext from "../context"

import ConfirmInput from "../components/ConfirmInput"
import Editor from "../components/Editor"
import Sidebar from "../components/Sidebar"

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
  }

  getMeta() {
    //TODO: store this in state or something
    return this.context.notes[this.state.uid]
  }

  saveDoc(e) {
    this.getNotesDoc().set({
      content: e.value
    })
  }

  render() {
    return (
      <>
        <Sidebar />
        <div className="note-editor">
          { this.context.notes && 
            <ConfirmInput className="title-input"
              defaultValue={ this.getMeta().title } 
              placeholder="untitled note"
              onChange={ e => setMeta(this.state.uid, {
                title: e
              }) }/> 
          }
          { this.state.note && (
            <div className="editor">
              <Editor 
                defaultValue={ this.state.note.content } 
                onUnmount={ e => this.saveDoc(e) } />
            </div>
          ) }
        </div>
      </>
    )
  }

}