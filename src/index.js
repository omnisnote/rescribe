import React from 'react'
import ReactDOM from 'react-dom'
import App from './containers/App'
import * as serviceWorker from './serviceWorker'
import dotenv from 'dotenv'
import "antd/dist/antd.css"

dotenv.config()

ReactDOM.render(<App />, document.getElementById('root'))

serviceWorker.register()
