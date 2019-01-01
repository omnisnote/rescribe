import firebase from "firebase"
import app from "./firebase"

const db = app.firestore()

db.settings({
  timestampsInSnapshots: true
})

const createUser = user => {
  console.log("hi")
  db.collection("users").doc(user.uid).set({
    displayName: user.displayName,
    uid: user.uid,
    email: user.email,
  })
}

export default db
export { createUser }
