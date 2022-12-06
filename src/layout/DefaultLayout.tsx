import { Header } from "../components/Header";
import { Outlet } from 'react-router-dom'



export function DefaultLAyout() {

  return (
    <div className="max-w-6xl h-[calc(100vh_-_10rem)] my-5 mx-auto p-3 ">
      <Header />
      <Outlet />
    </div>
  )
}