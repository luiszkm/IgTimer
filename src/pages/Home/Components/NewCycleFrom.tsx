import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'
import { useState } from 'react'
import { useCycles } from '../../../hooks/useCycles'
import { useFormContext } from 'react-hook-form'


export function NewCycleForm() {

  const { activeCycle } = useCycles()
  const { register } = useFormContext()
  const [countMinutes, setCountMinutes] = useState<number>(0)

  function handleSetMinutes(minutes: number) {
    event?.preventDefault()
    countMinutes < 0 ? setCountMinutes(0) :
      countMinutes > 60 ? setCountMinutes(60) :
        setCountMinutes(prevStat => Number(prevStat + minutes))
  }

  return (
    <div className='flex flex-col items-center gap-14'>

      <div
        className='flex-wrap w-full flex items-center gap-2'>
        <label className='text-lg font-bold text-gray-100'
          htmlFor="task">Vou trabalhar em</label>

        <input className='w-64 bg-transparent font-bold text-lg text-gray-100 outline-none border-b-2 border-gray-500 focus-within:border-green-500 disabled:cursor-not-allowed
       placeholder:font-bold  '
          id='task'
          type="text"
          list='taskSuggestions'
          placeholder='Dê um nome para o seu projeto'
          disabled={!!activeCycle}
          {...register('task')}
        />
        <datalist id='taskSuggestions'>
          <option value="projeto 1" />
        </datalist>
        <span className='text-lg text-gray-100'>Durante</span>
        <div className='flex items-center gap-2 text-gray-500 border-gray-500 font-bold border-b-2 focus-within:border-green-500'>
          <button className='hover:text-green-500 disabled:cursor-not-allowed '
            disabled={!!activeCycle}
            onClick={() => handleSetMinutes(5)}>
            <AiOutlinePlus />
          </button>
          <input className="bg-transparent w-8 px-1 outline-none disabled:cursor-not-allowed"
            id='amountMinutes'
            type="number"
            disabled={!!activeCycle}
            value={countMinutes < 10 ? `0${countMinutes}` : countMinutes}
            {...register('amountMinutes', { valueAsNumber: true })}

          />
          <button className='hover:text-green-500 disabled:cursor-not-allowed '
            disabled={!!activeCycle}
            onClick={() => handleSetMinutes(-5)}>
            <AiOutlineMinus />
          </button>
        </div>
        <span className='text-lg font-bold text-gray-100'>minutos</span>
      </div>
    </div>
  )
}