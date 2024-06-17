import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { Seperator2 } from '../../../components/Seperator'
import crypto from '../../../data/crypto'
import Slider from 'react-slick';
import { FaArrowDownLong } from "react-icons/fa6";


export default function CryptoMoney() {


    const [banners, setBanners] = useState([]);

    useEffect(() => {
        setBanners(crypto)
    }, [])

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 9.5,
        slidesToScroll: 1,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 3500,
        cssEase: "linear",
        arrows: false,
    };


    return (
        <>
            <div className="flex flex-col h-full py-6 items-center justify-center">

                <div className='flex flex-row gap-x-5 justify-center items-center mx-auto'>
                    <NavLink to='ekonomi' className='flex-shrink-0 mx-auto'>
                        <header className=" font-extrabold text-xl">KRİPTO PARA</header>
                    </NavLink>
                    <Seperator2 className='flex-shrink-0 mx-auto w-full' />
                    <NavLink to='ekonomi' className='flex items-center justify-end w-full mx-auto'>
                        <p className='flex-shrink-0'>Tümü</p>
                    </NavLink>
                </div>
            </div>

             <div className=' flex items-center justify-center w-[1200px] mx-auto '>
                <Slider className='md:mx-2 w-full mx-auto' {...settings}>
                    {banners && banners.map((banner, index) => (
                        <div key={banner.id} className='flex items-center'>
                            <div className='flex'>
                                <div className=' translate-y-4'>
                                    <FaArrowDownLong className='text-red-700 w-10' />
                                </div>
                                <div className='items-center justify-center'>
                                    <div className='flex items-center justify-center gap-x-2'>
                                        <img src={banner.icon} className='font-bold text-md text-black size-3' />
                                        <span className='font-bold text-md'>{banner.name}</span>
                                    </div>
                                    <div className='flex flex-col'>
                                        <span className='text-red-700 font-semibold'>{banner.count}</span>
                                        <span className=' text-gray-500 font-light text-xs'>{banner.percentage}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </>
    )
} 


{/* <div className='flex flex-col'>
<div>
    <image src={banner.icon} className='font-bold text-md text-black' />
    <span className='font-bold text-md'>{banner.name}</span>
</div>
<span className='text-red-700 font-semibold'>{banner.count}</span>
<span className=' text-gray-500 font-light text-xs'>{banner.percentage}</span>
</div>  */}