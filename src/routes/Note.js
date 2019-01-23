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

    this.noteObservable = this.getNotesDoc(this.props.match.params.uid).onSnapshot(snapshot => {
      let data = snapshot.data()
      if(data) {
        this.setState({
          note: data,
          newContent: data.content
        })
      }
    })
  }

  static contextType = UserContext

  static getDerivedStateFromProps(props, state) {
    return {
      note: state.note || null,
      uid: props.match.params.uid
    }
  }

  getNotesDoc(uid) {
    return getUserRef().collection("notes").doc(uid || this.state.uid || this.props.match.params.uid)
  }

  componentDidUpdate(prevProps) {
    if(prevProps.match.params.uid !== this.props.match.params.uid) {
      this.setState({
        note: null,
      })
      this.noteObservable = this.getNotesDoc(this.props.match.params.uid).onSnapshot(snapshot => {
        let data = snapshot.data()
        if(data) {
          this.setState({
            note: data,
            newContent: data.content
          })
        }
      })
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
    // this.getNotesDoc(e.uid).set({
    //   content: e.value
    // })
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
              overwrite={ def => def !== (this.getMeta() || {}).title }
              placeholder="untitled note"
              onChange={ e => setMeta(this.state.uid, {
                title: e
              }) }/> 
          }
          { this.state.note && (
            <div className="editor">
              <MainEditor 
                defaultValue={ this.state.newContent }
                uid={ this.state.uid }
                onUnmount={ e => this.saveDoc(e) } />
            </div>
          ) }
        </div>
      </div>
    )
  }

}