import React from 'react'

export function WeatherDetail({ data }) {
  return (
    <>
      <div className="p-12">
        <h1 className="mb-4 text-2xl text-white">Mais detalhes</h1>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <div className="flexp-4 items-center justify-between gap-6 rounded-xl bg-white/50">
            <div className="text-2xl"></div>
          </div>
        </div>
      </div>
    </>
  )
}
