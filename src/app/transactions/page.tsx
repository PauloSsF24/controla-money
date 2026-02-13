'use client'

import { TransactionList } from '@/components/TransactionList'
import { useTransactions } from '@/context/TransactionsContext'
import { useState } from 'react'

export default function TransactionsPage() {
  const { transactions } = useTransactions()
  
    const currentMonth = new Date().toISOString().slice(0, 7)
    const [selectedMonth, setSelectedMonth] = useState(currentMonth)
  
    const filteredTransactions = transactions.filter(transaction =>
      transaction.date.slice(0, 7) === selectedMonth
    )

  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold text-[#7F3DFF]">
        Todas as Transações
      </h1>
      <div>
          <input
            type="month"
            value={selectedMonth}
            onChange={e => setSelectedMonth(e.target.value)}
            className="bg-white px-4 py-2 rounded-xl shadow-sm"
          />
      </div>
      <TransactionList transactions={transactions} />
    </div>
  )
}
