import React from 'react'
import TopNavbar from './components/TopNavbar'
import MiddleNavbar from './components/MiddleNavbar'
import BottomNavbar from './components/BottomNavbar'
import { useMediaQuery } from "react-responsive"

export default function Navbar() {

  const isBigScreen = useMediaQuery({ query: '(min-width: 1300px)' })

  return (
    <>
      <TopNavbar />
      <MiddleNavbar />
      {isBigScreen &&
        <div className='flex'>
          <BottomNavbar />
        </div>
        }
    </>
  )
}
