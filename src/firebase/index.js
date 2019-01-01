import firebase from "firebase"

const app = firebase.initializeApp({
  apiKey: process.env.REACT_APP_FB_KEY,
  authDomain: process.env.REACT_APP_FB_DOMAIN,
  databaseURL: process.env.REACT_APP_FB_DATABASE,
  projectId: process.env.REACT_APP_FB_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FB_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FB_SENDER_ID
})

export default app
