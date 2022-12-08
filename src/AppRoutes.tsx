import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { DefaultLAyout } from './layout/DefaultLayout'
import { History } from './pages/History'

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLAyout />}>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
      </Route>
    </Routes>
  )
}
