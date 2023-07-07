'use client'
import React, { useState, useEffect } from 'react'

import { Input } from '@/components/Input'
import { Current } from '@/components/Current'
import { Weeks } from '@/components/Weeks'
import { WeatherDetail } from '@/components/WeatherDetail'
import { BsFillCloudMoonFill, BsFillCloudSunFill } from 'react-icons/bs'
import { FaCloudSun } from 'react-icons/fa'

export default function Home() {
  const [greeting, setGreeting] = useState('')
  const [data, setData] = useState({})
  const [location, setLocation] = useState('')
  const [error, setError] = useState('')

  useEffect(() => {
    const updateGreeting = () => {
      const currentHour = new Date().getHours()
      let greetingText = ''

      if (currentHour >= 5 && currentHour < 12) {
        greetingText = 'Bom dia'
      } else if (currentHour >= 12 && currentHour < 18) {
        greetingText = 'Boa tarde'
      } else {
        greetingText = 'Boa noite'
      }

      setGreeting(greetingText)
    }

    // Atualiza o cumprimento inicial
    updateGreeting()

    // Configura um temporizador para atualizar o cumprimento a cada minuto
    const intervalId = setInterval(updateGreeting, 600)

    // Limpa o temporizador quando o componente é desmontado
    return () => clearInterval(intervalId)
  }, [])

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
      <div className=" -mt-10 flex h-screen items-center justify-center rounded-xl">
        <div className="flex justify-end">
          <div className="bg-cloud-1 animate-slideRight mr-auto mt-24 hidden h-64 w-64 bg-cover md:block"></div>
        </div>
        <div className="flex flex-col items-center text-center text-white">
          <h2 className="mb-4 text-3xl font-bold">
            Bem-vindo(a), confira como está o clima hoje!
          </h2>
          <p className="text-xl">
            Pesquise pelo local desejado através da barra de pesquisa.
          </p>
          <div className="bg-cloud mt-4 h-64 w-64 bg-cover"></div>
        </div>
        <div className="flex justify-end">
          <div className="bg-cloud-2 animate-slideLeft -mt-24 ml-auto hidden h-64 w-64 bg-cover md:block"></div>
        </div>
      </div>
    )
  } else if (error !== '') {
    content = (
      <div className="h-screen text-center text-white">
        <p className="mb-4 text-3xl font-bold">Cidade não encontrada</p>
        <p className="text-xl">Digite uma cidade válida</p>
      </div>
    )
  } else {
    content = (
      <>
        <div className="flex flex-col items-center justify-between p-12 md:flex-row">
          <Current data={data} />
          <Weeks data={data} />
        </div>
        <div>
          <WeatherDetail data={data} />
        </div>
      </>
    )
  }

  let icon
  const currentHour = new Date().getHours()
  if (currentHour >= 5 && currentHour < 12) {
    icon = <BsFillCloudSunFill fontSize={40} />
  } else if (currentHour >= 12 && currentHour < 18) {
    icon = <FaCloudSun fontSize={40} />
  } else {
    icon = <BsFillCloudMoonFill fontSize={40} />
  }

  return (
    <div className="h-fit bg-gradient-to-r from-blue-500 to-blue-300 bg-cover">
      <div className="flex h-fit w-full flex-col bg-white/25">
        {/* LOGO */}
        <div className="flex flex-col items-center justify-between p-12 md:flex-row">
          <Input handleSearch={handleSearch} setLocation={setLocation} />
          <div className="order-1 mb-8 rounded-xl bg-white px-4 py-2 text-center font-bold italic text-blue-300 md:mb-0">
            <h1> Clima do Tempo. </h1>
            <p>{greeting}</p>
            <div className="flex justify-center">{icon}</div>
          </div>
        </div>

        {content}
      </div>
    </div>
  )
}
