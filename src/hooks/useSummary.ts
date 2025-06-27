import { useMemo } from 'react'

import { useTransactionsContext } from '@/contexts'

export const useSummary = () => {
  const { transactions } = useTransactionsContext()

  const summary = useMemo(
    () =>
      transactions.reduce(
        (acc, transaction) => {
          if (transaction.type === 'income') {
            acc.totalIncome += transaction.price
          } else {
            acc.totalOutcome += transaction.price
          }

          acc.total = acc.totalIncome - acc.totalOutcome

          return acc
        },
        {
          totalIncome: 0,
          totalOutcome: 0,
          total: 0,
        },
      ),
    [transactions],
  )

  return summary
}
