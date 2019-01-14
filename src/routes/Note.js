import React, { Component } from 'react'
import { Link } from "react-router-dom"

import { getUserRef, setMeta } from "../firebase/db"

import UserContext from "../context"

import ConfirmInput from "../components/ConfirmInput"
import MainEditor from "../components/MainEditor"
import Sidebar from "../containers/Sidebar"
import NoteList from "../containers/NoteList"

function getNotesDoc(props) {
  return getUserRef().collection("notes").doc(props.match.params.uid)
}

export default class Note extends Component {
  constructor(props) {
    super(props)
  }

  static contextType = UserContext

  componentDidMount() {
    
  }

  static getDerivedStateFromProps(props, state) {
    return {
      note: null,
      uid: props.match.params.uid,
    }
  }


  componentWillUnmount() {
    this.noteObservable = null
  }

  getMeta() {
    //TODO: store this in state or something
    return this.context.notes[this.props.uid]
  }

  saveDoc(e) {
    getNotesDoc(this.props).set({
      content: e.value
    })
  }

  render() {
    this.noteObservable = getNotesDoc(this.props).onSnapshot(snapshot => {
      this.setState({
        note: snapshot.data()
      })
    })

    return (
      <div className="note">
        <Sidebar color="rgba(255,255,255,0.85)" size={ 36 }/>
        <NoteList sidebar/>
        <div className="note-editor">
          { this.context.notes && 
            <ConfirmInput className="title-input"
              defaultValue={ (this.state.meta || {}).title } 
              placeholder="untitled note"
              onChange={ e => setMeta(this.props.uid, {
                title: e
              }) }/> 
          }
          { this.state.note && (
            <div className="editor">
              <MainEditor 
                defaultValue={ this.state.note.content } 
                onUnmount={ e => this.saveDoc(e) } />
            </div>
          ) }
        </div>
      </div>
    )
  }

}