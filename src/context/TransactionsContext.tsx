'use client'

import { createContext, useContext, useState } from 'react'
import { Transaction } from '@/types/Transaction'

interface TransactionsContextData {
  transactions: Transaction[]
  addTransaction: (transaction: Transaction) => void
}

const TransactionsContext = createContext<TransactionsContextData>(
  {} as TransactionsContextData
)

export function TransactionsProvider({ children }: { children: React.ReactNode }) {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  function addTransaction(transaction: Transaction) {
    setTransactions(prev => [...prev, transaction])
  }

  return (
    <TransactionsContext.Provider value={{ transactions, addTransaction }}>
      {children}
    </TransactionsContext.Provider>
  )
}

export function useTransactions() {
  return useContext(TransactionsContext)
}
