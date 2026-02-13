'use client'

import { Transaction } from '@/types/Transaction'

interface SummaryProps {
  transactions: Transaction[]
}

export function Summary({ transactions }: SummaryProps) {
  const summary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === 'income') {
        acc.income += transaction.amount
        acc.total += transaction.amount
      } else {
        acc.expense += transaction.amount
        acc.total -= transaction.amount
      }
      return acc
    },
    { income: 0, expense: 0, total: 0 }
  )

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
      
      <div className="bg-[#7F3DFF] text-white p-6 rounded-2xl shadow-lg">
        <p className="text-[#ffffff] font-bold">Receitas</p>
        <strong className="text-2xl text-green-500">
          R$ {summary.income.toFixed(2)}
        </strong>
      </div>

      <div className="bg-[#7F3DFF] p-6 rounded-2xl shadow-md">
        <p className="text-[#ffffff] font-bold">Despesas</p>
        <strong className="text-2xl text-red-500">
          R$ {summary.expense.toFixed(2)}
        </strong>
      </div>

      <div className="bg-[#7F3DFF] p-6 rounded-2xl shadow-md">
        <p className="text-[#ffffff] font-bold">Saldo</p>
        <strong className="text-2xl text-[#ffffff]">
          R$ {summary.total.toFixed(2)}
        </strong>
      </div>

    </section>
  )
}
