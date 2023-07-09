import React from 'react'
import about from "../assets/about.jpg"
export const About = () => {
  return (
    <div className=' flex flex-col min-[500px]:flex-row  '>
      <div className='overflow-hidden h-[300px] min-[500px]:w-1/2 min-[500px]:h-[500px]'><img src={about} alt="" className='h-[300px] w-full min-[500px]:h-[500px] hover:scale-110 transition-all ease-in transform  duration-300' /></div>
      <div className='bg-[#ABB18E] text-white  py-[5%] min-[500px]:w-1/2 min-[500px]:p-0 min-[500px]:h-[500px] flex justify-center items-center flex-col'>
        <h1 className=" text-center font-[Monteserrat] px-[15%] py-[1%] border-b-2  md:text-5xl">ABOUT</h1>
        <p className='p-[7%] text-[80%] font-serif md:text-[110%] min-[500px]:px-[15%]'>Lorem ipsum assumenda excepturi quas aliquam praesentium accusantium provident quisquam itaque, sit nesciunt possimus excepturi eligendi! Nam exercitationem, consequuntur enim quia quisquam rerum amet cum suscipit reprehenderit libero.</p>
      </div>
    </div>
  )
}
