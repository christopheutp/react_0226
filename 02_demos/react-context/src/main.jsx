import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import MonProvider from './components/MonProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MonProvider>
      <App />
    </MonProvider>
  </StrictMode>,
)
