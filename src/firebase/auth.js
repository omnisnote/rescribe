import firebase from "firebase"
import app from "./firebase"

const auth = app.auth()

const authGoogleUser = () => {
  const provider = new firebase.auth.GoogleAuthProvider()
  return auth.signInWithPopup(provider)
}


export default auth
export { authGoogleUser }