import { Header } from '../components/Header'
import { Outlet } from 'react-router-dom'

export function DefaultLAyout() {
  return (
    <div className="w-full h-full py-10 bg-gray-900 ">
      <div className="max-w-6xl h-[calc(100vh_-_10rem)] my-5 mx-auto p-3 capitalize rounded-lg flex flex-col items-center bg-gray-800 ">
        <Header />
        <Outlet />
      </div>
    </div>
  )
}
