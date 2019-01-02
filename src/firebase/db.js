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

const setMeta = (uid, data) => {
  getUserRef().update("notes." + uid, data)
}

const transformToArr = (data) => Object.entries(data).map(entry => ({ uid: entry[0], ...entry[1] }))

export default db
export { createUser, getUserRef, transformToArr, setMeta }
