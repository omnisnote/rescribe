import React, { Component } from 'react'
import { Link } from "react-router-dom"
import UserContext from "../context"

import { transformToArr, getUserRef, createNote } from "../firebase/db"

import Loading from "../components/Loading.js"
import NoteCard from "../components/NoteCard.js"

export default class NoteList extends Component {
  static contextType = UserContext

  render() {
    return (
      <UserContext.Consumer>{ context => (
        <div className={ "note-list " + (this.props.sidebar ? "note-sidebar" : "") }>
          { context.notes ? transformToArr(context.notes).map((note, i) => (
            <NoteCard note={ note } key={ i } />
          )) : <Loading /> }
        </div>
      )}</UserContext.Consumer>
    )
  }

}