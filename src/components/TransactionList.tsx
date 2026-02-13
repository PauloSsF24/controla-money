'use client'

import { Transaction } from '@/types/Transaction'
import { format } from 'date-fns'
import { useTransactions } from '@/context/TransactionsContext'

interface TransactionListProps {
  transactions: Transaction[]
}

export function TransactionList({ transactions }: TransactionListProps) {
  const { removeTransaction } = useTransactions()

  return (
    <section className="mt-8 space-y-4">
      {transactions.length === 0 && (
        <p className="text-zinc-400 text-center">
          Nenhuma transação neste mês
        </p>
      )}

      {transactions.map(transaction => (
        <div
          key={transaction.id}
          className="bg-violet-400 p-4 rounded-xl flex justify-between items-center"
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

          <div className="flex items-center gap-4">
            <span
              className={`font-semibold ${
                transaction.type === 'income'
                  ? 'text-green-600'
                  : 'text-red-500'
              }`}
            >
              {transaction.type === 'expense' && '- '}
              R$ {transaction.amount.toFixed(2)}
            </span>

            <button
              onClick={() => removeTransaction(transaction.id)}
              className="text-zinc-400 hover:text-red-500 transition"
            >
              🗑️
            </button>
          </div>
        </div>
      ))}
    </section>
  )
}
