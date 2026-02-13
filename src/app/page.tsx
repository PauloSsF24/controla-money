'use client'

import { useState } from 'react'
import { Summary } from '@/components/Summary'
import { TransactionForm } from '@/components/TransactionForm'
import { TransactionList } from '@/components/TransactionList'
import { useTransactions } from '@/context/TransactionsContext'

export default function Home() {
  const { transactions } = useTransactions()

  const currentMonth = new Date().toISOString().slice(0, 7)
  const [selectedMonth, setSelectedMonth] = useState(currentMonth)

  const filteredTransactions = transactions.filter(transaction =>
    transaction.date.slice(0, 7) === selectedMonth
  )

  return (
    <div className="flex bg-[#ffffff] min-h-screen">

      {/* Conteúdo */}
      <main className="flex-1 p-10 space-y-10">

        {/* Header */}
        <header className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-[#7F3DFF]">
            Dashboard
          </h1>
        </header>

        {/* Summary */}
        <Summary transactions={filteredTransactions} />

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-6">

          <div className="lg:col-span-1">
            <TransactionForm />
          </div>

        </div>

      </main>
    </div>
  )
}
