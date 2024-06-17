import React, { useState } from 'react'
import borsa from '../../../data/borsa'
import { FaArrowDownLong } from "react-icons/fa6";
import { FaArrowUpLong } from "react-icons/fa6";
import { BsFileBarGraph } from "react-icons/bs";



export default function TopNavbar() {

/*   const [countColor, setCountColor] = useState('');  { borsa }


  useEffect(() => {
    // count rengini belirlemek için bir yardımcı fonksiyon
    const setColor = () => {
      const count = parseFloat(borsa[1].count);
      setCountColor(count < 0 ? 'red' : 'green');
    };

    setColor(); // sayfa yüklendiğinde renkleri güncelle

    // component unmount edildiğinde temizleme
    return () => setCountColor('');
  }, [borsa]); */


  return (
<div className='fixed z-40 bg-white w-full mx-auto'>

<div className='flex items-center justify-center gap-x-4 py-2 border-b'>
      <div className='flex items-center justify-center gap-x-2'>
        <FaArrowDownLong className='text-red-700 w-2' />
        <p className='font-bold text-md'>{borsa[0].name}</p>
        <p className='text-red-700 font-semibold'>{borsa[0].count}</p>
        <p className=' text-gray-500 font-light text-xs'>{borsa[0].percentage}</p>
      </div>
      <div className='flex items-center justify-center gap-x-2'>
        <FaArrowDownLong className='text-red-700 w-2' />
        <p className='font-bold text-md'>{borsa[1].name}</p>
        <p className='text-red-700 font-semibold'>{borsa[1].count}</p>
        <p className=' text-gray-500 font-light text-xs'>{borsa[1].percentage}</p>
      </div>
      <div className='flex items-center justify-center gap-x-2'>
        <FaArrowUpLong className='text-green-700 w-2'/>
        <p className='font-bold text-md'>{borsa[2].name}</p>
        <p className='text-green-700 font-semibold' >{borsa[2].count}</p>
        <p className=' text-gray-500 font-light text-xs'>{borsa[2].percentage}</p>
      </div>
      <div className='flex items-center justify-center gap-x-2'>
        <FaArrowUpLong className='text-green-700 w-2'/>
        <p className='font-bold text-md'>{borsa[3].name}</p>
        <p className='text-green-700 font-semibold'>{borsa[3].count}</p>
        <p className=' text-gray-500 font-light text-xs'>{borsa[3].percentage}</p>
      </div>
      <div className='flex items-center justify-center gap-x-2'>
        <FaArrowUpLong className='text-green-700 w-2'/>
        <p className='font-bold text-md'>{borsa[4].name}</p>
        <p className='text-green-700 font-semibold'>{borsa[4].count}</p>
        <p className=' text-gray-500 font-light text-xs'>{borsa[4].percentage}</p>
      </div>
      <div className='flex items-center justify-center gap-x-2'>
        <FaArrowDownLong className='text-red-700 w-2' />
        <p className='font-bold text-md'>{borsa[5].name}</p>
        <p className='text-red-700 font-semibold'>{borsa[5].count}</p>
        <p className=' text-gray-500 font-light text-xs'>{borsa[5].percentage}</p>
      </div>
      <div className='flex items-center justify-center gap-x-2'>
        <p className='text-xs font-bold'>Borsa</p>
        <BsFileBarGraph className=''/>
      </div>
    </div>
</div>
      
  )
}
