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
      <div>
        <input 
          type="text" 
          defaultValue={ this.props.defaultValue } 
          onChange={ e => this.setState({ newVal: e.target.value }) } />
        { this.props.defaultValue !== this.state.newVal && (
          <button onClick={ e => this.props.onChange && this.props.onChange(this.state.newVal) }>enter</button>
        )}
      </div>
    )
  }
}