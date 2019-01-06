import React, { Component } from 'react'

export default class Outline extends Component {
  render() {
    return (
      <div className="outline" >
        { this.props.headings.map((h, i) => (
          <p key={i} style={{
            marginLeft: (h.match(/^(#{1,6})/g).length * 20) + "px"
          }}>{ h.replace(/#/g, "") }</p>
        )) }
      </div>
    )
  }
}