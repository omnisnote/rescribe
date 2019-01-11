import React, { Component } from 'react'
import Editor from "./Editor"


export default class MiniEditor extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: props.defaultValue
    }
  }

  componentWillUnmount() {
    this.props.onUnmount && this.props.onUnmount({ value: this.state.value })
  }

  render() {
    return (
      <div className="mini-editor">
        <Editor defaultValue={ this.props.defaultValue }
                onChange={ e => this.setState({ value: e.value() }) } />
      </div>
    )
  }
}