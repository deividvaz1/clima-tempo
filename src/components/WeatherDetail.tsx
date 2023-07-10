import React from 'react'
import { BsSunrise, BsSunset } from 'react-icons/bs'
import { GiWindSlap, GiCompass } from 'react-icons/gi'
import { WiHumidity } from 'react-icons/wi'
import { MdAir } from 'react-icons/md'
import { CiTempHigh } from 'react-icons/ci'
import { FaEye } from 'react-icons/fa'

interface WeatherDetailsProps {
  data: {
    current?: {
      wind_kph: number
      humidity: number
      wind_dir: string
      pressure_in: number
      feelslike_c: number
      vis_km: number
    }
    forecast?: {
      forecastday: {
        astro: {
          sunrise: string
          sunset: string
        }
      }[]
    }
  }
}

export function WeatherDetail({ data }: WeatherDetailsProps) {
  return (
    <>
      <div className="p-12">
        <h1 className="mb-4 text-2xl text-white">Mais detalhes</h1>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {/* Vel. AR */}
          <div className="flex items-center justify-between gap-6 rounded-xl bg-white/50 p-4">
            <div className="text-2xl">
              <h3>Vel. do Ar</h3>
              <h3>{data?.current?.wind_kph} km/h</h3>
            </div>
            <div>
              <GiWindSlap fontSize={40} />
            </div>
          </div>

          {/* Umidade do Ar */}
          <div className="flex items-center justify-between gap-6 rounded-xl bg-white/50 p-4">
            <div className="text-2xl">
              <h3>Umidade do Ar</h3>
              <h3>{data?.current?.humidity} %</h3>
            </div>
            <div>
              <WiHumidity fontSize={40} />
            </div>
          </div>

          {/* Direção do Ar */}
          <div className="flex items-center justify-between gap-6 rounded-xl bg-white/50 p-4">
            <div className="text-2xl">
              <h3>Direção do Vento</h3>
              <h3>{data?.current?.wind_dir}</h3>
            </div>
            <div>
              <GiCompass fontSize={40} />
            </div>
          </div>

          {/* Nascer do sol */}
          <div className="flex items-center justify-between gap-6 rounded-xl bg-white/50 p-4">
            <div className="text-2xl">
              <h3>Nascer do Sol</h3>
              <h3>{data?.forecast?.forecastday[0].astro.sunrise}</h3>
            </div>
            <div>
              <BsSunrise fontSize={40} />
            </div>
          </div>
          {/* Por do sol */}
          <div className="flex items-center justify-between gap-6 rounded-xl bg-white/50 p-4">
            <div className="text-2xl">
              <h3>Por do Sol</h3>
              <h3>{data?.forecast?.forecastday[0].astro.sunset}</h3>
            </div>
            <div>
              <BsSunset fontSize={40} />
            </div>
          </div>

          {/* Pressão do ar */}
          <div className="flex items-center justify-between gap-6 rounded-xl bg-white/50 p-4">
            <div className="text-2xl">
              <h3>Pressão do ar</h3>
              <h3>{data?.current?.pressure_in}</h3>
            </div>
            <div>
              <MdAir fontSize={40} />
            </div>
          </div>
          <div className="flex items-center justify-between gap-6 rounded-xl bg-white/50 p-4">
            <div className="text-2xl">
              <h3>Sensação térmica</h3>
              <h3>{data?.current?.feelslike_c}°</h3>
            </div>
            <div>
              <CiTempHigh fontSize={40} />
            </div>
          </div>
          <div className="flex items-center justify-between gap-6 rounded-xl bg-white/50 p-4">
            <div className="text-2xl">
              <h3>Visibilidade</h3>
              <h3>{data?.current?.vis_km} km</h3>
            </div>
            <div>
              <FaEye fontSize={40} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
