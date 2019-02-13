import React, { Component } from 'react'
import { Link } from "react-router-dom"
import { withRouter } from "react-router"
import MaterialIcon from 'material-icons-react'

import { createNote } from "../firebase/db"

class Sidebar extends Component {
  create(e) {
    createNote("", "new note", (ref, res) => {
      this.props.history.push("/note/" + ref.id)
    })
  }

  render() {
    return (
      <div className="sidebar">
        <Link to="/"><MaterialIcon icon="apps" size={this.props.size || 24} color={this.props.color || '#060a0b'}/></Link>
        <Link to="/settings"><MaterialIcon icon="settings" size={this.props.size || 24} color={this.props.color || '#060a0b'}/></Link>
        <Link to="/tags"><MaterialIcon icon="label" size={this.props.size || 24} color={this.props.color || '#060a0b'}/></Link>
        <a href="#" onClick={ e => this.create(e) }><MaterialIcon icon="add" size={this.props.size || 24} color={this.props.color || '#060a0b'}/></a>
      </div>
    )
  }
}

export default withRouter(Sidebar)
