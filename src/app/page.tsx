'use client'
import React, { useState } from 'react'

import { Input } from '@/components/Input'

export default function Home() {
  const [data, setData] = useState({})
  const [location, setLocation] = useState('')
  const [error, setError] = useState('')

  const url = `http://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_API_KEY}&q=${location}&days=7&aqi=yes&alerts=yes`

  const handleSearch = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      try {
        const response = await fetch(url)
        if (!response.ok) {
          throw new Error()
        }
        const data = await response.json()
        setData(data)
        setLocation('')
        setError('')
      } catch (error) {
        setError('Cidade não encontrada ou não existe')
        setData({})
      }
    }
  }
  return (
    <div className="h-screen bg-gradient-to-r from-blue-500 to-blue-300 bg-cover">
      <div className="flex h-fit w-full flex-col bg-white/25">
        {/* LOGO */}
        <div className="flex flex-col  items-center justify-between p-12 md:flex-row">
          <Input handleSearch={handleSearch} setLocation={setLocation} />
          <h1 className="order-1 mb-8 rounded-xl px-4 py-2 font-bold italic text-white md:mb-0">
            Clima do Tempo.
          </h1>
        </div>
        {data.current ? <div>{data.current.temp_c}</div> : null}
      </div>
    </div>
  )
}
