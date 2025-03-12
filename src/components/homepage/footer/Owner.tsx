import React from 'react'
import { GiImperialCrown } from 'react-icons/gi'
import { FaXTwitter } from "react-icons/fa6";

function Owner() {
  return (
    <div className='flex flex-col items-center lg:items-start gap-2'>
      <div className='flex lg:flex-col items-center lg:items-start gap-1'>
      <GiImperialCrown  className='text-2xl lg:text-xl'/>
      <h2 className='text-lg font-semibold'>CEO <sup className='uppercase'>Xeron</sup></h2>
      </div>
      <p>official@xeron.empire</p>
      <button className='button-b-white w-fit'><span>Follow on</span><FaXTwitter/> </button>
    </div>
  )
}

export default Owner
