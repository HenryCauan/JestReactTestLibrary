import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Tasks from './components/Tasks.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Tasks />
  </StrictMode>,
)
