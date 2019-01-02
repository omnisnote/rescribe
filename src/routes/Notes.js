import React, { Component } from 'react'
import { Link } from "react-router-dom"
import { Button } from 'antd'

import UserContext from "../context"

import { transformToArr, getUserRef } from "../firebase/db"

export default class Notes extends Component {
  constructor(props) {
    super(props)
  }

  static contextType = UserContext

  addNote(e) {
    getUserRef().collection("notes").add({
      content: "hello!"
    }).then(ref => {
      getUserRef().update({
        ["notes." + ref.id]: {
          title: "new document",
        }
      }).then(res => { //TODO: make this not bad
        this.props.history.push("/note/" + ref.id)
      })
    })
  }

  render() {
    return (
      <>
        <h1>Notes</h1>
        <div className="notes">
          { this.context.notes ? transformToArr(this.context.notes).map((note, i) => (
            <Link to={"/note/" + note.uid} key={i}>
              <div className="note">
                { note.title }
              </div>
            </Link>
          )) : <p>loading notes</p> }
        </div>        
        <Button type="primary" shape="circle" icon="plus" onClick={ e => this.addNote(e) } />
      </>
    )
  }

}