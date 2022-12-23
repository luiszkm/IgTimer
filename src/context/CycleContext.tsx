import { Dispatch, ReactNode, SetStateAction, createContext, useState } from "react";

interface Cycle {
  id: string;
  task: string
  amountMinutes: number
  startDate: Date
  interruptedDate?: Date
  finishedDate?: Date
}

export interface CycleContextDataProps {
  activeCycle?: Cycle | undefined
  activeCycleId: string | null
  amountSecondsPassed: number
  cycles: Cycle[]
  setAmountSecondsPassed: Dispatch<SetStateAction<number>>
  setCycles: Dispatch<SetStateAction<Cycle[]>>
  setActiveCycleId: Dispatch<SetStateAction<string | null>>

}

interface CycleContextProps {
  children: ReactNode
}

export const CycleContext = createContext({

} as CycleContextDataProps)

export function CyclesContextProvider({ children }: CycleContextProps) {
  
  const [cycles, setCycles] = useState<Cycle[]>([])

  const [activeCycleId, setActiveCycleId] = useState<string | null>(null)
  
  const [amountSecondsPassed, setAmountSecondsPassed] = useState(0)

  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId)

  return (
    <CycleContext.Provider value={{
      activeCycleId,
      activeCycle,
      amountSecondsPassed,
      cycles,
      setAmountSecondsPassed,
      setCycles,
      setActiveCycleId,

    }}>
      {children}
    </CycleContext.Provider>
  )
}