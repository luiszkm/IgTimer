import { Button } from '../../components/Button'
import { NewCycleForm } from './Components/NewCycleFrom'
import { Countdown } from './Components/Countdown'
import { useCycles } from '../../hooks/useCycles';
import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod'
import zod from 'zod'

interface Cycle {
  id: string;
  task: string
  amountMinutes: number
  startDate: Date
  interruptedDate?: Date
  finishedDate?: Date
}

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, "Informe a tarefa"),
  amountMinutes: zod.number().min(5).max(60),
})

type newCycleFormData = zod.infer<typeof newCycleFormValidationSchema>

export function Home() {
  const { activeCycle, activeCycleId, setActiveCycleId, setCycles, setAmountSecondsPassed } = useCycles()

  const newCycleFrom = useForm<newCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: '',
      amountMinutes: 0,
    }
  })

  const { handleSubmit, watch, reset } = newCycleFrom

  const task = watch('task')

  function handleSubmitForm(data: newCycleFormData) {
    const id = String(new Date().getTime())
    const newCycle: Cycle = {
      id,
      task: data.task,
      amountMinutes: data.amountMinutes,
      startDate: new Date()
    }
    setCycles(prevStat => [...prevStat, newCycle])
    setActiveCycleId(id)
    setAmountSecondsPassed(0)
    reset();
  }


  function handleInterruptCycle() {
    setCycles(prevState =>
      prevState.map((cycle) => {
        if (cycle.id === activeCycleId) {
          return { ...cycle, interruptedDate: new Date() }
        } else {
          return cycle
        }
      }),
    )
    setActiveCycleId(null)
  }
  return (
    <form action=''
    onSubmit={handleSubmit(handleSubmitForm)}
      className='flex flex-col items-center gap-14'>
      <FormProvider {...newCycleFrom}>
        <NewCycleForm />
      </FormProvider>
      <Countdown />
      <Button disabled={!activeCycle && !task}
        type='submit' isStop={!!activeCycle}
        stopSystem={() => handleInterruptCycle()}
       // startSystem={handleSubmit(handleSubmitForm)}
      />
    </form>
  )
}
