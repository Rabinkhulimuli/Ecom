"use client";
import React, {  useCallback, useEffect, useMemo, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { carouselArray } from "@/config/carouselRight";
import Autoplay, { AutoplayType } from "embla-carousel-autoplay";
import RightContent from "./RigthContent";

function Rightfirst() {
  const [activeSlide, setActiveSlide] = useState(0);
  
  const[isAutoplay,setIsAutoplay]= useState<AutoplayType|null>(null)


  
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
     loop:true,
     dragFree:false,
     slidesToScroll:1,
    },
    [Autoplay({stopOnMouseEnter:false,delay:4000})]
  );
  
  
  const arr =useMemo(()=> Array.from({length: 5 }),[]) 
  useEffect(()=> {
    if(!emblaApi) return
    const autoplay= emblaApi.plugins().autoplay
    if(!autoplay)  return
      setIsAutoplay(autoplay)
    
  },[emblaApi])
const handleinteraction = useCallback(()=> {
    if(isAutoplay?.isPlaying())  return 
    isAutoplay?.stop()
    setTimeout(()=> {
      isAutoplay?.play()
    },3000)
},[isAutoplay])

useEffect(()=> {
  if(!isAutoplay || !emblaApi) return
  emblaApi.on("pointerDown",handleinteraction)
  emblaApi.on("select",handleinteraction)
  return ()=> {
    emblaApi.off("pointerDown",handleinteraction)
    emblaApi.off("select",handleinteraction)
  }
},[isAutoplay,emblaApi,handleinteraction])
 useEffect(() => {
    if (!emblaApi) return;
    
    const logslidesInView = () => {
      setActiveSlide(emblaApi.selectedScrollSnap());
    };
    emblaApi.on("select", logslidesInView);
    return () => {
      emblaApi.off("select", logslidesInView);
    };
  }, [emblaApi]);
  const onDotClicked = (index: number) => {
    if (!emblaApi) return;
    emblaApi.scrollTo(index);
  }; 
  return (
    <div className="">
      <div className="relative cursor-pointer">
      <div className="relative ">
      <div ref={emblaRef} className="overflow-hidden touch-pan-y">
        <div className="flex">
          {carouselArray.map((eh) => (
           <div key={eh.id} className="flex-shrink-0 w-full">
             <RightContent ehv={eh}  />
           </div>
          ))}
        </div>
      </div>
      
    </div>
   
    </div>
    <div className="relative">
    <div className="absolute -top-6  h-fit mx-auto inset-0  flex items-end  justify-center gap-0.5 md:gap-2">
        {arr.map((_, index) => (
          <div
            key={index}
            onClick={() => onDotClicked(index)}
            className={`w-3 h-3 md:w-4 md:h-4    rounded-full transition-all duration-300 ease-in-out ${index == activeSlide ? "bg-gray-700 border-white border-1 " : "bg-white"}`}
          >
            {" "}
          </div>
        ))}
      </div>
    </div>
    </div>
    
  );
}

export default Rightfirst;
