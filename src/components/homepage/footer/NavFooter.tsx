import React from 'react'
import { IoGridOutline } from "react-icons/io5"
function NavFooter() {
  return (
    <div className='flex flex-col items-center  lg:items-start gap-2'>
      <div className='flex lg:flex-col items-center lg:items-start gap-1'>
        <IoGridOutline className='text-xl'/>
        <p className='text-lg font-semibold'>
            Navigation
        </p>
      </div>
      <p>Login</p>
      <p>Subscribe</p>
      <p>Features</p>
      <p>Plans</p>
      <p>FAQs</p>
    </div>
  )
}

export default NavFooter
