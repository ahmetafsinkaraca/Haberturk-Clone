import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'


export default function HomeLayout() {


  return (
      <>
      <Navbar />
      <div className='container w-full mx-auto '>
        <Outlet />
      </div>
    </>
  )
}
