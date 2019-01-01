import firebase from "firebase"
import app from "./firebase"
import auth from "./auth"

const db = app.firestore()

db.settings({
  timestampsInSnapshots: true
})

const getUserRef = () => {
  return db.collection("users").doc(auth.currentUser.uid)
}

const createUser = user => {
  getUserRef().get().then(res => {
    if(!res.exists) {
      db.collection("users").doc(user.uid).set({
        displayName: user.displayName,
        uid: user.uid,
        email: user.email,
      })
    }
  })
}

export default db
export { createUser, getUserRef }
