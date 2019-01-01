import firebase from "firebase"
import app from "./firebase"

const auth = app.auth()

const createGoogleUser = () => {
  const provider = new firebase.auth.GoogleAuthProvider()
  return auth.signInWithPopup(provider)
}

export default auth
export { createGoogleUser }