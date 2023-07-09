import React from 'react'
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

export const Cart = () => {
    const myBookings = JSON.parse(localStorage.getItem('Med'));
    console.log(myBookings)
    return (
        <div>
                <Navbar/>
            <div className='flex px-[2%] py-[1%] justify-center items-center'>{myBookings ?
                <div className='w-full'>
                    <h1 className='text-xl sm:text-2xl lg:text-5xl  text-center font-serif italic '>My Cart</h1>
                    <div className='flex flex-wrap my-[2%] w-[100%] '>
                        {myBookings.map((item) => (
                            <div className='w-[45%] min-[500px]:w-1/3 p-[2%] sm:h-[250px]  m-[1%] md:h-[300px] sm:w-1/4 lg:w-1/5 flex flex-col bg-green-50 border-green-800 rounded-2xl shadow-xl border-2 '>
                                <div className='flex justify-center h-3/4 items-center'>
                                    <img src={item.img} alt="" className='h-full w-full' />
                                </div>
                                <div className='flex px-[5%]  h-full  flex-col justify-center items-center'>
                                    <div className='font-serif text-sm sm:text-lg italic underline lg:text-xl p-[2%]'>{item.name}</div>
                                    <div className='font-serif text-xs sm:text-base italic lg:text-lg p-[2%]'>Rs. {item.price}</div>
                                    {/* <div className='font-serif italic text-2xl p-[2%]'>{item.desc}</div> */}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                : <div className='text-xl sm:text-2xl lg:text-5xl text-center font-serif italic underline py-[10%]'> No Product in Cart Yet!! </div>
            }
            </div>
            <Footer/>
        </div>
    )
}
