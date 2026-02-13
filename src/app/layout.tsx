import './globals.css'
import { Sidebar } from '@/components/Sidebar'
import { TransactionsProvider } from '@/context/TransactionsContext'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700']
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={`${poppins.className} bg-[#F8F9FB]`}>
        <TransactionsProvider>
          <div className="min-h-screen flex flex-col md:flex-row">
            <Sidebar />

            <div className="flex-1 flex flex-col">
              <main className="flex-1 p-4 md:p-8 lg:p-10 bg-[#F8F9FB]">
                {children}
              </main>
            </div>
          </div>
        </TransactionsProvider>
      </body>
    </html>
  )
}

