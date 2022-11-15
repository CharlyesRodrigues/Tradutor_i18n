import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import './Styles/global.css'
 // import Styles from './Styles/global.css'  Os dois imports referente ao estilo global estão corretos vou usar o de cima


  import './i18n/index'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
