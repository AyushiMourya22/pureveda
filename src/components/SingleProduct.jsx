import React from 'react'
import { Navbar } from './Navbar'
import { Footer } from './Footer'
import { useLocation } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'

export const SingleProduct = () => {
    const item = useLocation().state
    console.log(item)
    const handleCart = (e) => {
        e.preventDefault()
        const myBookings = JSON.parse(localStorage.getItem('Med'));
        console.log(item)
        const newProduct = {
            name: item.name,
            desc: item.desc,
            img: item.img,
            id: item.id,
            price: item.price
        }
        let newBookings;
        if (myBookings) {
            newBookings = [...myBookings, newProduct]
        }
        else {
            newBookings = [newProduct]
        }

        const json = JSON.stringify(newBookings);
        localStorage.setItem('Med', json);

        toast.success("Added to cart")
    }
    return (
        <div>
            <Navbar />
            <div className='px-[5%] py-[2%]'>
                <div className='min-[500px]:flex min-[500px]:flex-row-reverse '>
                    <div className='min-[500px]:w-2/3 md:w-1/2 sm:flex sm:flex-col sm:justify-center sm:items-center'>
                        <div className='lg:text-4xl sm:text-3xl text-[150%] font-[Monteserrat] font-bold'>{item.name}</div>
                        <div className='lg:text-lg sm:text-base text-[90%] font-serif'>{item.desc}</div>
                        <div className='flex space-x-6 mt-[4%]'>
                            <div className='md:text-[120%] font-bold italic'>Rs {item.price}</div>
                            <div className='md:text-[120%] text-gray-500'>{item.category}</div>
                        </div>
                    </div>
                    <div className='mx-auto min-[500px]:border-2 rounded-xl min-[500px]:w-1/3 md:w-1/2 min-[500px]:mr-[4%] '>
                        <img src={item.img} alt="" className='mx-auto w-[200px] h-[200px] sm:h-[300px] sm:w-[400px]' />
                    </div>
                </div>
                <div className='flex flex-col  min-[500px]:justify-around min-[500px]:flex-row justify-around items-center'>
                    <button  onClick={handleCart} className="bg-teal-700 md:text-lg text-white my-[2%] italic font-bold py-[1%] w-1/2 min-[500px]:w-1/3 md:w-1/4">Add to Cart</button>
                    <button  onClick={()=>toast.success("Order has been placed")} className="bg-teal-700 md:text-lg text-white my-[2%] italic font-bold py-[1%] w-1/2 min-[500px]:w-1/3 md:w-1/4">Buy Now</button>
                </div>

            </div>
            <Footer />
            <ToastContainer/>
        </div>
    )
}
