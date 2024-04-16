import React from 'react'
import ReactDOM from 'react-dom/client'
import Nav from './Navigation.tsx'
import TaskForm from './Forms.tsx'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Nav />
    <TaskForm />
  </React.StrictMode>,
)
