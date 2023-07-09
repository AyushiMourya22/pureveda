import React, { useEffect, useState } from 'react'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import { Link, NavLink, useParams } from 'react-router-dom'
import {data} from "../data/AllProducts"
import { AllProduct } from '../components/Allproduct'

export const Products = () => {
    const {categoryid}=useParams()
    const [filterData,setfilterdata]=useState(data)
    // console.log(categoryid)
    const handleFilter = (c) => {
        const updatedData = data.filter(x => x.category === c)
        setfilterdata(updatedData)
      }
      useEffect(()=>{
        if(categoryid!==undefined){
            handleFilter(categoryid)
        }else{setfilterdata(data)}
      },[categoryid])
    
  return (
    <div>
        <Navbar/>
        <div className='mx-[5%] my-[3%] relative'>
            <Link to="/products" className='text-[120%]  sticky top-0 left-0 right-0  sm:text-2xl text-gray-600  font-bold font-serif lg:text-4xl'>All Products</Link>
            <div className='flex my-[3%]'>
                <div className='left w-1/2 sm:w-1/4'>
                    <div className='text-[80%] '>
                        <div className='font-serif sm:text-lg lg:text-xl'>CATEGORY</div>
                        <div className='ml-[4%] flex flex-col'>
                            <NavLink onClick={()=>handleFilter("General Wellness")} className= 'hover:border-x-2 border-gray-800 text-left ml-[2%] sm:text-[100%] lg:text-lg sm:p-[2%] font-serif rounded-xl hover:bg-gray-100 my-[1%] text-[70%]'>General Wellness </NavLink>
                            <NavLink onClick={()=>handleFilter("Pain Reliever")} className= 'hover:border-x-2 border-gray-800 text-left ml-[2%] sm:text-[100%] lg:text-lg sm:p-[2%] font-serif rounded-xl hover:bg-gray-100 my-[1%] text-[70%]'>Pain Reliever </NavLink>
                            <NavLink onClick={()=>handleFilter("Immunity Wellness")} className= 'hover:border-x-2 border-gray-800 text-left ml-[2%] sm:text-[100%] lg:text-lg sm:p-[2%] font-serif rounded-xl hover:bg-gray-100 my-[1%] text-[70%]'>Immunity Wellness </NavLink>
                            <NavLink onClick={()=>handleFilter("Skin Wellness")} className= 'hover:border-x-2 border-gray-800 text-left ml-[2%] sm:text-[100%] lg:text-lg sm:p-[2%] font-serif rounded-xl hover:bg-gray-100 my-[1%] text-[70%]'>Skin Wellness </NavLink>
                            <NavLink onClick={()=>setfilterdata(data)} className= 'hover:border-x-2 border-gray-800 text-left ml-[2%] sm:text-[100%] lg:text-lg sm:p-[2%] font-serif rounded-xl hover:bg-gray-100 my-[1%] text-[70%]'>All </NavLink>
                        </div>
                    </div>
                </div>
                <div className='flex flex-wrap w-full'>
                    {filterData.map(item=>{
                        return(<AllProduct item={item}/>)
                    })}
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}
