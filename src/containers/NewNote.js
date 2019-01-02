import React, { Component } from 'react'
import { Input, Button, Icon } from 'antd'

const { TextArea } = Input


export default class NewNote extends Component {
  render() {
    return (
      <div className="new-note">
        <TextArea placeholder="take a note" autosize={{ minRows: 6, maxRows: 6 }} />
        <Button>
          <Icon type="right" />
        </Button>
      </div>
    )
  }
}