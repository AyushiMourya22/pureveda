import React, { useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { HiShoppingCart } from 'react-icons/hi'
import { GiHamburgerMenu, GiBowlSpiral } from 'react-icons/gi'
import { TbPlant2 } from 'react-icons/tb'
import { Link,  } from 'react-router-dom'


export const Navbar = () => {

  const [view, setView] = useState(false)
  return (

    <div className='w-full header bg-[#686D61] text-white sticky top-0 right-0 left-0 z-[9999] font-[Montserrat] '>
      <div className=' main-navbar  flex justify-between items-center  '>
        <div className=' ml-[1%] w-1/2  flex items-center space-x-3'>
          <Link to="/" className="mb-0 ">
          <TbPlant2 size={30} className='animate-bounce mb-0'/>
          </Link>
          <Link to="/" className='font-bold text-[150%] sm:text-[250%] font-mono'>PureVeda</Link>
        </div>
        <div className='right w-1/4 list flex justify-end text-[120%] space-x-3 tracking-wider'>
          <Link to="/" className="px-[0.75%] py-[1%] ml-[1%] text-right hover:font-bold transition ease-in-out hover:underline">
            REGISTER
          </Link>
          <Link to="/" className="px-[0.75%] py-[1%] ml-[1%] text-right hover:font-bold transition ease-in-out hover:underline">
            LOGIN
          </Link>
          <Link to="/cart" className="px-[0.75%] py-[1%] ml-[1%] text-right mr-[2%] sm:mr-[0]  hover:font-bold transition ease-in-out">
            <HiShoppingCart size={25} className='visible ' />
          </Link>
          <button className='list-icon invisible' onClick={() => setView(!view)}><GiHamburgerMenu size={25} /></button>
        </div>
      </div>

      {view && <div className=' invisible dropdown py-[2%] px-[2%] text-s tracking-wider flex flex-col justify-end '>
        <Link to="/" className="flex justify-end">
          <div>
            REGISTER
          </div>
        </Link>
        <Link to="/" className="flex justify-end">
          <div>
            LOGIN
          </div>
        </Link>

      </div>
      }

    </div>
  )
}

<div className='px-[1%] py-[1%] flex items-center justify-between w-full'>
  <div className='flex items-center flex-1'>
    <div className='border-2 border-gray-200 flex items-center justify-between p-[1%] w-[80px] sm:w-[70%]'>
      <input className='border-none w-[50px] sm:w-[80%]' />
      <AiOutlineSearch />
    </div>
  </div>
  <div className='text-center flex-1'>
    <div className='font-bold text-[150%] sm:text-[250%] font-mono'>ShopBuzz</div>
  </div>
  <div className=' flex-1 flex items-center justify-end'>
    <div className='cursor-pointer py-[1%] invisible w-0 sm:visible sm:w-1/3 font-[120%]'>REGISTER</div>
    <div className='cursor-pointer py-[1%] invisible w-0 sm:visible sm:w-1/3 font-[120%]'>LOGIN</div>
    <div className='cursor-pointer py-[1%]  flex font-[120%] justify-start '>
      <HiShoppingCart size={15} className='visible ' />
      <GiHamburgerMenu size={15} className='visible sm:invisible' />
    </div>

  </div>
</div>

