import React, { Component } from 'react'

import db from "../firebase/db"

import Sidebar from "../containers/Sidebar"

export default class Tags extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <>
        <Sidebar />
        <div>
          <h1>tags</h1>
        </div>
      </>
    )
  }
}