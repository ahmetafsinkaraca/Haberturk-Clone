import React, { useState, useEffect  } from 'react'
import items from '../data/items'
import { ChevronLeft, ChevronRight } from "react-feather"


export default function BigSlider() {
return(
    <div className=''>
        <Carousel>
        {items.map((s) => (
      <img src={s.image} className='object-cover'/> 
          ))}
        </Carousel>
    </div>
)
}


 function Carousel({
    children: items,
    autoSlide = false,
    autoSlideInterval = 3000,
  }) {
    const [curr, setCurr] = useState(0)
  
    const prev = () =>
      setCurr((curr) => (curr === 0 ? items.length - 1 : curr - 1))
    const next = () =>
      setCurr((curr) => (curr === items.length - 1 ? 0 : curr + 1))

    const moveDot = i => {
        setCurr(i)
    }

    const handleDragStart = (e, index) => {
      e.dataTransfer.setData("index", index.toString());
  };

  const handleDragOver = (e) => {
      e.preventDefault();
  };

  const handleDrop = (e) => {
      const draggedIndex = parseInt(e.dataTransfer.getData("index"));
      moveDot(draggedIndex);
  };
  
    useEffect(() => {
      if (!autoSlide) return
      const slideInterval = setInterval(next, autoSlideInterval)
      return () => clearInterval(slideInterval)
    }, [])

    return (
      <div className="overflow-hidden relative max-h-[600px] max-w-[600px] flex items-center justify-center">
        <div
          className="flex transition-transform ease-out duration-500"
          style={{ transform: `translateX(-${curr * 100}%)` }}
        >
          {items }
        </div>
        <div className="absolute inset-0 flex items-center justify-between p-4">
          <button
            onClick={prev}
            className="p-1 rounded-full text-gray-800 hover:text-white absolute left-0 bottom-0 border-opacity-0 border-solid"
          >
            <ChevronLeft size={40} />
          </button>
          <button
            onClick={next}
            className="p-1 rounded-full text-gray-800 hover:text-white absolute right-0 bottom-0 border-opacity-0 border-solid"
          >
          <ChevronRight size={40} />
          </button>
        </div>

        
  
        <div className="absolute bottom-4 right-0 left-0">
          <div className="flex items-center justify-center gap-2">
            {items.map((_, i) => (
              <div
                onMouseEnter={() => moveDot(i)}
                onClick={() => moveDot(i)}
                className={`
                transition-all w-3 h-3 bg-white rounded-full
                ${curr === i ? "p-2" : "bg-opacity-50"}
              `}
              />
            ))}
          </div>
        </div>

      </div>
    )
  }