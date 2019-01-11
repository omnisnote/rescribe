import React, { Component } from 'react'
import EasyMDE from "easymde"
// import Minimap from "../Minimap"
import Outline from "./Outline"
import Editor from "./Editor"


export default class MainEditor extends Component {
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
      <div className="editor">
        <Outline headings={ this.state.value ? this.state.value.split(/(#{1,6} .*)/g).filter(i => i.startsWith("#")) : [] } />
        <Editor defaultValue={ this.props.defaultValue }
                onChange={ e => this.setState({ value: e.value() }) } />
      </div>
    )
  }
}