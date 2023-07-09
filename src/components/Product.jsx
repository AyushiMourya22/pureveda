import React from 'react'
import { HiShoppingCart } from 'react-icons/hi'
import { GiHamburgerMenu } from 'react-icons/gi'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
export const Product = ({ item }) => {
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



        // localStorage.setItem("med",item)
        toast.success("Added to cart")
    }
    return (
        <div className='w-[45%] m-[2%] sm:w-[20%] '>

        <div className=' h-[200px] sm:h-[300px]  hover:scale-105 sm:hover:scale-110 transition-all ease-in-out delay-100  relative flex items-center justify-center bg-[#AEE3D6]'>
            <img src={item.img} className='z-[2] h-full ' alt="" />
            <div className='absolute top-0 left-0 flex flex-col  w-[100%] h-[100%] items-center z-30 justify-center transition-all opacity-0 bg-black bg-opacity-50 ease-in hover:opacity-100'>
                <div className='bg-white md:p-[5%]'>

                <div className='text-center text-[100%] md:text-lg  p-[2%] mb-[1%]'>
                    {item.name}
                </div>
                <div className=' text-[70%] md:text-[90%] mb-[1%]'>
                    {item.desc}
                </div>
                <div className='flex justify-center items-center mt-[5%] space-x-2 '>
                    
                <button onClick={handleCart} className='hover:scale-110 bg-teal-500 p-[5%] rounded-full '><HiShoppingCart  style={{color:"white"}} size={20}/></button>
                <Link to={`/latest/${item.id}`} className='hover:scale-110 bg-teal-500 p-[5%] rounded-full '><GiHamburgerMenu style={{color:"white"}}  size={20}/></Link>
                </div>
                </div>
            </div>
        </div>
        <ToastContainer/>
        </div>
    )
}
