import './globals.css'
import { TransactionsProvider } from '@/context/TransactionsContext'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>
        <TransactionsProvider>
          {children}
        </TransactionsProvider>
      </body>
    </html>
  )
}
