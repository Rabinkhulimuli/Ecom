"use client"
import { secProduct } from '@/config/carouselRight'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { GiStaryu } from 'react-icons/gi'
import { RxCross2 } from 'react-icons/rx'
type Params={
    id:number
}
function Product({params}:{params:Promise< Params>}) {
    const router=useRouter()
    const[isClient,setIsclient]= useState(false)

    const {id}= React.use(params)
    const product=secProduct[id]
    useEffect(()=> {
        setIsclient(true)
    },[])
    if(!isClient) return null
    if(!product){
        router.replace('/not-fould')
        return null
    }
  return (
    <div className='fixed  top-0 bg-black/50  inset-0 m-auto w-screen h-screen z-10 flex items-center justify-center '>
        <div className='flex p-4 px-8 rounded-md backdrop-blur-3xl w-fit  h-fit flex-col items-center  justify-center bg-white/50 '>
          <div className='w-full relative py-4 '>
            <RxCross2 onClick={()=> router.back()} className='absolute cursor-pointer top-0 -right-5 w-7 h-7 bg-red-700 text-white rounded-full'/>
          </div>
            <div className='' onClick={()=>  window.location.href = `/product/${id}`}>
                <Image  src={product.image} alt="" width={200} height={200} className='rounded-md  w-60 sm:w-80' />
            </div>
            <div className="mt-4 backdrop-blur-2xl px-4 w-full rounded-md flex flex-col gap-2 font-semibold  h-full object-cover">
                              <h2 className='overflow-x-clip'>{product.title} </h2>
                              <div className="flex gap-2">
                                {product.discount > 0 && (
                                  <p>
                                    {(product.price - (product.price * product.discount) / 100).toFixed(2)}{" "}
                                  </p>
                                )}
                                <p
                                  className={` ${
                                    product.discount > 0 ? "line-through text-[#DB4444]" : ""
                                  }`}
                                >
                                  ${product.price}{" "}
                                </p>
                              </div>
            
                              <div className="flex items-center gap-1 ">
                                {Array.from({ length: 5 }).map((_, index) => (
                                  <div key={index}>
                                    <GiStaryu
                                      className={`${
                                        index <= product.NumStar ? "text-yellow-500" : ""
                                      }`}
                                    />
                                  </div>
                                ))}
                                <span className="ml-1">({product.NumStar}) </span>
                              </div>
                            </div>
        </div>
    </div>
  )
}

export default Product