import React, { Component } from 'react'
import { getUserRef, createNote } from "../firebase/db"
import MaterialIcon from 'material-icons-react'

import MiniEditor from "../components/MiniEditor"

export default class NewNote extends Component {

  constructor(props) {
    super(props)
    this.state = {}
  }

  create(e) {
    this.props.onCreate && this.props.onCreate(e)
  }

  render() {
    return (
      <div className="new-note">
        <MiniEditor placeholder="take a note" />
        <button onClick={ e => this.create(e) } className="create">
          <MaterialIcon icon="arrow_forward" size="24"/>
        </button>
      </div>
    )
  }
}