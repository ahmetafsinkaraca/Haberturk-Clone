import React, {useState, useEffect} from 'react'
import { NavLink } from 'react-router-dom'
import items from '../../../data/items'
import { Seperator2,Seperator3 } from '../../../components/Seperator'
import Slider from 'react-slick';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

export default function Writings() {

    
function NextBtn({className, style, onClick}){
    return(
    <button className= 'text-gray-300 absolute top-1/2 right-2 -translate-y-1/2 bg-black bg-opacity-40 z-10 size-8 items-center justify-center flex hover:bg-opacity-60' onClick={onClick}>
        <IoIosArrowForward size={20}/>
    </button>
    )
  }
  
  function PrevBtn({className, style, onClick}){
    return(
    <button className= 'text-gray-300 absolute top-1/2 left-2 -translate-y-1/2 bg-black bg-opacity-40 z-10 size-8 items-center justify-center flex hover:bg-opacity-60' onClick={onClick}>
        <IoIosArrowBack size={20}/>
    </button>
    )
  }

  const [banners, setBanners] = useState([]);

  useEffect(() => {
   setBanners(items)
  }, [])

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3.5,
    slidesToScroll: 1,
    autoplay: false,
    speed: 500,
    autoplaySpeed: 3500,
    cssEase: "linear",
    arrows: true,
    nextArrow: <NextBtn />,
    prevArrow: <PrevBtn />,
    responsive: [
        {
          breakpoint: 1280,
          settings: {
            slidesToShow: 3,
            arrows: false,
          }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            arrows: false,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
            arrows: false,
          }
        },
      ]
  };

    return (
        <>
            <div className="flex flex-col h-full py-6 items-center justify-center">

                <div className='flex flex-row gap-x-5 justify-center items-center mx-auto'>
                    <NavLink to='yazilar' className='flex-shrink-0 '>
                        <header className=" font-extrabold text-xl">ÖZEL İÇERİKLER</header>
                    </NavLink>
                    <Seperator2 />
                    <NavLink to='yazilar' className='flex items-center justify-end w-full mx-auto'>
                        <p>Tümü</p>
                    </NavLink>
                </div>
            </div>

            <div className=' flex items-center justify-center w-[1200px] mx-auto'>
                <div className='container'>
                    <Slider className='md:mx-2' {...settings}>
                        {banners && banners.map((banner, index) => (
                            <div id={banner.id} className='relative'>
                                <picture>
                                    <img src={banner.image} className='md:px-2 md:rounded:lg object-cover w-[1200px] h-[200px]' ></img>
                                </picture>
                                <span className='absolute top-12 left-10 z-10 text-white overflow-ellipsis w-[250px] font-bold text-lg'>{banner.type}</span>
                                <span className='absolute top-[4.8rem] left-10 z-10 text-white overflow-ellipsis w-[200px] border-b border-gray-300'>{banner.person}</span>
                                <span className='absolute top-[6.5rem] left-10 z-10 text-white overflow-ellipsis w-[250px] font-semibold text-lg'>{banner.title}</span>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div> 

        </>
    )
}



export function Writing() {
return(
    <NavLink to='/' className='rounded-lg gap-x-2 flex-shrink-0 items-center justify-center'>
        <div className="relative">
            <img src={items[3].image} className="object-cover w-72 h-44 rounded-lg">
            </img>
            <span className="absolute bottom-4 left-0 right-0 p-2 text-white bg-opacity-50 font-extrabold text-xl z-10 ">{items[3].title}</span>
        </div>
    </NavLink>
)
}