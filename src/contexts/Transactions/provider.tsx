import { useEffect, useState } from 'react'

import { api } from '@/api'

import type { Transaction } from './types'

import { TransactionContext } from './contex'

export function TransactionsProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  async function fetchTransactions(query?: string) {
    const response = await api.get('/transactions', {
      params: {
        q: query,
      },
    })

    setTransactions(response.data)
  }

  useEffect(() => {
    fetchTransactions()
  }, [])

  return (
    <TransactionContext.Provider value={{ transactions, fetchTransactions }}>
      {children}
    </TransactionContext.Provider>
  )
}
