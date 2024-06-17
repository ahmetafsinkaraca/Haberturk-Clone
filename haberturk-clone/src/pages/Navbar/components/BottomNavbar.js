import React from 'react'
import { NavLink } from 'react-router-dom'
import Seperator from '../../../components/Seperator'

export default function BottomNavbar() {
     return (
               <div className='flex items-center justify-center w-full mx-auto'>
                    <div className='flex flex-row items-center justify-center gap-x-6 truncate mt-[4.8rem]'>
                         <NavLink to='gundem'>
                              <p className='font-bold text-lg'>Gündem</p>
                         </NavLink>
                         <NavLink to='ekonomi'>
                              <p className='font-bold text-lg'>Ekonomi</p>
                         </NavLink>
                         <NavLink to='dunya'>
                              <p className='font-bold text-lg'>Dünya</p>
                         </NavLink>
                         <NavLink to='spor'>
                              <p className='font-bold text-lg'>Spor</p>
                         </NavLink>
                         <NavLink to='magazin'>
                              <p className='font-bold text-lg'>Magazin</p>
                         </NavLink>
                         <NavLink to='kadin'>
                              <p className='font-bold text-lg'>Kadın</p>
                         </NavLink>
                         <NavLink to='saglik'>
                              <p className='font-bold text-lg'>Saglık</p>
                         </NavLink>
                         <NavLink to='yazilar'>
                              <p className='font-bold text-lg'>Yazılar</p>
                         </NavLink>
                         <NavLink to='teknoloji'>
                              <p className='font-bold text-lg'>Teknoloji</p>
                         </NavLink>
                         <NavLink to='gastro'>
                              <p className='font-bold text-lg'>Gastro</p>
                         </NavLink>
                         <NavLink to='video'>
                              <p className='font-bold text-lg'>Video</p>
                         </NavLink>
                         <NavLink to='kesfet'>
                              <p className='font-bold text-lg'>Keşfet</p>
                         </NavLink>
                         <NavLink to='resmi-ilanlar'>
                              <p className='font-bold text-lg'>Resmi İlanlar</p>
                         </NavLink>
                    </div>
               </div>
     )
}
