import React, { Component } from 'react'
import { Link } from "react-router-dom"

import UserContext from "../context"

import { transformToArr, getUserRef, createNote } from "../firebase/db"

import NewNote from "../containers/NewNote"
import Sidebar from "../containers/Sidebar"
import Loading from "../components/Loading"


export default class Notes extends Component {
  constructor(props) {
    super(props)
  }

  create(ref, res) {
    this.props.history.push("/note/" + ref.id)
  }

  render() {
    return (
      <UserContext.Consumer>{ context => (
        <>
        <Sidebar color="rgba(255,255,255,0.85)" size={ 36 }/>
        <div className="notes">
          <NewNote onCreate={ (ref, res) => this.create(ref, res) } />
          { context.notes ? transformToArr(context.notes).map((note, i) => (
            <Link to={"/note/" + note.uid} key={i}>
              <div className="note">
                { note.title || "untitled note" }
              </div>
            </Link>
          )) : <Loading /> }
          </div>   
        </>
      )}</UserContext.Consumer>
    )
  }

}