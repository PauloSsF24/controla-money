'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, LayoutDashboard, Wallet, Settings } from 'lucide-react'
import Image from "next/image"

export function Sidebar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const linkStyle = (path: string) =>
    pathname === path
      ? 'bg-[#F4F0FF] text-[#7F3DFF]'
      : 'text-zinc-600 hover:bg-zinc-100'

  return (
    <>
      {/* Mobile Header */}
      <div className="md:hidden flex items-center justify-between p-4 bg-white border-b border-zinc-200">
        <h2 className="text-lg font-bold text-[#7F3DFF]">PenguinMoney</h2>
        <button onClick={() => setIsOpen(true)}>
          <Menu size={24} />
        </button>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed md:static
          top-0 left-0
          min-h-screen md:min-h-screen
          w-64
          bg-white border-r border-zinc-200
          p-6
          flex flex-col justify-between
          z-50
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
          md:translate-x-0
          shadow-xl md:shadow-none
        `}
      >

        <div>
          {/* Close button mobile */}
          <div className="flex justify-between items-center mb-10 md:hidden">
            <h2 className="text-xl font-bold text-[#7F3DFF]">
              FinDash
            </h2>
            <button onClick={() => setIsOpen(false)}>
              <X size={24} />
            </button>
          </div>

          {/* Desktop logo */}
          <div className="hidden md:block mb-12">
            <h2 className="text-2xl font-bold text-[#7F3DFF]">
              Pengin
            </h2>
            <p className="text-sm text-zinc-400">
              Money
            </p>
          </div>

          {/* Navigation */}
          <nav className="space-y-2">
            <Link
              href="/"
              className={`flex items-center gap-3 p-3 rounded-xl transition ${linkStyle('/')}`}
            >
              <LayoutDashboard size={18} />
              Dashboard
            </Link>

            <Link
              href="/transactions"
              className={`flex items-center gap-3 p-3 rounded-xl transition ${linkStyle('/transactions')}`}
            >
              <Wallet size={18} />
              Transações
            </Link>

            <Link
              href="/settings"
              className={`flex items-center gap-3 p-3 rounded-xl transition ${linkStyle('/settings')}`}
            >
              <Settings size={18} />
              Configurações
            </Link>
          </nav>
        </div>

        <div className="text-xs text-zinc-400">
          © 2026 FinDash
        </div>
      </aside>
    </>
  )
}
