import React from 'react'
import { IoCallOutline } from "react-icons/io5";
import { LuMail } from "react-icons/lu";

function LeftContact() {
  return (
    <div className='flex flex-col gap-8 px-5 py-6 xl:px-9 xl:py-10 w-full lg:max-w-[450px]'>
      <div className='space-y-4 sm:space-y-6'>
        <h2 className='flex items-center gap-2 '><IoCallOutline className='w-7 sm:w-10 h-7 sm:h-10 rounded-full p-1 text-white bg-[#db4444]' /> <span className='capitalize font-semibold sm:text-lg'>call to us</span></h2>
        <div className=' space-y-2 sm:space-y-4 text-sm sm:text-[16px]'>
        <p>We are available 24/7 , 7 days a week.</p>
        <p>Phone: +18801647648</p>
        </div>
      </div>
      <hr className='border-2' />
      <div className='space-y-4 sm:space-y-6'>
        <h2 className='flex items-center gap-2 '><span className='bg-[#db4444] rounded-full'>
        <LuMail className='w-7 sm:w-10 h-7 sm:h-10  p-1 sm:p-2 text-white ' /> 
            </span> <span className='capitalize font-semibold sm:text-lg'>send mail</span></h2>
        <div className='space-y-2 sm:space-y-4 text-sm sm:text-[16px]'>
        <p>Fill out the form and we will contact you within 24 hours.</p>
        <p>Email: {process.env.CuEmail}</p>
        <p>Email: {process.env.OfficialEmail} </p>
        </div>
      </div>
    </div>
  )
}

export default LeftContact
