'use client'
import React, { useState } from 'react'

import { Input } from '@/components/Input'
import { Current } from '@/components/Current'
import { Weeks } from '@/components/Weeks'
import { WeatherDetail } from '@/components/WeatherDetail'

export default function Home() {
  const [data, setData] = useState({})

  const [location, setLocation] = useState('')
  const [error, setError] = useState('')

  const url = `http://api.weatherapi.com/v1/forecast.json?key=ecda7d339f47411c859194515230507&q=${location}&days=7&aqi=yes&alerts=yes`

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

  let content
  if (Object.keys(data).length === 0 && error === '') {
    content = (
      <div>
        <h2>Bem-Vindo, confira como está o clima hoje!</h2>
      </div>
    )
  } else if (error !== '') {
    content = (
      <div>
        <p>Cidade não encontrada</p>
        <p>Digite uma cidade válida</p>
      </div>
    )
  } else {
    content = (
      <>
        <div>
          <Current data={data} />
          <Weeks data={data} />
        </div>
        <div>
          <WeatherDetail />
        </div>
      </>
    )
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
        {content}
      </div>
    </div>
  )
}
