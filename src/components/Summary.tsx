'use client'

import { useTransactions } from '@/context/TransactionsContext'

export function Summary() {
  const { transactions } = useTransactions()

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
    {
      income: 0,
      expense: 0,
      total: 0,
    }
  )

  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
      {/* Receitas */}
      <div className="bg-zinc-800 p-6 rounded-xl">
        <p className="text-zinc-400">Receitas</p>
        <strong className="text-2xl text-green-400">
          R$ {summary.income.toFixed(2)}
        </strong>
      </div>

      {/* Despesas */}
      <div className="bg-zinc-800 p-6 rounded-xl">
        <p className="text-zinc-400">Despesas</p>
        <strong className="text-2xl text-red-400">
          R$ {summary.expense.toFixed(2)}
        </strong>
      </div>

      {/* Saldo */}
      <div className="bg-zinc-800 p-6 rounded-xl">
        <p className="text-zinc-400">Saldo</p>
        <strong className="text-2xl text-blue-400">
          R$ {summary.total.toFixed(2)}
        </strong>
      </div>
    </section>
  )
}
