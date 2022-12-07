import React from 'react'
import ReactDOM from 'react-dom/client'
import { AppRoutes } from './AppRoutes'
import './styles/global.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </React.StrictMode>,
)
