import React from 'react'
import { HiShoppingCart } from 'react-icons/hi'
import { GiHamburgerMenu } from 'react-icons/gi'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
export const AllProduct = ({ item }) => {

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
        // toast.success("Added to cart")
    }
    return (

        <Link state={item} to={`/${item.id}`} className='w-[70%] min-[400px]:w-[60%] min-[500px]:w-[45%] sm:w-1/4 lg:w-1/5 h-[250px] p-[2%] hover:shadow-2xl hover:scale-110 transition-all ease-in delay-100 hover:border-2 border-teal-900 sm:h-[300px] rounded-3xl bg-[#C9E5E1] m-[2%]'>

            <img src={item.img} alt="" className='h-1/2 w-full ' />

            <div>
                <div className='text-center text-[70%] sm:text-[100%] lg:text-xl font-bold font-[Monteserrat]'>{item.name}</div>
                <div className='text-center text-[70%] sm:text-[100%] lg:text-xl italic'>Rs {item.price}</div>
                <div className='flex justify-center items-center flex-col sm:flex-row sm:justify-center sm:space-x-5 mt-[5%]  '>
                    <Link state={item} to={`/${item.id}`} className='hover:scale-110  bg-teal-700 p-[6%] rounded-full '><HiShoppingCart style={{ color: "white" }} size={20} /></Link>
                    <button onClick={() => toast.success("Order placed")} className='hover:scale-110 text-[80%] sm:text-base font-mono text-white bg-teal-700 mt-[5%] sm:m-0 p-[4%] '>Buy Now</button>
                </div>
            </div>
            <ToastContainer />
        </Link>
    )
}
