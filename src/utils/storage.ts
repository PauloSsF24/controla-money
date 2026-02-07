import { Transaction } from '@/types/Transaction'

const STORAGE_KEY = '@finance-control:transactions'

export function loadTransactions(): Transaction[] {
  if (typeof window === 'undefined') return []

  const stored = localStorage.getItem(STORAGE_KEY)
  return stored ? JSON.parse(stored) : []
}

export function saveTransactions(transactions: Transaction[]) {
  if (typeof window === 'undefined') return

  localStorage.setItem(STORAGE_KEY, JSON.stringify(transactions))
}
