import firebase from "firebase"
import app from "./firebase"

const auth = app.auth()

const createUserKey = user => {
  console.log("pretend I am making the db entry for this user: " + uid)
  //TODO make db creation scripts for new users
}

const createGoogleUser = () => {
  const provider = new firebase.auth.GoogleAuthProvider()
  return auth.signInWithPopup(provider)
}

export default auth
export { createUserKey, createGoogleUser }