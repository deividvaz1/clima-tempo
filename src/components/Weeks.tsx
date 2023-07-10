import React from 'react'

interface DiaForecast {
  date: string
  day: {
    condition: {
      icon: string
      text: string
    }
    maxtemp_c: number
    mintemp_c: number
  }
}

interface WeeksProps {
  data: {
    forecast?: {
      forecastday: DiaForecast[]
    }
  }
}

export function Weeks({ data }: WeeksProps) {
  if (!data?.forecast?.forecastday) {
    return null // ou exiba uma mensagem de erro adequada
  }

  return (
    <div className="-ml-4 grid w-full grid-cols-2 gap-8 sm:ml-7 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-7">
      {data.forecast.forecastday.map((day, index) => (
        <div
          key={index}
          className="flex flex-col items-center rounded-lg bg-white/40 p-2 text-center"
        >
          <p>
            {new Date(day.date).toLocaleString('pt-BR', { weekday: 'short' })}
          </p>
          <img src={day.day.condition.icon} alt={day.day.condition.text} />
          <div>
            <p>Máx {day.day.maxtemp_c.toFixed()}°</p>
            <p className="text-black/50">Min {day.day.mintemp_c.toFixed()}°</p>
          </div>
        </div>
      ))}
    </div>
  )
}
