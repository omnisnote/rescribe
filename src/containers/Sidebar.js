import React, { Component } from 'react'
import { Link } from "react-router-dom"
import MaterialIcon from 'material-icons-react'

import { createNote } from "../firebase/db"


export default class Sidebar extends Component {

  create(e) {
    createNote("", "new note", (ref, res) => {
      this.props.history.push("/note/" + ref.id)
    })
  }

  render() {
    return (
      <div className="sidebar">
        <Link to="/"><MaterialIcon icon="apps" size={this.props.size || 48} color={this.props.color || '#fff'}/></Link>
        <Link to="/notes"><MaterialIcon icon="format_list_bulleted" size={this.props.size || 48} color={this.props.color || '#fff'}/></Link>
        <Link to="/settings"><MaterialIcon icon="settings" size={this.props.size || 48} color={this.props.color || '#fff'}/></Link>
        <Link to="/settings"><MaterialIcon icon="add" size={this.props.size || 48} color={this.props.color || '#fff'}/></Link>

      </div>
    )
  }
}