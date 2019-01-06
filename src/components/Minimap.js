import React, { Component } from 'react'

export default class Minimap extends Component {
  render() {
    const arr = this.props.text.split("")
    return (
      <div className="minimap" style={{ ...this.props.style }}>
        {
          arr && arr.map((e, i) => ( //TODO: think about refactoring this
            <div key={i} style={{ 
              width: "4px", 
              backgroundColor: e === " " ? "transparent" : "rgba(0, 0, 0, 0.2)",
              display: e === "\n" ? "block" : "inline-block",
              height: e === "\n" ? "0" : "8px",

            }}></div>
          ))
        }
      </div>
    )
  }
}