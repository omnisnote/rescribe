import React, { Component } from 'react'
import { Link } from "react-router-dom"

import UserContext from "../context"

import { transformToArr, getUserRef, createNote } from "../firebase/db"

import NewNote from "../containers/NewNote"
import Sidebar from "../components/Sidebar"
import Loading from "../components/Loading"

const nouns = [ "Metis","Adrastea","Amalthea","Thebe","Io","Europa","Ganymede","Callisto","Themisto","Leda","Himalia","Lysithea","Elara","Dia","Carpo","Euporie","Thelxinoe","Euanthe","Helike","Orthosie","Iocaste","Praxidike","Harpalyke","Mneme","Hermippe","Thyone","Ananke","Herse","Aitne","Kale","Taygete","Chaldene","Erinome","Aoede","Kallichore","Kalyke","Carme","Callirrhoe","Eurydome","Pasithee","Kore","Cyllene","Eukelade","Pasiphaë","Hegemone","Arche","Isonoe","Sinope","Sponde","Autonoe","Megaclite" ]
const verbs = [ "Adamant", "Cerulean", "Boorish", "Arcadian", "Antic", "Corpulent", "Equanimous", "Guileless", "Irksome", "Luminous", "Zealous", "Withering", "Puckish" ]

export default class Notes extends Component {
  constructor(props) {
    super(props)
  }

  static contextType = UserContext

  addNote(e) {
    createNote("", verbs[Math.floor(Math.random() * verbs.length)] + " " + nouns[Math.floor(Math.random() * nouns.length)], (ref, res) => this.props.history.push("/note/" + ref.id))
  }

  render() {
    return (
      <>
        <Sidebar />
        <div className="notes">
          <NewNote />
          { this.context.notes ? transformToArr(this.context.notes).map((note, i) => (
            <Link to={"/note/" + note.uid} key={i}>
              <div className="note">
                { note.title || "untitled note" }
              </div>
            </Link>
          )) : <Loading /> }
        </div>        
      </>
    )
  }

}