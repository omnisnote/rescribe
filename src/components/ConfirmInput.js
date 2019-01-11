import React, { Component } from 'react'


export default class ConfirmInput extends Component {
  constructor(props) {
    super(props)

    this.state = {
      newVal: this.props.defaultValue
    }
  }

  render() {
    return (
      <div className={ this.props.className || "" }>
        <input 
          type="text" 
          defaultValue={ this.props.defaultValue } 
          placeholder={ this.props.placeholder } 
          //TODO: make this be an actual event
          onPressEnter={ e => this.props.onChange && this.props.onChange(this.state.newVal) }
          onChange={ e => this.setState({ newVal: e.target.value }) } />
        <button 
          style={{
            overflow: "hidden",
            maxWidth: this.props.defaultValue !== this.state.newVal ? "100%" : 0,
            padding: this.props.defaultValue !== this.state.newVal ? "0 15px" : 0
          }}
          type="primary" 
          onClick={ e => this.props.onChange && this.props.onChange(this.state.newVal) }>
          Save
        </button>
      </div>
    )
  }
}