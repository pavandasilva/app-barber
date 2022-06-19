import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { debugContextDevtool } from 'react-context-devtool'

const debugContext = process.env.REACT_APP_DEBUG_CONTEXT
const container = document.getElementById('root')

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  container
)

debugContext && debugContextDevtool(container)
