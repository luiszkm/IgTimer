import React from 'react'
import ReactDOM from 'react-dom/client'
import { AppRoutes } from './App.Routes'
import './styles/global.css'
import { BrowserRouter } from 'react-router-dom'
import { CyclesContextProvider } from './context/CycleContext'
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <CyclesContextProvider>
        <AppRoutes />
      </CyclesContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
