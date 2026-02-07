'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import { Transaction } from '@/types/Transaction'
import { loadTransactions, saveTransactions } from '@/utils/storage'

interface TransactionsContextData {
  transactions: Transaction[]
  addTransaction: (transaction: Transaction) => void
  removeTransaction: (id: string) => void
}

const TransactionsContext = createContext<TransactionsContextData>(
  {} as TransactionsContextData
)

export function TransactionsProvider({ children }: { children: React.ReactNode }) {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  // 🔹 Carregar dados ao iniciar
  useEffect(() => {
    const storedTransactions = loadTransactions()
    setTransactions(storedTransactions)
  }, [])

  // 🔹 Salvar sempre que mudar
  useEffect(() => {
    saveTransactions(transactions)
  }, [transactions])

  function addTransaction(transaction: Transaction) {
    setTransactions(prev => [...prev, transaction])
  }

  function removeTransaction(id: string) {
  setTransactions(prev =>
    prev.filter(transaction => transaction.id !== id)
  )
}


  return (
    <TransactionsContext.Provider value={{ transactions, addTransaction, removeTransaction }}>
      {children}
    </TransactionsContext.Provider>
  )
}

export function useTransactions() {
  return useContext(TransactionsContext)
}
