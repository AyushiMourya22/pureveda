import React from 'react';
import { AiOutlineSend } from 'react-icons/ai';

export const Newsletter = () => {
    return (
        <div className="py-[5%] bg-[#fcf5f5] flex items-center justify-center flex-col">
            <h1 className="lg:text-7xl font-[Monteserrat] sm:text-4xl">NEWSLETTER</h1>
            <div className="text-[80%] sm:text-lg lg:text-2xl font-light mb-[3%]">
                Get timely updates from your favourite products.
            </div>
            <div className="w-1/2 flex justify-between border border-gray-300">
                <input
                    className="w-full border-none pl-[2%]"
                    type="text"
                    placeholder="Your email"
                />
                <button className="w-1/10 sm:p-[2%] p-[1%] bg-teal-500 text-white">
                    <AiOutlineSend size={20} />
                </button>
            </div>
        </div>
    );
}


