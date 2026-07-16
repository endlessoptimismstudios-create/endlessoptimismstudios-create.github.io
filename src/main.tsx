import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <div style={{ backgroundColor: "#8b0000" }}>
  <StrictMode>
    <App />
  </StrictMode></div>,
)
