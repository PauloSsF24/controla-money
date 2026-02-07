'use client'

import { useTransactions } from '@/context/TransactionsContext'
import { format } from 'date-fns'
import { Trash2 } from 'lucide-react'

export function TransactionList() {
  const { transactions, removeTransaction } = useTransactions()

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
          {/* Informações principais */}
          <div>
            <strong className="block text-zinc-100">
              {transaction.title}
            </strong>

            <span className="text-sm text-zinc-400">
              {transaction.category} •{' '}
              {format(new Date(transaction.date), 'dd/MM/yyyy')}
            </span>
          </div>

          {/* Valor + ação */}
          <div className="flex items-center gap-4">
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

            <button
              onClick={() => removeTransaction(transaction.id)}
              className="text-zinc-400 hover:text-red-400 transition"
              title="Excluir transação"
            >
              <Trash2 size={20} />
            </button>
          </div>
        </div>
      ))}
    </section>
  )
}
