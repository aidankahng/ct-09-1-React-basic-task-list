import React from 'react'
import ReactDOM from 'react-dom/client'
import Nav from './Navigation.tsx'
import TaskForm from './TaskForm.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
