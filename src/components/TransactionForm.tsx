'use client'

import { useState } from 'react'
import { useTransactions } from '@/context/TransactionsContext'
import { TransactionType } from '@/types/Transaction'

export function TransactionForm() {
  const { addTransaction } = useTransactions()

  const [title, setTitle] = useState('')
  const [amount, setAmount] = useState('')
  const [type, setType] = useState<TransactionType>('income')
  const [category, setCategory] = useState('')
  const [description, setDescription] = useState('')

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault()

    if (!title || !amount || !category) {
      alert('Preencha todos os campos')
      return
    }

    addTransaction({
      id: crypto.randomUUID(),
      title,
      description,
      amount: Number(amount),
      type,
      category,
      date: new Date().toISOString(),
    })

    // Limpa o formulário
    setTitle('')
    setAmount('')
    setCategory('')
    setDescription('')
    setType('income')
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-zinc-800 p-6 rounded-xl mt-8 space-y-4"
    >
      <input
        type="text"
        placeholder="Título"
        value={title}
        onChange={e => setTitle(e.target.value)}
        className="w-full p-3 rounded bg-zinc-900 text-zinc-100 outline-none"
      />

      <input
        type="number"
        placeholder="Valor"
        value={amount}
        onChange={e => setAmount(e.target.value)}
        className="w-full p-3 rounded bg-zinc-900 text-zinc-100 outline-none"
      />

      <select
        value={type}
        onChange={e => setType(e.target.value as TransactionType)}
        className="w-full p-3 rounded bg-zinc-900 text-zinc-100 outline-none"
      >
        <option value="income">Receita</option>
        <option value="expense">Despesa</option>
      </select>

      <input
        type="text"
        placeholder="Categoria"
        value={category}
        onChange={e => setCategory(e.target.value)}
        className="w-full p-3 rounded bg-zinc-900 text-zinc-100 outline-none"
      />

      <input
        type="text"
        placeholder="Descrição"
        value={description}
        onChange={e => setDescription(e.target.value)}
        className="w-full p-3 rounded bg-zinc-900 text-zinc-100 outline-none"
      />

      <button
        type="submit"
        className="w-full bg-indigo-600 hover:bg-indigo-700 transition p-3 rounded font-semibold"
      >
        Salvar
      </button>
    </form>
  )
}
