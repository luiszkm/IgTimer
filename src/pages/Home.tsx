import { Button } from '../components/Button'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'
import { useState } from 'react'
export function Home() {
  const [countMinutes, setCountMinutes] = useState(0)
  function handleSetMinutes(minutes: number) {
    event?.preventDefault()
    setCountMinutes(prevStat => prevStat + minutes)
  }
  return (
    <div className='flex flex-col items-center gap-14'>
      <form className='flex-wrap w-full flex items-center gap-2'>
        <label className='text-lg font-bold text-gray-100'
          htmlFor="worker">Vou trabalhar em</label>

        <input className='w-64 bg-transparent font-bold text-lg text-gray-100 outline-none border-b-2 border-gray-500 focus-within:border-green-500
         placeholder:font-bold  '
          placeholder='Dê um nome para o seu projeto'
          type="text" id='worker'
          list='taskSuggestions' />
        <datalist id='taskSuggestions'>
          <option value="projeto 1" />
        </datalist>
        <span className='text-lg text-gray-100'>Durante</span>
        <div className='flex items-center gap-2 text-gray-500 border-gray-500 font-bold border-b-2 focus-within:border-green-500'>
          <button className='hover:text-green-500'
            onClick={() => handleSetMinutes(5)}>
            <AiOutlinePlus />
          </button>
          {countMinutes < 10 ? `0${countMinutes}` : countMinutes}
          <button className='hover:text-green-500'
            onClick={() => handleSetMinutes(-5)}>
            <AiOutlineMinus />
          </button>
        </div>
        <span className='text-lg font-bold text-gray-100'>minutos</span>
      </form>

      <div className=' flex items-center gap-4 '>
        <span className=' text-[80px]  bg-gray-700 flex items-center justify-center  font-bold font-mono text-gray-100 rounded-lg md:w-32 md:h-48 md:text-mega'>
          0
        </span>
        <span className=' text-[80px] bg-gray-700 flex items-center justify-center  font-bold font-mono text-gray-100 rounded-lg md:w-32 md:h-48 md:text-mega'>
          0
        </span>
        <span className=' text-[80px] flex items-center justify-center  font-bold font-mono text-green-800 rounded-lg md:w-32 md:h-48 md:text-mega '>
          :
        </span>
        <span className=' text-[80px] bg-gray-700 flex items-center justify-center  font-bold font-mono text-gray-100 rounded-lg md:w-32 md:h-48 md:text-mega'>
          0
        </span>
        <span className=' text-[80px] bg-gray-700 flex items-center justify-center  font-bold font-mono text-gray-100 rounded-lg md:w-32 md:h-48 md:text-mega'>
          0
        </span>

      </div>
      <Button />
    </div>
  )
}
