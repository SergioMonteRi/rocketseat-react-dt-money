export interface Transaction {
  id: number
  description: string
  type: 'income' | 'outcome'
  price: number
  category: string
  createdAt: string
}

export interface CreateTransactionPayload {
  description: string
  price: number
  category: string
  type: 'income' | 'outcome'
}

export interface TransactionContextType {
  transactions: Transaction[]
  fetchTransactions: (query?: string) => Promise<void>
  createTransaction: (payload: CreateTransactionPayload) => Promise<void>
}
