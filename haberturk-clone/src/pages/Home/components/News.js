import { NavLink } from "react-router-dom"
import items from "../../../data/items"
import BigSlider from "../../../components/BigSlider"
import SmallSlider from "../../../components/SmallSlider"
import { Writing } from "./Writings"
import { Seperator1 } from "../../../components/Seperator"
import { useMediaQuery } from "react-responsive"

export default function News() {

    const isBigScreen = useMediaQuery({ query: '(min-width: 1445px)' })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1444px)' })

    
    return (
        <>
            {isBigScreen &&
                <BigNews />
            }
            {isTabletOrMobile &&
                <MobileNews />
            }
        </>      
    )
}

export function MobileNews() {
    return (
    <div className="flex flex-col items-center justify-center w-[1200px]">
    <div className="flex flex-col gap-y-5 ">
        <div className="flex flex-col gap-x-4 py-2 ">
            <div className="flex items-center justify-center ">
                <BigSlider />
            </div>
            <div className="flex items-center justify-center ">
                <SmallSlider/>
            </div>
        </div>
    </div>

    <div className="flex w-full">
    <Writing/>
    </div>
</div>
    )
}





export function BigNews() {

    return (

    <div className="flex flex-col gap-y-5 h-full items-center justify-center">

    <div className="flex flex-row gap-x-5 items-center justify-center mx-auto">
        <header className=" font-extrabold text-xl flex-shrink-0">GÜNÜN ÖNEMLİ GELİŞMELERİ </header>
        <Seperator1 />
    </div>

    <div className="flex gap-x-4">
        <NavLink to='/' className='rounded-lg gap-x-2 flex-shrink-0'>
            <div className="relative ">
            <img src={items[1].image} className="object-cover w-72 h-44 rounded-lg ">    
            </img>
            <span className="absolute bottom-4 left-0 right-0 p-2 text-white bg-opacity-50 font-extrabold text-xl z-10 ">{items[1].title}</span>
        </div>
    </NavLink>
    <NavLink to='/' className='rounded-lg gap-x-2 flex-shrink-0'>
        <div className="relative">
            <img src={items[1].image} className="object-cover w-72 h-44 rounded-lg">    
            </img>
            <span className="absolute bottom-4 left-0 right-0 p-2 text-white bg-opacity-50 font-extrabold text-xl z-10 ">{items[1].title}</span>
        </div>
    </NavLink>
    <NavLink to='/' className='rounded-lg gap-x-2 flex-shrink-0'>
        <div className="relative">
            <img src={items[1].image} className="object-cover w-72 h-44 rounded-lg">    
            </img>
            <span className="absolute bottom-4 left-0 right-0 p-2 text-white bg-opacity-50 font-extrabold text-xl z-10 ">{items[1].title}</span>
        </div>
    </NavLink>
    <NavLink to='/' className='rounded-lg gap-x-2 flex-shrink-0'>
        <div className="relative">
            <img src={items[1].image} className="object-cover w-72 h-44 rounded-lg">    
            </img>
            <span className="absolute bottom-4 left-0 right-0 p-2 text-white bg-opacity-50 font-extrabold text-xl z-10 ">{items[1].title}</span>
        </div>
    </NavLink>
    </div>

    <div className="flex flex-col gap-y-5 flex-shrink-0">
        <div className="flex gap-x-4 py-2 flex-shrink-0">
            <div className="flex items-center justify-center flex-shrink-0">
                <BigSlider />
            </div>
            <div className="flex items-center justify-center flex-shrink-0">
                <SmallSlider/>
            </div>
            <div>
                <NavLink to='/' className='rounded-lg flex-shrink-0'>
                    <div className="w-72 overflow-ellipsis">
                        <img src={items[1].image} className="object-cover w-72 h-80 rounded-lg">
                        </img>
                        <span className=" p-2 text-black bg-opacity-50 font-extrabold text-xl z-10 items-center flex">{items[1].title}</span>
                    </div>
                </NavLink>
                <NavLink to='/' className='rounded-lg gap-x-2 flex-shrink-0'>
                    <div className="truncate w-72">
                        <img src={items[1].image} className="object-cover w-72 h-44 rounded-lg">
                        </img>
                        <span className="p-2 text-black bg-opacity-50 font-extrabold text-xl z-10 ">{items[1].title}</span>
                    </div>
                </NavLink>
            </div>
        </div>
    </div>

    <div className="flex gap-x-4">
    <NavLink to='/' className='rounded-lg gap-x-2 flex-shrink-0'>
        <div className="relative">
            <img src={items[1].image} className="object-cover w-72 h-44 rounded-lg">    
            </img>
            <span className="absolute bottom-4 left-0 right-0 p-2 text-white bg-opacity-50 font-extrabold text-xl z-10 ">{items[1].title}</span>
        </div>
    </NavLink>
    <NavLink to='/' className='rounded-lg gap-x-2 flex-shrink-0'>
        <div className="relative">
            <img src={items[1].image} className="object-cover w-72 h-44 rounded-lg">    
            </img>
            <span className="absolute bottom-4 left-0 right-0 p-2 text-white bg-opacity-50 font-extrabold text-xl z-10 ">{items[1].title}</span>
        </div>
    </NavLink>
    <NavLink to='/' className='rounded-lg gap-x-2 flex-shrink-0'>
        <div className="relative">
            <img src={items[1].image} className="object-cover w-72 h-44 rounded-lg">    
            </img>
            <span className="absolute bottom-4 left-0 right-0 p-2 text-white bg-opacity-50 font-extrabold text-xl z-10 ">{items[1].title}</span>
        </div>
    </NavLink>
    <Writing/>
    </div>
</div>
    )
}