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

  componentDidMount() {
    this.setState({
      value: this.props.defaultValue
    })
  }

  componentDidUpdate(prevProps, prevState) {
    if(this.props.uid !== prevProps.uid && prevState.value !== prevProps.defaultValue) {
      this.props.onFinishChange && this.props.onFinishChange({ 
        value: prevState.value || "",
        uid: prevProps.uid
      })
      this.setState({
        value: this.props.defaultValue
      })
    }
  }

  componentWillUnmount() {
    this.props.onFinishChange && this.props.onFinishChange({ 
      value: this.state.value, 
      uid: this.props.uid 
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