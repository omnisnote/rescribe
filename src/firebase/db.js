import firebase from "firebase"
import app from "./firebase"
import auth from "./auth"

const db = app.firestore()

db.settings({
  timestampsInSnapshots: true
})


const createUser = user => {
  console.log(getUserRef())
  db.collection("users").doc(user.uid).set({
    displayName: user.displayName,
    uid: user.uid,
    email: user.email,
  })
  // window.userRef = getUserRef()
  // getUserRef().get("uid").then(uid => {
  //   if(!uid.exists) {
  //     db.collection("users").doc(user.uid).set({
  //       displayName: user.displayName,
  //       uid: user.uid,
  //       email: user.email,
  //     })
  //   }
  // })
}

// const getUserData = ref => {
//   if(!auth.currentUser) return null
//   console.log(db.collection("users").doc(auth.currentUser.uid).get())
// }

const getUserRef = () => {
  return db.collection("users").doc(auth.currentUser.uid)
}

window.userRef = getUserRef

export default db
export { createUser, getUserRef }
