import { Summary } from '@/components/Summary'
import { TransactionForm } from '@/components/TransactionForm'
import { TransactionList } from '@/components/TransactionList'

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-900 text-zinc-100 px-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold pt-8">
        Controle Financeiro 💰
      </h1>

      <Summary />
      <TransactionForm />
      <TransactionList />
    </main>
  )
}
