import React, { Component } from 'react'
import { getUserRef, createNote } from "../firebase/db"
import MaterialIcon from 'material-icons-react'

import MiniEditor from "../components/MiniEditor"

const nouns = [ "Metis","Adrastea","Amalthea","Thebe","Io","Europa","Ganymede","Callisto","Themisto","Leda","Himalia","Lysithea","Elara","Dia","Carpo","Euporie","Thelxinoe","Euanthe","Helike","Orthosie","Iocaste","Praxidike","Harpalyke","Mneme","Hermippe","Thyone","Ananke","Herse","Aitne","Kale","Taygete","Chaldene","Erinome","Aoede","Kallichore","Kalyke","Carme","Callirrhoe","Eurydome","Pasithee","Kore","Cyllene","Eukelade","Pasiphaë","Hegemone","Arche","Isonoe","Sinope","Sponde","Autonoe","Megaclite" ]
const verbs = [ "Adamant", "Cerulean", "Boorish", "Arcadian", "Antic", "Corpulent", "Equanimous", "Guileless", "Irksome", "Luminous", "Zealous", "Withering", "Puckish" ]

export default class NewNote extends Component {

  constructor(props) {
    super(props)
    this.state = {}
  }

  create(e) {
    createNote("", verbs[Math.floor(Math.random() * verbs.length)] + " " + nouns[Math.floor(Math.random() * nouns.length)], (ref, res) => 
      this.props.onCreate && this.props.onCreate(ref, res))
  }

  render() {
    return (
      <div className="new-note">
        <MiniEditor placeholder="take a note" autosize={{ minRows: 4, maxRows: 4 }} />
        <button onClick={ e => this.create(e) } className="create">
          <MaterialIcon icon="arrow_forward" size="24"/>
        </button>
      </div>
    )
  }
}