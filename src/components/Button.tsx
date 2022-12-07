import { useState } from 'react'

import { TbHandStop, TbPlayerPlay } from 'react-icons/tb'

export function Button() {
  // eslint-disable-next-line no-unused-vars
  const [isStop, setIsStop] = useState(true)

  return isStop ? (
    <button className="w-full py-4 px-10 flex items-center justify-center gap-2 rounded-lg text-white bg-green-300 hover:bg-green-800 disabled:bg-green-500 ">
      <TbPlayerPlay />
      Começar
    </button>
  ) : (
    <button className="w-full py-4 px-10 flex items-center justify-center gap-2 rounded-lg text-white bg-red-500 hover:bg-red-900">
      <TbHandStop />
      Interromper
    </button>
  )
}
