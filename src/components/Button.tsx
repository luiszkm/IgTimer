import { useState } from "react"

import {TbHandStop, TbPlayerPlay} from "react-icons/tb"

export function Button() {
  const [isStop, setIsStop] = useState(false)

  return (
    isStop ?
      <button className="w-full py-4 px-10 flex items-center gap-2 ">
        <TbPlayerPlay />
        Começar
      </button> :

      <button className="w-full py-4 px-10 flex items-center gap-2">
        <TbHandStop />
        Interromper
      </button>
  )
}