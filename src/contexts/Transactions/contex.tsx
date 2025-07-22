import { createContext } from 'use-context-selector'

import type { TransactionContextType } from './types'

export const TransactionContext = createContext({} as TransactionContextType)
