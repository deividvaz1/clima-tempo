import React from 'react'
import { BsSunrise, BsSunset } from 'react-icons/bs'
import { GiWindSlap, GiCompass } from 'react-icons/gi'
import { WiHumidity } from 'react-icons/wi'
import { MdAir } from 'react-icons/md'
import { CiTempHigh } from 'react-icons/ci'
import { FaEye } from 'react-icons/fa'

export function WeatherDetail({ data }) {
  return (
    <>
      <div className="p-12">
        <h1 className="mb-4 text-2xl text-white">Mais detalhes</h1>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <div className="flex items-center justify-between gap-6 rounded-xl bg-white/50 p-4">
            <div className="text-2xl">
              <h3>Vel. do Vento</h3>
              <h3>{data.current.wind_kph} km/h</h3>
            </div>
            <div className="">
              <GiWindSlap fontSize={40} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
