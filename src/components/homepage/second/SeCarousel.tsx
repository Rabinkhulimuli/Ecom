"use client";
import { secProduct } from "@/config/carouselRight";
import useEmblaCarousel from "embla-carousel-react";
import { TiHeartOutline } from "react-icons/ti";
import Image from "next/image";
import React, { useCallback, useEffect, useState } from "react";
import AutoPlay from "embla-carousel-autoplay";
import { GiBleedingEye, GiStaryu } from "react-icons/gi";
import { RxDoubleArrowRight } from "react-icons/rx";

function SeCarousel() {
  const[alignCaro,setAlignCaro]=useState<"start"|"center">("start")
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align:alignCaro },
    [AutoPlay({stopOnInteraction:true,stopOnMouseEnter:true})]
  );
  useEffect(()=> {
    const updateAlignment=()=> {
      setAlignCaro(window.innerWidth <500?"center":"start")
    }
    updateAlignment()
    window.addEventListener("resize",updateAlignment)
    return ()=> window.removeEventListener("resize",updateAlignment)
  },[])
const scrollNext=useCallback(()=> emblaApi && emblaApi.scrollNext(),[emblaApi])
const scrollPrev=useCallback(()=> emblaApi && emblaApi.scrollPrev(),[emblaApi])
  return (
    <div className="relative">
      <div className="absolute inset-0 flex justify-end gap-2 items-start m-auto right-0 z-10 -top-10 md:-top-14" >
        <button
        onClick={scrollNext}
        className="bg-[#F5F5F5]  p-2 rounded-full flex items-center "
        >
          <RxDoubleArrowRight className=" w-full rotate-180 md:text-2xl" />
        </button>
        <button
        onClick={scrollPrev}
        className="bg-[#F5F5F5]  p-2 rounded-full flex items-center "
        >
          <RxDoubleArrowRight className=" w-full  md:text-2xl" />
        </button>
      </div>

      <div className="overflow-hidden w-full" ref={emblaRef}>
        <div className="flex ">
          {secProduct.map((eh) => (
            <div
              key={eh.id}
              className="border-white border-4 flex-shrink-0  min-w-67 group"
            >
              <div className="relative flex py-10 min-w-67 h-62 overflow-hidden justify-center bg-gray-100">
                <div className="max-w-43 max-h-38">
                  <Image
                    className="w-full h-full object-cover"
                    src={eh.image}
                    width={1024}
                    height={720}
                    alt={eh.title}
                    priority={true}
                  />
                </div>
                <div className="absolute transition-transform duration-700 ease-in-out opacity-0 cursor-pointer font-semibold capitalize  translate-y-10 group-hover:translate-y-0 group-hover:opacity-100  bottom-0 bg-black w-full py-1 text-white text-center">
                  Add to cart
                </div>
                <div className=" absolute  top-3 left-3 px-1 py-0.5 md:px-3 md:py-1 text-xs bg-[#DB4444] rounded-md text-white">
                  <p>-{eh.discount}% </p>
                </div>
                <div className="absolute right-2 top-2 cursor-pointer md:top-3 md:right-3">
                  <TiHeartOutline className=" w-6 h-6 md:w-8 md:h-8 bg-white p-1 rounded-full mb-1 md:mb-2 z-10" />
                  <GiBleedingEye className="w-6 h-6 md:w-8 md:h-8 bg-white p-1 rounded-full  z-10" />
                </div>
              </div>
              <div className="mt-4 flex flex-col gap-2 font-semibold ">
                <h2>{eh.title} </h2>
                <p className="text-[#DB4444]">${eh.price} </p>
                {eh.discount > 0 && (
                  <p>{(eh.price-(eh.price * eh.discount) / 100).toFixed(2)} </p>
                )}

                <div className="flex items-center gap-1 ">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <div key={index}>
                      <GiStaryu
                        className={`${
                          index <= eh.NumStar ? "text-yellow-500" : ""
                        }`}
                      />
                    </div>
                  ))}
                  <span className="ml-1">({eh.NumStar}) </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div
      className="flex items-center  justify-center"
      >
        <p
        className=" font-semibold text-white bg-[#DB4444] rounded-lg mt-10 lg:mt-16 px-6 lg:px-12 py-2 lg:py-4"
        >View All Products</p>
      </div>
    </div>
  );
}

export default SeCarousel;
