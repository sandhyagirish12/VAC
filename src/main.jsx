import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import ConsultationLanding from './components/ConsultationLanding'
import './styles.css'

const page = window.location.pathname === '/free-skin-consultation'
  ? <ConsultationLanding />
  : <App />

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {page}
  </React.StrictMode>
)
