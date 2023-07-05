'use client'

import { Input } from '@/components/Input'

export default function Home() {
  return (
    <div className="h-screen bg-gradient-to-r from-blue-500 to-blue-300 bg-cover">
      <div className="flex h-fit w-full flex-col bg-white/25">
        {/* LOGO */}
        <div className="flex flex-col  items-center justify-between p-12 md:flex-row">
          <Input />
          <h1 className="order-1 mb-8 rounded-xl px-4 py-2 font-bold italic text-white md:mb-0">
            Clima do Tempo.
          </h1>
        </div>
      </div>
    </div>
  )
}
