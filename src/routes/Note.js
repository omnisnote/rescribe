import React, { Component } from 'react'
import { Link } from "react-router-dom"

import { getUserRef, setMeta } from "../firebase/db"

import UserContext from "../context"

import ConfirmInput from "../components/ConfirmInput"
import MainEditor from "../components/MainEditor"
import Sidebar from "../containers/Sidebar"
import NoteList from "../containers/NoteList"

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

  componentDidUpdate(prevProps) {
    if(!this.state.uid || this.state.uid !== prevProps.match.params.uid) {
      if(this.state.newContent !== undefined) {
        this.saveDoc({ value: this.state.newContent })
      }
      this.noteObservable = this.getNotesDoc().onSnapshot(snapshot => {
        this.setState({
          note: snapshot.data()
        })
      })
    }
  }

  static getDerivedStateFromProps(props, state) {
    return {
      note: state.note || null,
      uid: props.match.params.uid,
    }
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
      <div className="note">
        <Sidebar color="rgba(255,255,255,0.85)" size={ 36 }/>
        <NoteList sidebar/>
        <div className="note-editor">
          { this.context.notes && 
            <ConfirmInput className="title-input"
              defaultValue={ (this.getMeta() || {}).title } 
              overwrite={ def => {
                return (def !== (this.getMeta() || {}).title)
              } }
              placeholder="untitled note"
              onChange={ e => setMeta(this.props.uid, {
                title: e
              }) }/> 
          }
          { this.state.note && (
            <div className="editor">
              <MainEditor 
                defaultValue={ this.state.note.content } 
                onChange={ e => this.setState({newContent: e.value()}) }
                onUnmount={ e => this.saveDoc(e) } />
            </div>
          ) }
        </div>
      </div>
    )
  }

}