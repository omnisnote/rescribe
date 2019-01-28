import React from 'react'
import { Link } from 'react-router-dom'


const NoteCard = props => {

  return (
    <Link to={ "/note/" + props.note.uid }>
      <div className="note-card">
        <p>{ props.note.title }</p>
      </div>
    </Link>
  )
}

export default NoteCard