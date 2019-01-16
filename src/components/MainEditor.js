import React, { Component } from 'react'
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
  
  onChange(e) {
    this.setState({ value: e.value() })
    this.props.onChange && this.props.onChange(e)
  }

  render() {
    return (
      <div className="main-editor">
        <Outline headings={ this.state.value ? this.state.value.split(/(#{1,6} .*)/g).filter(i => i.startsWith("#")) : [] } />
        <Editor defaultValue={ this.props.defaultValue }
                onChange={ e => this.onChange(e) } />
      </div>
    )
  }
}