"use client";
import React, {  useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { carouselArray } from "@/config/carouselRight";
import { FaApple } from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";
import AutoPlay from "embla-carousel-autoplay";
import Image from "next/image";
function Rightfirst() {
  const[activeSlide,setActiveSlide]=useState(0)
  const [emblaRef,emblaApi] = useEmblaCarousel(
    {
      loop: true,
    },
    [AutoPlay({ stopOnInteraction: false })]
  );
 const arr=Array.from({length:5})
  useEffect(()=> {
    if(!emblaApi) return
    const logslidesInView=()=> {
      setActiveSlide(emblaApi.selectedScrollSnap())
    }
    emblaApi.on('select',logslidesInView)
    return ()=> {
      emblaApi.off("select",logslidesInView)
    }
  },[emblaApi])
  return (
    <div className="relative w-full h-fit overflow-hidden">
      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex w-full">
          {carouselArray.map((eh) => (
            <div
              key={eh.id}
              className="flex-shrink-0 w-full bg-black max-h-86 h-full lg:h-86 flex  items-center pl-2 justify-between"
            >
              <div className="flex  md:flex-row items-center justify-between w-full  h-full">
                <div
                className="text-white space-y-1 md:space-y-6 md:my-18 ml-1 sm:ml-4 lg:ml-16"
                >
                  <div
                  className="flex  items-center gap-3 md:gap-6"
                  >
                    <FaApple 
                    className="w-4 h-6  sm:w-10 sm:h-12 "
                    />
                    <p
                    className=" tracking-tight"
                    >{eh.name} </p>
                  </div>
                  <p
                  className="text-xs  md:text-3xl lg:text-5xl max-w-76"
                  >{eh.des}</p>
                  <div
                  className="group cursor-pointer"
                  >
                  <div
                  className="flex items-center gap-3"
                  >
                    <p
                    className="text-sm md:text-lg font-semibold"
                    >Shop Now </p>
                    <BsArrowRight
                    className="w-5 h-5 md:w-6 md:h-6"
                    />
                  </div>
                  <hr
                  className="w-0 mx-0.5 rounded-lg bg-white transition-all duration-300 group-hover:w-18"
                  />
                  </div>
                </div>
                <div className="max-w-40 sm:max-w-124 max-h-86 h-full">
                  <Image
                    className="w-full h-full object-cover"
                    src={eh.image}
                    alt={eh.name}
                    width={1024}
                    height={720}
                  />
                </div>

              </div>
              
            </div>
          ))}
        </div>
      </div>
      <div 
      className="absolute bottom-2 md:bottom-4 mx-auto inset-0  flex items-end  justify-center gap-0.5 md:gap-2"
      >
        {arr.map((_,index)=> <div key={index}
        className={`w-3 h-3 md:w-4 md:h-4    rounded-full transition-all duration-300 ease-in-out ${index == activeSlide?"bg-gray-700 border-white border-1 ":"bg-white"}`}
        > </div> )}
      </div>
    </div>
  );
}

export default Rightfirst;
