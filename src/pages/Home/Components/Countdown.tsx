import {  useEffect } from "react"
import { differenceInSeconds } from 'date-fns'
import { useCycles } from "../../../hooks/useCycles"


export function Countdown() {
  const { activeCycle, activeCycleId,amountSecondsPassed, setAmountSecondsPassed, setCycles } = useCycles()

  const totalSeconds = activeCycle ? activeCycle.amountMinutes * 60 : 0
  const currentSeconds = activeCycle ? totalSeconds - amountSecondsPassed : 0
  const minutesAmount = Math.floor(currentSeconds / 60)
  const secondsAmount = currentSeconds % 60
  const minutes = String(minutesAmount).padStart(2, '0')
  const seconds = String(secondsAmount).padStart(2, '0')

  useEffect(() => {
    let interval: number
    if (activeCycle) {
      interval = setInterval(() => {
        const secondsDiference = differenceInSeconds(new Date(), activeCycle.startDate)

        if (secondsDiference >= totalSeconds) {
          setCycles(prevState => prevState.map((cycle) => {
            if (cycle.id === activeCycleId) {
              return { ...cycle, finishedDate: new Date() }
            } else {
              return cycle
            }
          }))
          setAmountSecondsPassed(totalSeconds)
          clearInterval(interval)
        } else {
          setAmountSecondsPassed(secondsDiference)
        }
      }, 1000)
    }
    return () => {
      clearInterval(interval)
    }
  }, [activeCycle, totalSeconds, activeCycleId])

  useEffect(() => {
    if (activeCycle) {
      document.title = `${minutes}: ${seconds}`
    }else{
      document.title = `Ignite Timer`

    }
  }, [minutes, seconds, activeCycle])

  return (
    <div>

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
          {seconds[0]}

        </span>
        <span className=' text-[80px] bg-gray-700 flex items-center justify-center  font-bold font-mono text-gray-100 rounded-lg md:w-32 md:h-48 md:text-mega'>
          {seconds[1]}

        </span>

      </div>
    </div>
  )
}