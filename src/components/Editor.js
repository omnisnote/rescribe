import React, { Component } from 'react'
import EasyMDE from "easymde"


export default class Editor extends Component {
  constructor(props) {
    super(props)
    this.state = {
      mde: null,
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

    this.state.mde.codemirror.on("change", () => {
      this.props.onChange && this.props.onChange(this.state.mde)
    })
  }


  render() {
    return (
      <div className="editor">
        <textarea ref={ e => this.editorEl = e } ></textarea>
      </div>
    )
  }
}