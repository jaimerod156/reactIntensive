import { StrictMode } from 'react' //no es compatible con react-beautiful-dnd
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <div>
    <App />
  </div>
)
