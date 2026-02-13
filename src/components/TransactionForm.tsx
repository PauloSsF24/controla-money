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
      className="bg-white p-8 rounded-2xl shadow-sm border border-zinc-100 space-y-4">
      <input
        type="text"
        placeholder="Título"
        value={title}
        onChange={e => setTitle(e.target.value)}
        className="w-full border border-zinc-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#7F3DFF] text-black"

      />

      <input
        type="number"
        placeholder="Valor"
        value={amount}
        onChange={e => setAmount(e.target.value)}
        className="w-full border border-zinc-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#7F3DFF] text-black"
      />

      <select
        value={type}
        onChange={e => setType(e.target.value as TransactionType)}
        className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:ring-2 focus:ring-[#7F3DFF] outline-none transition text-black"
      >
        <option value="income">Receita</option>
        <option value="expense">Despesa</option>
      </select>

      <input
        type="text"
        placeholder="Categoria"
        value={category}
        onChange={e => setCategory(e.target.value)}
        className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:ring-2 focus:ring-[#7F3DFF] outline-none transition text-black"
      />

      <input
        type="text"
        placeholder="Descrição"
        value={description}
        onChange={e => setDescription(e.target.value)}
        className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:ring-2 focus:ring-[#7F3DFF] outline-none transition text-black"
      />

      <button
        type="submit"
        className="w-full bg-[#7F3DFF] hover:bg-[#5B21B6] text-white py-3 rounded-xl font-semibold transition"
      >
        Salvar
      </button>
    </form>
  )
}
