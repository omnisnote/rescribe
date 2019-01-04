import React, { Component } from 'react'
import EasyMDE from "easymde"


export default class Editor extends Component {
  constructor(props) {
    super(props)
    this.state = {
      mde: null
    }
  }

  componentDidMount() {
    this.state.mde = new EasyMDE({
      element: this.editorEl,
      toolbar: [],
      parsingConfig: {
        strikethrough: true
      },
      status: false,
      autofocus: true,
      initialValue: this.props.defaultValue,
      placeholder: "write something"
    })
  }

  componentWillUnmount() {
    this.props.onUnmount && this.props.onUnmount({ value: this.state.mde.value() })
  }

  render() {
    return (
      <textarea ref={ e => this.editorEl = e } ></textarea>
    )
  }

}