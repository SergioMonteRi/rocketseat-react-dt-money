import { useContext } from 'react'

import { TransactionContext } from './contex'

export const useTransactionsContext = () => {
  const context = useContext(TransactionContext)

  return context
}
