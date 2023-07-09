import React from 'react';
import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import { AiFillPhone } from 'react-icons/ai';
import { CiLocationOn } from 'react-icons/ci';

export const  Footer=()=> {
  return (
    <div className="flex flex-col min-[500px]:border-t-2  min-[500px]:flex-row text-gray-600 font-serif">
      <div className="flex-1 flex flex-col p-[6%] min-[500px]:p-[2%] border-b-2 min-[500px]:border-t-0  border-t-2 min-[500px]:border-r-2">
        <h1 className="lg:text-4xl mb-[4%] text-center font-bold text-[130%] min-[500px]:text-left ">PureVeda</h1>
        <p className="mb-[2%] ml-[4%] text-[70%] lg:text-[100%]">
          Lorem ipsum psa porro eos perspiciatis laudantium perferendis quo
          animi recusandae repudiandae cupiditate rem  Veniam sapiente optio
          necessitatibus deleniti vel neque in.
        </p>
        <div className="flex text-white">
          <div className="p-[3%] rounded-full bg-blue-500 flex items-center justify-center m-2 hover:scale-125">
            <BsFacebook />
          </div>
          <div className="p-[3%] rounded-full bg-pink-500 flex items-center justify-center m-2 hover:scale-125">
            <BsInstagram />
          </div>
          <div className="p-[3%] rounded-full bg-blue-400 flex items-center justify-center m-2 hover:scale-125">
            <BsTwitter />
          </div>
        </div>
      </div>
      <div className="flex-1  border-b-2 min-[500px]:border-r-2 p-[6%] min-[500px]:p-[2%]">
        <h3 className="mb-[5%] sm:text-lg  lg:text-3xl font-sans text-center ">Useful Links</h3>
        <ul className="m-0 p-0 flex flex-col flex-wrap">
          <li className="ml-[4%] sm:text-center sm:text-[100%] lg:text-lg text-[80%]">Home</li>
          <li className="ml-[4%] sm:text-center sm:text-[100%] lg:text-lg text-[80%]">Cart</li>
          <li className="ml-[4%] sm:text-center sm:text-[100%] lg:text-lg text-[80%]">Wishlist</li>
          <li className="ml-[4%] sm:text-center sm:text-[100%] lg:text-lg text-[80%]">Terms</li>
        </ul>
      </div>
      <div className="flex-1 p-[6%] min-[500px]:p-[2%]">
        <h3 className="mb-[5%] sm:text-lg text-center lg:text-3xl font-sans">Contact</h3>
        <div className="flex items-center mb-[4%]  sm:text-[100%]  lg:text-lg  ml-[4%] text-[80%]">
          <CiLocationOn size={25} className="mr-2" />
          <span>622 bksjfs, rfrfswb</span>
        </div>
        <div className="flex items-center mb-[4%]  sm:text-[100%] lg:text-lg  ml-[4%] text-[80%]">
          <AiFillPhone size={25} className="mr-2" />
          <span>+91 987654213</span>
        </div>
        <div className="flex items-center mb-[4%] ml-[4%]  lg:text-lg sm:text-[100%]  text-[80%]">
          <MdEmail size={25} className="mr-2" />
          <span>contact@gmail.com</span>
        </div>
      </div>
    </div>
  );
}

