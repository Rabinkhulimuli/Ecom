import CompTop from '@/components/homepage/CompTop'
import { secProduct } from '@/config/carouselRight'
import Image from 'next/image'
import React from 'react'
import { IoMdHeartEmpty } from 'react-icons/io'
import { IoCartOutline } from 'react-icons/io5'

function RelatedProduct() {
  return (
    <div className='w-full'>
      <div className="flex items-center justify-between">
        <CompTop title={"Related Items"} desc={""} />
        
      </div>
      <div className="grid w-full grid-cols-2 md:grid-cols-3  lg:grid-cols-4 gap-2 lg:gap-y-14 items-center justify-between">
        {secProduct.slice(0, 4).map((eh) => (
          <div
            className="relative flex flex-col items-center max-w-[270px] max-h-[330px] border"
            key={eh.id}
          >
            <div className=" px-10 py-4">
              <Image
                className="w-full h-full object-cover"
                src={eh.image}
                alt={eh.title}
                width={180}
                height={130}
              />
            </div>
            <div className="w-full bg-black flex gap-1 items-center justify-center ">
              <IoCartOutline className="text-white sm:w-6 sm:h-6 " />
              <button className=" text-xs sm:text-sm cursor-pointer font-semibold capitalize   py-2 text-white ">
                Add to cart
              </button>
            </div>
            <div className="mt-4 text-sm sm:text-[16px] flex w-full  flex-col gap-2 font-semibold pr-2">
              <p className="overflow-y-hidden h-6">{eh.title}</p>

              <p>
                <span>
                  ${(eh.price - (eh.discount * eh.price) / 100).toFixed(2)}{" "}
                </span>{" "}
                {eh.discount > 0 && (
                  <span className="line-through opacity-50">
                    ${eh.price.toFixed(2)}
                  </span>
                )}
              </p>
            </div>
            <div
              className={` absolute inset-0 m-x-auto flex   h-fit ${
                eh.discount === 0 ? "justify-end" : "justify-between"
              }  top-1 lg:top-3  px-1 py-0.5 lg:px-3 md:py-1 `}
            >
              <p
                className={`discount-text ${
                  eh.discount === 0 ? "hidden" : "block"
                }`}
              >
                {eh.discount === 0 ? "" : `-${eh.discount}%`}
              </p>
              <IoMdHeartEmpty className="md:w-4.5 md:h-4.5 lg:w-6 lg:h-6" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RelatedProduct
