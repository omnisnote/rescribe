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

  componentDidUpdate(prevProps) {
    if(this.props.defaultValue !== prevProps.defaultValue) {
      this.setState({
        value: this.props.defaultValue
      })
      this.props.onUnmount && this.props.onUnmount({ value: this.state.value || "" })
    }
  }

  componentWillUnmount() {
    this.props.onUnmount && this.props.onUnmount({ value: this.state.value })
  }
  
  onChange(e) {
    this.setState({ value: e.value() })
  }

  render() {
    return (
      <div className="main-editor">
        <Outline headings={ this.state.value ? this.state.value.split(/(#{1,6} .*)/g).filter(i => i.startsWith("#")) : [] } />
        <Editor value={ this.state.value }
                onChange={ e => this.onChange(e) } />
      </div>
    )
  }
}