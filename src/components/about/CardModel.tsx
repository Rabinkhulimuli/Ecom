import Image from 'next/image'
import React from 'react'
import { FaXTwitter } from 'react-icons/fa6'
import { BsInstagram } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";

function CardModel({name,rank,image}:{name:string,rank:string,image:string}) {
  return (
    <div className=' w-full flex-shrink-0  space-y-4 lg:space-y-8  h-[500px] sm:h-[560px]'>
      <div className='relative min-h-[300px] min-w-24 max-w-[235px] max-h-[390px] w-full sm:h-full'>
        <Image className=' object-cover w-full h-full rounded-md'
         src={image} alt="boa" fill  priority />
      </div>
      <div className='space-y-1 lg:space-y-2 '>
        <h2 className='text-lg tracking-tight leading-4 md:leading-5 sm:text-2xl lg:text-3xl'>{name} </h2>
        <p className='text-xs tracking-tight lg:text-lg'>{rank} </p>
        <div className='flex gap-2 lg:gap-4 mt-2 lg:mt-4'>
        <FaXTwitter className='lg:w-6 lg:h-6' />
        <BsInstagram className='lg:w-6 lg:h-6' />
        <FaLinkedinIn className='lg:w-6 lg:h-6' />
        </div>
      </div>
    </div>
  )
}

export default CardModel
