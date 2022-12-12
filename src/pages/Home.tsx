import { Button } from '../components/Button'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import zod from 'zod'

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, "Informe a tarefa"),
  amountMinutes: zod.number().min(5).max(60),
})

type newCycleFormData = zod.infer<typeof newCycleFormValidationSchema>

interface Cycle {
  id: string;
  task: string
  amountMinutes: number
}

export function Home() {
  const [cycles, setCycles] = useState<Cycle[]>([])
  const [countMinutes, setCountMinutes] = useState<number>(0)
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null)
  const [amountSecondsPassed, setAmountSecondsPassed ] = useState(0)

  
  const { register, handleSubmit, watch, reset } = useForm<newCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: '',
      amountMinutes: 0,
    }
  })

  const task = watch('task')

  function handleSubmitForm(data: newCycleFormData) {

    const newCycle: Cycle = {
      id: String(new Date().getTime()),
      task: data.task,
      amountMinutes: data.amountMinutes
    }
    setCycles(prevStat => [...prevStat, newCycle])
    setActiveCycleId(newCycle.id)
    reset();
  }

  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId)

  const totalSeconds = activeCycle ? activeCycle.amountMinutes * 60 : 0
  const currentSeconds = activeCycle ? totalSeconds - amountSecondsPassed : 0

  const minutesAmount = Math.floor(currentSeconds / 60)
  const secondsAmount = currentSeconds % 60

  const minutes = String(minutesAmount).padStart(2, '0')
  const seconds = String(secondsAmount).padStart(2, '0')



  function handleSetMinutes(minutes: number) {
    event?.preventDefault()
    setCountMinutes(prevStat => Number(prevStat + minutes))
  }


  return (
    <form onSubmit={handleSubmit(handleSubmitForm)} action=''
      className='flex flex-col items-center gap-14'
    >
      <div
        className='flex-wrap w-full flex items-center gap-2'>
        <label className='text-lg font-bold text-gray-100'
          htmlFor="task">Vou trabalhar em</label>

        <input className='w-64 bg-transparent font-bold text-lg text-gray-100 outline-none border-b-2 border-gray-500 focus-within:border-green-500
         placeholder:font-bold  '
          id='task'
          type="text"
          list='taskSuggestions'
          placeholder='Dê um nome para o seu projeto'
          {...register('task')}
        />
        <datalist id='taskSuggestions'>
          <option value="projeto 1" />
        </datalist>
        <span className='text-lg text-gray-100'>Durante</span>
        <div className='flex items-center gap-2 text-gray-500 border-gray-500 font-bold border-b-2 focus-within:border-green-500'>
          <button className='hover:text-green-500'
            onClick={() => handleSetMinutes(5)}>
            <AiOutlinePlus />
          </button>
          <input className="bg-transparent w-8 px-1 outline-none"
            id='amountMinutes'
            type="number"
            value={countMinutes < 10 ? `0${countMinutes}` : countMinutes}
            {...register('amountMinutes', { valueAsNumber: true })}

          />
          <button className='hover:text-green-500'
            onClick={() => handleSetMinutes(-5)}>
            <AiOutlineMinus />
          </button>
        </div>
        <span className='text-lg font-bold text-gray-100'>minutos</span>
      </div>

      <div className=' flex items-center gap-4 '>
        <span className=' text-[80px]  bg-gray-700 flex items-center justify-center  font-bold font-mono text-gray-100 rounded-lg md:w-32 md:h-48 md:text-mega'>
          {minutes[0]}
        </span>
        <span className=' text-[80px] bg-gray-700 flex items-center justify-center  font-bold font-mono text-gray-100 rounded-lg md:w-32 md:h-48 md:text-mega'>
        {minutes[1]}

        </span>
        <span className=' text-[80px] flex items-center justify-center  font-bold font-mono text-green-800 rounded-lg md:w-32 md:h-48 md:text-mega '>
          :
        </span>
        <span className=' text-[80px] bg-gray-700 flex items-center justify-center  font-bold font-mono text-gray-100 rounded-lg md:w-32 md:h-48 md:text-mega'>
        {seconds[1]}

        </span>
        <span className=' text-[80px] bg-gray-700 flex items-center justify-center  font-bold font-mono text-gray-100 rounded-lg md:w-32 md:h-48 md:text-mega'>
        {seconds[1]}

        </span>

      </div>
      <Button disabled={!task} type='submit'
      //onClick={handleSubmit(handleSubmitForm)}
      />
    </form>
  )
}
