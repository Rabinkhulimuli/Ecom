"use client"
import React, { useState } from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import { GiCamargueCross, GiSelfLove } from 'react-icons/gi'
import { MdOutlineLogin } from 'react-icons/md'
import { RxCross2 } from 'react-icons/rx'
import { TbMenu2 } from 'react-icons/tb'
function Movlayout() {
    const[active,setActive]=useState(false)
    const handleMenu=()=> {
        setActive(!active)
    }
  return (
    <div
    className='relative w-full '
    >
      <div
      onClick={handleMenu}
      className={``}
      >
        <TbMenu2
        className='w-8 h-8'
        />
      </div>
      <div
      className={`fixed max-w-1/2 z-50 w-full mx-auto  transition-transform ease-in-out  duration-800 ${active?"translate-x-0":"translate-x-full "} top-0 right-0 flex flex-col gap-4 items-center justify-start text-lg  h-screen bg-gray-50 border-l-2 px-2 md:px-12`}
      >
        <button
       
        className='flex items-center justify-end w-full pt-4  md:py-7 md:pr-4 '
        ><RxCross2
        onClick={handleMenu}
        className='w-6 h-6'
        /> </button>
        <div
        className=' flex flex-col md:flex-row items-center md:pl-20 w-full  '
        >
          <div 
          className='relative'
          >
          <div
          className='absolute top-0'
          >
         <GiCamargueCross
         className='w-24 h-24 transition-transform duration-700 delay-300 rotate-60 hover:-translate-x-full'
         />
         </div>
          <div
          className=''
          >
         <GiCamargueCross
         className='w-24 h-24 -rotate-120 transition-transform duration-700 ease-in-out delay-100 hover:translate-x-80 opacity-100 hover:opacity-0'
         />
         </div>
          </div>
          <div
          className='flex md:flex-col w-full items-end justify-between  gap-2 px-4 md:px-0 md:pr-5'
          >
            

            <div
            className=''
            >
                      <GiSelfLove
                      className="w-6 h-6" />
                    </div>
                    <div>
                      <FaShoppingCart
                      className="w-6 h-6" />
                    </div>
                    <div>
                       <MdOutlineLogin
                       className='w-6 h-6'
                       />
                    </div>
          </div>
         
        </div>
        <div
        className='w-full text-center '
        >
            <p
            className='text-xl md:text-2xl font-semibold mb-4 '
            >Xen Next Appo</p>
            <hr />
        </div>
        
        <h3
        className='text-lg md:text-xl transition-all duration-700 cursor-pointer font-semibold hover:text-gray-900 ease-in-out  hover:bg-gray-200 px-2 py-1 w-full'
        >Home</h3>
        <h3
        className='text-lg md:text-xl transition-all duration-700 cursor-pointer font-semibold hover:text-gray-900 ease-in-out  hover:bg-gray-200 px-2 py-1 w-full'
        >Contact</h3>
        <h3
        className='text-lg md:text-xl transition-all duration-700 cursor-pointer font-semibold hover:text-gray-900 ease-in-out  hover:bg-gray-200 px-2 py-1 w-full'
        >About</h3>
        
      </div>
    </div>
  )
}

export default Movlayout
