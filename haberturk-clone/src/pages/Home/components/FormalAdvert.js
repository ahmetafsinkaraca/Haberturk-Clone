import React from 'react'
import items from '../../../data/items'
import { NavLink } from 'react-router-dom'
import { Seperator2 } from '../../../components/Seperator'
import { useMediaQuery } from "react-responsive"


export default function FormalAdvert() {

    const isBigScreen = useMediaQuery({ query: '(min-width: 1445px)' })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1444px)' })

  return(
      <>
          {isBigScreen &&
          <BigFormalAdvert/>
    }
          {isTabletOrMobile &&
          <MobileFormalAdvert/>
    }
      </>
  )
}


export function MobileFormalAdvert() {
    return (
        <div className='flex flex-row gap-x-5 justify-center items-center mx-auto'>
            <NavLink to='resmi-ilanlar' className='flex-shrink-0'>
                <header className=" font-extrabold text-xl">RESMİ İLANLAR</header>
            </NavLink>
            <Seperator2 />
            <NavLink to='resmi-ilanlar' className='flex items-center justify-end w-full mx-auto'>
                <p>Tümü</p>
            </NavLink>
        </div>
  )
}

export function BigFormalAdvert() {
    return (
        <div className="flex flex-col gap-y-5 py-6 items-center justify-center ">

            <div className='flex flex-row gap-x-5 justify-center items-center mx-auto'>
                <NavLink to='resmi-ilanlar' className='flex-shrink-0'>
                    <header className=" font-extrabold text-xl">RESMİ İLANLAR</header>
                </NavLink>
                <Seperator2/>
                <NavLink to='resmi-ilanlar' className='flex items-center justify-end w-full mx-auto'>
                    <p>Tümü</p>
                </NavLink>
            </div>


            <div className="flex gap-x-4 mx-auto">
                <NavLink to='/' className='rounded-lg gap-x-2 flex-shrink-0'>
                    <div className="relative overflow-ellipsis w-72">
                        <img src={items[2].image} className="object-cover w-72 h-44 rounded-lg">
                        </img>
                        <span className='absolute top-6 left-20 z-10 bg-black bg-opacity-60 text-white font-bold py-1 px-2'>RESMİ İLANDIR</span>
                        <span className="p-2 text-black bg-opacity-50 font-bold text-xl">{items[1].title}</span>
                    </div>
                </NavLink>
                <NavLink to='/' className='rounded-lg gap-x-2 flex-shrink-0'>
                    <div className="relative overflow-ellipsis w-72">
                        <img src={items[2].image} className="object-cover w-72 h-44 rounded-lg">
                        </img>
                        <span className='absolute top-6 left-20 z-10 bg-black bg-opacity-60 text-white font-bold py-1 px-2'>RESMİ İLANDIR</span>
                        <span className="p-2 text-black bg-opacity-50 font-bold text-xl">{items[1].title}</span>
                    </div>
                </NavLink>
                <NavLink to='/' className='rounded-lg gap-x-2 flex-shrink-0'>
                    <div className="relative overflow-ellipsis w-72 ">
                        <img src={items[2].image} className="object-cover w-72 h-44 rounded-lg">
                        </img>
                        <span className='absolute top-6 left-20 z-10 bg-black bg-opacity-60 text-white font-bold py-1 px-2'>RESMİ İLANDIR</span>
                        <span className="p-2 text-black bg-opacity-50 font-bold text-xl">{items[1].title}</span>
                    </div>
                </NavLink>
                <NavLink to='/' className='rounded-lg gap-x-2 flex-shrink-0'>
                    <div className="relative overflow-ellipsis w-72 ">
                        <img src={items[2].image} className="object-cover w-72 h-44 rounded-lg">
                        </img>
                        <span className='absolute top-6 left-20 z-10 bg-black bg-opacity-60 text-white font-bold py-1 px-2'>RESMİ İLANDIR</span>
                        <span className="p-2 text-black bg-opacity-50 font-bold text-xl">{items[1].title}</span>
                    </div>
                </NavLink>
            </div>
        </div>
    )
}