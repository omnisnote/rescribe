import React, { Component } from 'react'
import { Input, Button, Icon } from 'antd'

import { getUserRef, createNote } from "../firebase/db"

const { TextArea } = Input


export default class NewNote extends Component {

  constructor(props) {
    super(props)
    this.state = {}
  }

  create(e) {
    createNote()
  }

  render() {
    return (
      <div className="new-note">
        <TextArea placeholder="take a note" autosize={{ minRows: 4, maxRows: 4 }} />
        <Button type="primary" onClick={ e => this.create(e) }>
          <Icon type="right" />
        </Button>
      </div>
    )
  }
}