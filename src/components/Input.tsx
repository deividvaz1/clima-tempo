'use client'
import { BiSearchAlt } from 'react-icons/bi'

export function Input() {
  return (
    <form className="order-2 flex w-full items-center md:order-1 md:w-2/4">
      <input
        type="text"
        placeholder="Encontre sua Cidade"
        className="w-full border-b-2 bg-transparent text-white placeholder-white outline-none"
      />
      <div className="ml-[-25px] cursor-pointer text-white">
        <BiSearchAlt />
      </div>
    </form>
  )
}
