import React from 'react'
import { Link } from 'react-router-dom'

export const Button = () => {
  return (
    <div className='flex justify-center items-center'>
        <Link to="/products" className='px-[6%] sm:text-lg lg:text-3xl font-[Monteserrat] font-bold text-[#686D61] hover:bg-[#686D61] transition-all ease-in delay-100 hover:text-white border-2 border-[#686D61] py-[1%]'>Explore All</Link>

    </div>
  )
}
