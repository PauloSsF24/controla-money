'use client'

import { useTransactions } from '@/context/TransactionsContext'
import { format } from 'date-fns'

export function TransactionList() {
  const { transactions } = useTransactions()

  return (
    <section className="mt-8 space-y-4">
      {transactions.length === 0 && (
        <p className="text-zinc-400 text-center">
          Nenhuma transação cadastrada
        </p>
      )}

      {transactions.map(transaction => (
        <div
          key={transaction.id}
          className="bg-zinc-800 p-4 rounded-xl flex justify-between items-center"
        >
          <div>
            <strong className="block">
              {transaction.title}
            </strong>
            <span className="text-sm text-zinc-400">
              {transaction.category} •{' '}
              {format(new Date(transaction.date), 'dd/MM/yyyy')}
            </span>
          </div>

          <span
            className={`font-semibold ${
              transaction.type === 'income'
                ? 'text-green-400'
                : 'text-red-400'
            }`}
          >
            {transaction.type === 'expense' && '- '}
            R$ {transaction.amount.toFixed(2)}
          </span>
        </div>
      ))}
    </section>
  )
}
