import { getCurrentDate } from '@/utils/currentDate'
import { BiCurrentLocation } from 'react-icons/bi'
export function Current({ data }) {
  const currentDate = getCurrentDate()
  const weatherIcon = data?.current?.condition?.icon

  if (!weatherIcon) {
    return null // Renderiza nada se o weatherIcon não estiver disponível
  }

  return (
    <div className="mb-8 flex w-1/2 flex-col items-start gap-2 md:mb-0">
      <div className="flex items-center">
        <div>
          <h1 className="text-3xl text-white">Hoje</h1>
          <p className="text-white">{currentDate}</p>
        </div>
        <div>
          <img
            className="w-[50px] object-cover"
            src={weatherIcon}
            alt={data?.current?.condition?.text}
          />
        </div>
      </div>
      <div>
        <p className="text-5xl text-white">
          {data.current.temp_c.toFixed()}
          <span>°</span>
        </p>
        <span className="text-white">{data.current.condition.text}</span>
      </div>
      <div>
        <div className="flex items-center rounded-xl bg-white/90 px-2 py-2 text-black">
          <BiCurrentLocation />
          <span>
            {data.location.name}, {data.location.region}
          </span>
        </div>
      </div>
    </div>
  )
}
