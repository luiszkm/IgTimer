import React from 'react'
import ReactDOM from 'react-dom/client'
import { DefaultLAyout } from './layout/DefaultLayout'
import './styles/global.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <DefaultLAyout />
  </React.StrictMode>,
)
