import React, { Component } from 'react'
import Outline from "./Outline"
import Editor from "./Editor"

export default class MainEditor extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: props.note.content,
      uid: props.note.uid //TODO: is this bad?
    }
  }

  componentDidUpdate() {
    
  }

  componentWillUnmount() {
    this.props.onFinishChange && this.props.onFinishChange({
      value: this.state.value,
      uid: this.state.uid
    })
  }

  render() {
    return (
      <div className="main-editor">
        <Outline headings={ this.state.value ? this.state.value.split(/(#{1,6} .*)/g).filter(i => i.startsWith("#")) : [] } />
        <Editor value={ this.state.value }
                onChange={ e => this.setState({ value: e.value() }) } />
      </div>
    )
  }
}