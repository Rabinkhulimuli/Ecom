import { categoryArray } from '@/config/category'
import React from 'react'
import { IoIosArrowForward } from 'react-icons/io'

export default function Leftfirst() {
  return (
    <div
    className='hidden  max-h-86 md:flex flex-col gap-4 border-r-2 pr-4 md:mr-4 lg:mr-10'
    >
      {categoryArray.map((eh,index)=> <p key={index}
      className=' capitalize text-nowrap font-semibold flex items-center justify-between gap-4 max-w-50 w-full '
      > {eh}{index ==0||index==1 ?<IoIosArrowForward/>:""} </p>)}
    </div>
  )
}
