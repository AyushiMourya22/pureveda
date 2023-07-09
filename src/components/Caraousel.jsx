import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import im1 from "../assets/im1.jpg"
import im2 from "../assets/im2.jpg"
import im3 from "../assets/im3.jpg"

export const Caraousel = () => {
    return (
        <div className=' relative lg:min-h-[600px]'>


            <Carousel showThumbs={false} dynamicHeight={false} stopOnHover={false} showIndicators={false} autoPlay={true} infiniteLoop={true}>
                <div>
                    <img src={im1} alt="" srcset="" className='w-1/2 max-h-[600px]' />
                    <div className="carousel-caption absolute bottom-0 left-0 w-full bg-black bg-opacity-75  py-[5%] text-white font-mono">
                        <h3 className="text-xl lg:text-4xl font-bold mb-2">Welcome to PureVeda</h3>
                        {/* <p className="text-sm lg:text-xl">Your Trusted Source for Authentic Herbal Remedies and Holistic Wellness</p> */}
                    </div>
                </div>
                <div>
                    <img src={im2} className='w-1/2 max-h-[600px]' />
                    <div className="carousel-caption absolute bottom-0 left-0 w-full bg-black bg-opacity-75  py-[5%] text-white font-mono">
                        <h3 className="text-xl lg:text-4xl font-bold ">Discover the Timeless Wisdom of Ayurveda</h3>
                        {/* <p className="text-sm lg:text-xl">Your Trusted Source for Authentic Herbal Remedies and Holistic Wellness</p> */}
                    </div>
                </div>
                <div>
                    <img src={im3} className='w-1/2 max-h-[600px]' />
                    <div className="carousel-caption absolute bottom-0 left-0 w-full bg-black bg-opacity-75  py-[5%] text-white font-mono">
                        {/* <h3 className="text-xl lg:text-3xl font-bold mb-2">Discover the Timeless Wisdom of Ayurveda</h3> */}
                        <p className="text-sm lg:text-4xl">Your Trusted Source for Authentic Herbal Remedies and Holistic Wellness</p>
                    </div>
                </div>
               
            </Carousel>
        </div>
    )
}
