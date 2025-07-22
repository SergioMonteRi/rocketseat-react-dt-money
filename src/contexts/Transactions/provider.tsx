import { useEffect, useState } from 'react'

import type { Transaction } from './types'

import { TransactionContext } from './contex'

export function TransactionsProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  async function fetchTransactions(query?: string) {
    const url = new URL('http://localhost:3333/transactions')

    if (query) {
      url.searchParams.set('q', query)
    }

    const response = await fetch(url)
    const data = await response.json()

    setTransactions(data)
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
