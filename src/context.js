import React from 'react'

const UserContext = React.createContext({ 
  ready: false,
  authed: false,
})

export default UserContext