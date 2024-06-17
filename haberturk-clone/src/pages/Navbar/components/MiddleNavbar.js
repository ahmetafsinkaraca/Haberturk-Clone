import React, { useState } from 'react'
import { CiSearch } from "react-icons/ci";
import { TiWeatherPartlySunny } from "react-icons/ti";
import havadurumu from '../../../data/havadurumu';
import { HiOutlineBars3 } from "react-icons/hi2";
import { NavLink } from 'react-router-dom';
import { LiaPencilAltSolid, LiaTimesSolid } from "react-icons/lia";
import { IoMoonOutline } from "react-icons/io5";
import { FaAngleDown } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import { CiYoutube } from "react-icons/ci";
import { SiHuawei } from "react-icons/si";
import { FaAppStoreIos } from "react-icons/fa6";
import { IoLogoGooglePlaystore } from "react-icons/io5";




export default function MiddleNavbar() {

  const [open, setOpen] = useState(false)
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);

  const toggleOpen = () => {
    setOpen3(!open3);
  };


  return (
    <div  className='fixed z-50 bg-white w-full mx-auto'>
      <div  className='flex items-center justify-center xl:gap-x-[30rem] lg:gap-x-[21rem] md:gap-x-[13rem] sm:gap-x-[9rem] shadow-custom'>
        <div className='flex items-center justify-center gap-x-9'>
          <button onClick={() => setOpen(true)}>
            <CiSearch className='w-6 h-6' />
            </button>
            {open && (
            <div className='fixed inset-0 bg-yellow-100 z-30 bg-opacity-50 transition-transform ease-linear duration-200'>
              <div className='flex justify-center items-center h-full'>
                <div className='relative border-1 border-solid bg-white w-[40rem] h-[11rem]'>
                  <button onClick={() => setOpen(false)} className='top-0 right-0 absolute border flex border-gray-300 w-10 h-10 items-center justify-center'><LiaTimesSolid size={24}/></button>
                  <span className='flex items-center justify-center my-4 font-bold text-2xl'>Bir Kaç Kelime Yazarak Size Yardımcı Olabiliriz!</span>
                  <input type='Search' placeholder='Ara!' className='w-[36rem] h-[2.5rem] flex items-center justify-center mt-6 mx-auto border border-black outline-none px-2'></input>
                  <button className='mx-auto flex items-center justify-center'><span className='border border-black w-[36rem] h-[2.5rem] font-semibold py-1'>Listele</span></button>
                </div>
              </div>
            </div>
            )}
          <NavLink to='/' className='flex-col flex items-center gap-y-[0.05rem]'>
            <div className='border-2 w-6 h-5 rounded-md border-red-700'><p className='text-xs flex items-center justify-center font-bold text-red-600'>TV</p></div>
            <div className='border-b px-2 border-red-600 items-center justify-center flex'></div>
          </NavLink>
        </div>

        <div className=' flex items-center justify-center w-22 py-3 '>
          <NavLink to='/'>
            <img className="w-full h-12 px-4" src="https://www.haberturk.com/images/common/logo/svg/haberturk-logo.svg" alt="Habertürk"></img>
          </NavLink>
        </div>

        <div className='flex-row flex items-center justify-center'>

          <NavLink to='/' className='flex flex-col items-center justify-center'>
            <div className='flex items-center gap-x-2'>
              <p className='text-sm font-bold'>{havadurumu[1].temperature}</p>
              <p className='text-sm font-bold'>{havadurumu[1].name}</p>
            </div>
            <div className='flex items-center gap-x-2'>
              <TiWeatherPartlySunny />
              <p className='text-xs font-light'>{havadurumu[1].state}</p>
            </div>
          </NavLink>

          <button className='flex items-center justify-center px-4' onClick={() => setOpen2(true)}>
            <HiOutlineBars3 size={28} className='' />
          </button>
          {open2 && (
            <div className='fixed inset-0 bg-yellow-100 z-10 bg-opacity-50 transition-transform ease-linear duration-200 h-full w-full'>
              <div className='relative z-30 max-w-sm h-screen w-[calc(100%-50px)] bg-white'>

                <div className='flex items-center justify-center'>
                  <img className='absolute top-7 left-5 z-20 w-[4rem]' src='https://www.haberturk.com/images/common/logo/svg/haberturk-logo.svg' />
                  <button className='absolute top-4 right-16 z-20 '><IoMoonOutline size={18}/></button>
                  <button onClick={() => setOpen2(false)} className='absolute top-0 right-0 border flex border-gray-300 w-12 h-12 items-center justify-center'><LiaTimesSolid size={26} /></button>

                  <div className='relative items-center justify-center flex mt-16'>
                    <input type='Search' placeholder='Kategori Ara' className='relative w-[22rem] h-[3.1rem] flex items-center justify-center mt-6 mx-auto border-2 border-zinc-100 outline-none px-2' />
                    <button className='absolute w-[3.6rem] h-[2.1rem] flex items-center justify-center border bg-zinc-100 outline-none top-8 right-2'>Ara</button>
                  </div>
                </div>

                <div className=' overflow-scroll overscroll-none pb-20 h-[calc(100%-170px)] mt-6'>
                <div className='mb-5 px-5 border-b '>

                    <nav className=''>
                      <li className='flex flex-col items-center py-5 border-b '>
                        <NavLink to='/' className='flex items-center gap-x-[14rem]'>
                          <div className='flex items-center gap-x-[14rem]'>
                            <p className='font-bold flex items-center justify-start '>Son Dakika</p>
                            <FaAngleDown onClick={toggleOpen}/>
                          </div>
                        </NavLink>
                        {open3 && (
                          <div className=''>
                            <ul className='flex flex-wrap gap-x-[4rem]'>
                              <li className='py-2.5'>sdfsdfsdfsdfsd</li>
                              <li className='py-2.5'>sdfsdfsdfsdfsd</li>
                              <li className='py-2.5'>sdfsdfsdfsdfsd</li>
                              <li className='py-2.5'>sdfsdfsdfsdfsd</li>
                              <li className='py-2.5'>sdfsdfsdfsdfsd</li>
                              <li className='py-2.5'>sdfsdfsdfsdfsd</li>
                              <li className='py-2.5'>sdfsdfsdfsdfsd</li>
                              <li className='py-2.5'>sdfsdfsdfsdfsd</li>
                            </ul>
                          </div>
                        )}
                      </li>
                      <li className='flex flex-col items-center py-5 border-b '>
                        <NavLink to='/' className='flex items-center gap-x-[14rem]'>
                          <div className='flex items-center gap-x-[14rem]'>
                            <p className='font-bold flex items-center justify-start '>Son Dakika</p>
                            <FaAngleDown onClick={toggleOpen} />
                          </div>
                        </NavLink>
                        {open3 && (
                          <div className=''>
                          <ul className='flex flex-wrap gap-x-[4rem]'>
                            <li className='py-2.5'>sdfsdfsdfsdfsd</li>
                            <li className='py-2.5'>sdfsdfsdfsdfsd</li>
                            <li className='py-2.5'>sdfsdfsdfsdfsd</li>
                            <li className='py-2.5'>sdfsdfsdfsdfsd</li>
                            <li className='py-2.5'>sdfsdfsdfsdfsd</li>
                            <li className='py-2.5'>sdfsdfsdfsdfsd</li>
                            <li className='py-2.5'>sdfsdfsdfsdfsd</li>
                            <li className='py-2.5'>sdfsdfsdfsdfsd</li>
                          </ul>
                        </div>
                        )}
                      </li>
                      <li className='flex flex-col items-center py-5 border-b '>
                        <NavLink to='/' className='flex items-center gap-x-[14rem]'>
                          <div className='flex items-center gap-x-[14rem]'>
                            <p className='font-bold flex items-center justify-start '>Son Dakika</p>
                            <FaAngleDown onClick={toggleOpen} />
                          </div>
                        </NavLink>
                        {open3 && (
                            <div className=''>
                            <ul className='flex flex-wrap gap-x-[4rem]'>
                              <li className='py-2.5'>sdfsdfsdfsdfsd</li>
                              <li className='py-2.5'>sdfsdfsdfsdfsd</li>
                              <li className='py-2.5'>sdfsdfsdfsdfsd</li>
                              <li className='py-2.5'>sdfsdfsdfsdfsd</li>
                              <li className='py-2.5'>sdfsdfsdfsdfsd</li>
                              <li className='py-2.5'>sdfsdfsdfsdfsd</li>
                              <li className='py-2.5'>sdfsdfsdfsdfsd</li>
                              <li className='py-2.5'>sdfsdfsdfsdfsd</li>
                            </ul>
                          </div>
                        )}
                      </li>
                      <li className='flex flex-col items-center py-5 border-b '>
                        <NavLink to='/' className='flex items-center gap-x-[14rem]'>
                          <div className='flex items-center gap-x-[14rem]'>
                            <p className='font-bold flex items-center justify-start '>Son Dakika</p>
                            <FaAngleDown onClick={toggleOpen} />
                          </div>
                        </NavLink>
                        {open3 && (
                            <div className=''>
                            <ul className='flex flex-wrap gap-x-[4rem]'>
                              <li className='py-2.5'>sdfsdfsdfsdfsd</li>
                              <li className='py-2.5'>sdfsdfsdfsdfsd</li>
                              <li className='py-2.5'>sdfsdfsdfsdfsd</li>
                              <li className='py-2.5'>sdfsdfsdfsdfsd</li>
                              <li className='py-2.5'>sdfsdfsdfsdfsd</li>
                              <li className='py-2.5'>sdfsdfsdfsdfsd</li>
                              <li className='py-2.5'>sdfsdfsdfsdfsd</li>
                              <li className='py-2.5'>sdfsdfsdfsdfsd</li>
                            </ul>
                          </div>
                        )}
                      </li>
                      <li className='flex flex-col items-center py-5 border-b '>
                        <NavLink to='/' className='flex items-center gap-x-[14rem]'>
                          <div className='flex items-center gap-x-[14rem]'>
                            <p className='font-bold flex items-center justify-start '>Son Dakika</p>
                            <FaAngleDown onClick={toggleOpen} />
                          </div>
                        </NavLink>
                        {open3 && (
                            <div className=''>
                            <ul className='flex flex-wrap gap-x-[4rem]'>
                              <li className='py-2.5'>sdfsdfsdfsdfsd</li>
                              <li className='py-2.5'>sdfsdfsdfsdfsd</li>
                              <li className='py-2.5'>sdfsdfsdfsdfsd</li>
                              <li className='py-2.5'>sdfsdfsdfsdfsd</li>
                              <li className='py-2.5'>sdfsdfsdfsdfsd</li>
                              <li className='py-2.5'>sdfsdfsdfsdfsd</li>
                              <li className='py-2.5'>sdfsdfsdfsdfsd</li>
                              <li className='py-2.5'>sdfsdfsdfsdfsd</li>
                            </ul>
                          </div>
                        )}
                      </li>
                      <li className='flex flex-col items-center py-5 border-b '>
                        <NavLink to='/' className='flex items-center gap-x-[14rem]'>
                          <div className='flex items-center gap-x-[14rem]'>
                            <p className='font-bold flex items-center justify-start '>Son Dakika</p>
                            <FaAngleDown onClick={toggleOpen} />
                          </div>
                        </NavLink>
                        {open3 && (
                            <div className=''>
                            <ul className='flex flex-wrap gap-x-[4rem]'>
                              <li className='py-2.5'>sdfsdfsdfsdfsd</li>
                              <li className='py-2.5'>sdfsdfsdfsdfsd</li>
                              <li className='py-2.5'>sdfsdfsdfsdfsd</li>
                              <li className='py-2.5'>sdfsdfsdfsdfsd</li>
                              <li className='py-2.5'>sdfsdfsdfsdfsd</li>
                              <li className='py-2.5'>sdfsdfsdfsdfsd</li>
                              <li className='py-2.5'>sdfsdfsdfsdfsd</li>
                              <li className='py-2.5'>sdfsdfsdfsdfsd</li>
                            </ul>
                          </div>
                        )}
                      </li>
                    </nav>
                    <div className='flex flex-col py-3 border-b'>
                      <p className=''>Takipte Kalın!</p>
                      <div className='flex items-center justify-start gap-x-6 py-3'>
                        <CiFacebook size={24} />
                        <FaInstagram size={24} />
                        <CiTwitter size={24} />
                        <CiYoutube size={24} />
                      </div>
                    </div>
                    <div className='flex py-3 border-b'>
                      <p className='text-xs leading-loose'>Günlük gelişmeleri takip edebilmek için habertürk uygulamasını indirin</p>
                    </div>
                    <div className='flex items-center py-3 border-b gap-x-5'>
                      <FaAppStoreIos size={40}/>
                      <IoLogoGooglePlaystore size={40}/>
                      <SiHuawei size={40}/>
                    </div>
                    <div className='flex items-center py-3 border-b'>
                      <p className='text-xs leading-loose'>Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Mobile Safari/537.36</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}