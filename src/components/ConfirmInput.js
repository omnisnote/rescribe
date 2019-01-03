import React, { Component } from 'react'
import { Input, Button } from "antd"

const { TextArea } = Input

export default class ConfirmInput extends Component {
  constructor(props) {
    super(props)

    this.state = {
      newVal: this.props.defaultValue
    }
  }

  render() {
    return (
      <div className={ this.props.className || "" }>
        <TextArea 
          type="text" 
          defaultValue={ this.props.defaultValue } 
          onChange={ e => this.setState({ newVal: e.target.value }) } autosize/>
        <Button 
          style={{
            overflow: "hidden",
            maxWidth: this.props.defaultValue !== this.state.newVal ? "100%" : 0,
            padding: this.props.defaultValue !== this.state.newVal ? "0 15px" : 0
          }}
          type="primary" 
          onClick={ e => this.props.onChange && this.props.onChange(this.state.newVal) }>
          Save
        </Button>
      </div>
    )
  }
}