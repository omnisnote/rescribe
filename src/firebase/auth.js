import app from "./firebase"

const auth = app.auth()

const createUser = uid => {
  //TODO make db creation scripts for new users
}

export default auth
export { createUser }