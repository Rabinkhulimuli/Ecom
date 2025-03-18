"use client"
import Image from 'next/image'
import React, { useState } from 'react'

function ProductImage() {
  const[updateimage,setUpdateImage]=useState("/anime/boa.jpg")
  return (
    <div className=' flex flex-col-reverse sm:flex-row gap-2  sm:h-[600px] w-full'>
      <div className=' h-full flex sm:flex-col max-h-[600px]   gap-2'>
        <div className='h-[80px] sm:h-[144px] flex-1 max-w-[190px] w-full '>
            <Image className='aspect-square object-cover object-right-top w-full h-full ' src="/anime/boa.jpg" onClick={()=> setUpdateImage("/anime/boa.jpg")} alt="" width={170} height={170} />
        </div>
        <div className='h-[80px] sm:h-[144px] flex-1 max-w-[190px] w-full  '>
            <Image className='aspect-square object-cover object-center w-full h-full ' src="/anime/lufy.jpg" onClick={()=> setUpdateImage("/anime/lufy.jpg")} alt="" width={170} height={170} />
        </div>
        <div className='h-[80px] sm:h-[144px] flex-1 max-w-[190px] w-full  '>
            <Image className='aspect-square object-cover object-top w-full h-full ' src="/anime/zoro.jpg" onClick={()=> setUpdateImage("/anime/zoro.jpg")} alt="" width={170} height={170} />
        </div>
        <div className='h-[80px] sm:h-[144px] flex-1 max-w-[190px] w-full  '>
            <Image className='aspect-square object-cover object-center w-full h-full ' src="/anime/lufy.jpg" onClick={()=> setUpdateImage("/anime/lufy.jpg")} alt="" width={170} height={170} />
        </div>
      </div>
      <div className='sm:min-w-[350px] w-full h-[400px] sm:h-[600px] max-w-full '>
            <Image className='w-full h-full object-right-top object-cover' src={updateimage} alt="" width={500} height={600} />
        </div>
    </div>
  )
}

export default ProductImage
