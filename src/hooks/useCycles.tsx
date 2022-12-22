import {useContext} from 'react'

import { CycleContext,CycleContextDataProps  } from '../context/CycleContext'

export function useCycles (): CycleContextDataProps {
  const context = useContext(CycleContext)

  return context
}