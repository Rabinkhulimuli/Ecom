"use client"
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'

function Notfound() {
    const router=useRouter()
  return (
    <div className=' relative w-full h-full'>
        <div className='relative min-w-[200px] min-h-[300px] opacity-10'>
            <Image src="/error/404.png" alt="" fill className='w-full h-full object-contain'  />
        </div>
      <div className='absolute inset-0 m-auto flex flex-col items-center gap-2 justify-end ' >
        <p className='text-xl font-semibold capitalize'>Ooops! Page not found </p>
        <p className='text-xs'>This page doesn&apos;t exist </p>
        <button onClick={()=> router.push("/")} className='capitalize category-btn'>back to home</button>
      </div>
    </div>
  )
}

export default Notfound
