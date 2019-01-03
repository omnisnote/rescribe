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
      placeholder: "write something"
    })
  }

  render() {
    return (
      <textarea ref={ e => this.editorEl = e } ></textarea>
    )
  }

}