export function Weeks({ data }) {
  if (!data || !data.forecast || !data.forecast.forecastday) {
    return null // ou exiba uma mensagem de erro adequada
  }

  return (
    <div className="grid w-full grid-cols-2 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7 ">
      {data.forecast.forecastday.map((day, index) => (
        <div
          key={index}
          className="flex flex-col items-center rounded-lg bg-white/40 p-2 text-center"
        >
          <p>
            {new Date(day.date).toLocaleString('pt-BR', { weekday: 'short' })}
          </p>
        </div>
      ))}
    </div>
  )
}
