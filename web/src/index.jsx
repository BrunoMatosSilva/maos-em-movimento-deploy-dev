import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App'
import './assets/styles/global.css'
import { BackToTop } from './components/BackToTop'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <BackToTop />
  </React.StrictMode>,
)
