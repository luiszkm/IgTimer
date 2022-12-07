import { Route, Routes } from 'react-router-dom'
import { Home } from './Home'
import { DefaultLAyout } from './layout/DefaultLayout'

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLAyout />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  )
}
