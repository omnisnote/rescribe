import React, { Component } from 'react'
import { Link } from "react-router-dom"


export default class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        <Link to="/">Home</Link>
        <Link to="/notes">Notes</Link>

      </div>
    )
  }
}