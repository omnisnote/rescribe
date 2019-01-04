import React, { Component } from 'react'
import { Link } from "react-router-dom"
import { Icon } from "antd"


export default class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        <ul>
          <li>
            <Link to="/notes">
              <Icon type="bars" style={{ fontSize: "32px", color: "rgba(255,255,255, 0.85)" }}/>
            </Link>
          </li>
          <li>
            <Link to="/settings">
              <Icon type="setting" style={{ fontSize: "32px", color: "rgba(255,255,255, 0.85)" }}/>
            </Link>
          </li>
          <li>
            <Link to="">
              <Icon type="question" style={{ fontSize: "32px", color: "rgba(255,255,255, 0.85)" }}/>
            </Link>
          </li>
        </ul>
        
        
        
      </div>
    )
  }
}