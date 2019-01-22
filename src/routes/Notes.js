import React, { Component } from 'react'
import { Link } from "react-router-dom"

import MaterialIcon from 'material-icons-react'

import UserContext from "../context"

import { transformToArr, getUserRef, createNote } from "../firebase/db"

import NewNote from "../containers/NewNote"
import Sidebar from "../containers/Sidebar"
import NoteList from "../containers/NoteList"

const nouns = [ "Metis","Adrastea","Amalthea","Thebe","Io","Europa","Ganymede","Callisto","Themisto","Leda","Himalia","Lysithea","Elara","Dia","Carpo","Euporie","Thelxinoe","Euanthe","Helike","Orthosie","Iocaste","Praxidike","Harpalyke","Mneme","Hermippe","Thyone","Ananke","Herse","Aitne","Kale","Taygete","Chaldene","Erinome","Aoede","Kallichore","Kalyke","Carme","Callirrhoe","Eurydome","Pasithee","Kore","Cyllene","Eukelade","Pasiphaë","Hegemone","Arche","Isonoe","Sinope","Sponde","Autonoe","Megaclite" ]
const verbs = [ "Adamant", "Cerulean", "Boorish", "Arcadian", "Antic", "Corpulent", "Equanimous", "Guileless", "Irksome", "Luminous", "Zealous", "Withering", "Puckish" ]

export default class Notes extends Component {
  constructor(props) {
    super(props)
  }

  create(e) {
    console.log("hi")
    createNote("", verbs[Math.floor(Math.random() * verbs.length)] + " " + nouns[Math.floor(Math.random() * nouns.length)], (ref, res) => {
      this.props.history.push("/note/" + ref.id)
    })
  }

  render() {
    return (
      <UserContext.Consumer>{ context => (
        <>
          <Sidebar color="rgba(255,255,255,0.85)" size={ 36 }/>
          <NewNote />
          <NoteList />
          <button className="add" onClick={ e => this.create() }>
            <MaterialIcon icon="add" size={32} />
          </button>
        </>
      )}</UserContext.Consumer>
    )
  }

}