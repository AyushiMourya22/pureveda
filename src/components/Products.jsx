import React from 'react'
import {data} from "../data/LatestProduct"
import { Product } from './Product'
import { Button } from './Button'

export const Products = () => {
  return (
    <div className='px-[4%] py-[2%] font-[Monteserrat]'>
        <div className='  text-center border-b-2 sm:text-[200%]  py-[1%] font-[Monteserrat] mx-[15%] border-black  sm:text-5xl'>LATEST PRODUCTS</div>
        <div className="flex flex-wrap justify-between my-[2%] ">
            {data.map(item=>{
                return(<Product item={item} key={item.id}/>)
            })}
        </div>
        <Button/>
    </div>
  )
}
