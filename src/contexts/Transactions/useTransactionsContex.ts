import { useContextSelector } from 'use-context-selector'

import { TransactionContext } from './contex'

export const useTransactionsContext = () => {
  const createTransaction = useContextSelector(
    TransactionContext,
    (context) => {
      return context.createTransaction
    },
  )

  const transactions = useContextSelector(TransactionContext, (context) => {
    return context.transactions
  })

  const fetchTransactions = useContextSelector(
    TransactionContext,
    (context) => {
      return context.fetchTransactions
    },
  )

  return { transactions, createTransaction, fetchTransactions }
}
