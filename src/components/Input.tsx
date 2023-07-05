'use client'
import { BiSearchAlt } from 'react-icons/bi'

interface InputProps {
  handleSearch: (event: React.KeyboardEvent<HTMLInputElement>) => void
  setLocation: React.Dispatch<React.SetStateAction<String>>
}

export function Input({ handleSearch, setLocation }: InputProps) {
  return (
    <form className="order-2 flex w-full items-center md:order-1 md:w-2/4">
      <input
        type="text"
        placeholder="Encontre sua Cidade"
        className="w-full border-b-2 bg-transparent text-white placeholder-white outline-none"
        onKeyDown={handleSearch}
        onChange={(e) => setLocation(e.target.value)}
      />
      <div className="ml-[-25px] cursor-pointer text-white">
        <BiSearchAlt />
      </div>
    </form>
  )
}
