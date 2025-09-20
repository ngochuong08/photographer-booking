import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './styles/index.css'

// Minimal SPA bootstrap (react-router removed). If you still need full SPA routing,
// keep react-router-dom installed or migrate App to Next pages.
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
