import React, { Component } from 'react'
import EasyMDE from "easymde"
// import Minimap from "../components/Minimap"
import Outline from "./Outline"


export default class MainEditor extends Component {
  constructor(props) {
    super(props)
    this.state = {
      mde: null,
      value: ""
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
      this.setState({ value: this.state.mde.value() })
    })
  }

  componentWillUnmount() {
    this.props.onUnmount && this.props.onUnmount({ value: this.state.mde.value() })
  }

  render() {
    return (
      <div className="editor">
        {/* <Minimap text={ this.state.value || (this.state.mde ? this.state.mde.value() : "") }/> */}
        <Outline
          headings={ this.state.value ? this.state.value.split(/(#{1,6}.*)/g).filter(i => i.startsWith("#")) : [] }
        />
        <textarea ref={ e => this.editorEl = e } ></textarea>
      </div>
    )
  }
}