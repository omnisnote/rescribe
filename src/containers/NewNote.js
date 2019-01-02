import React, { Component } from 'react'
import { Input, Button, Icon } from 'antd'

const { TextArea } = Input


export default class NewNote extends Component {
  render() {
    return (
      <div className="new-note">
        <TextArea placeholder="take a note" autosize={{ minRows: 4, maxRows: 4 }} />
        <Button type="primary">
          <Icon type="right" />
        </Button>
      </div>
    )
  }
}