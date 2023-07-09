import React from 'react'
import { Link } from 'react-router-dom'

export const CatPro = ({ item }) => {
    return (
        <Link to={`/products/${item.name}`} className='w-full text-gray-600 overflow-hidden hover:border-2 sm:w-[20%] card m-[2%] sm:m-0 sm:flex-col hover:bg-gray-200 rounded-xl transition-all ease-in-out delay-100 h-[200px] sm:h-[300px] relative flex items-center justify-center '>
            <img src={item.img} className='z-[2] h-3/4 hover:scale-105 rounded-full sm:w-full image w-1/2' alt="" />
            <div className='text-center text-[100%] sm:my-[4%] bg-white p-[2%] sm:w-full sm:text-2xl w-1/2 mb-[1%]'>
                {item.name}
            </div>

        </Link>
    )
}
