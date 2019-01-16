import React, { Component } from 'react'

import MaterialIcon from 'material-icons-react'

export default class ConfirmInput extends Component {
  constructor(props) {
    super(props)

    this.state = {
      newVal: this.props.defaultValue
    }
  }

  componentDidUpdate(prevProps) {
    if(this.props.overwrite && this.props.overwrite(prevProps.defaultValue)) {
      this.setState({
        newVal: this.props.defaultValue
      })
    }
    
  }

  render() {
    return (
      <div className={ this.props.className || "" }>
        <input 
          type="text" 
          value={ this.state.newVal } 
          placeholder={ this.props.placeholder } 
          //TODO: make this be an actual event
          onPressEnter={ e => this.props.onChange && this.props.onChange(this.state.newVal) }
          onChange={ e => this.setState({ newVal: e.target.value }) } />
        <button 
          style={{
            opacity: this.props.defaultValue !== this.state.newVal ? 1 : 0,
            cursor: this.props.defaultValue !== this.state.newVal ? "pointer" : "auto",
          }}
          onClick={ e => this.props.onChange && this.props.onChange(this.state.newVal) }>
          <MaterialIcon icon="check"/>{this.props.text || ""}
        </button>
      </div>
    )
  }
}