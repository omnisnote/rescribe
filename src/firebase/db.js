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

const getNote = (notes, uid) => {
  let ret = null
  notes.forEach(note => { if(note.uid === uid) ret = note })
  return ret
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

const pushArr = (ref, key, val) => {
  ref.update({
    [key]: firebase.firestore.FieldValue.arrayUnion(val)
  })
}

const modArr = (ref, key, val) => {
  ref.update({
    [key]: firebase.firestore.FieldValue.arrayUnion(val)
  })
}

const transformToArr = (data) => Object.entries(data).map(entry => ({ uid: entry[0], ...entry[1] }))

const setMeta = (uid, data) => {
  getUserRef().where("notes.uid", "array-contains", uid).update("notes", data)
}

window.getUserRef = getUserRef

export default db
export { createUser, getUserRef, pushArr, getNote, setMeta, transformToArr }
