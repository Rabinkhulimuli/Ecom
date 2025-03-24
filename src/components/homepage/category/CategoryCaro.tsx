"use client";
import { homeCategory } from "@/config/category";
import useEmblaCarousel from "embla-carousel-react";
import React, { useCallback, useEffect, useState } from "react";
import { RxDoubleArrowLeft, RxDoubleArrowRight } from "react-icons/rx";

function CategoryCaro() {
  const [alignEmb, setAlignEmb] = useState<"start" | "center">("start");
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: alignEmb,
    containScroll: "keepSnaps",
    dragFree: true,
    skipSnaps: false,
  });
  const prevbtn = useCallback(() => {
    if (emblaApi && emblaApi.canScrollPrev()) {
      emblaApi.scrollPrev();
    }
  }, [emblaApi]);

  const nextbtn = useCallback(() => {
    if (emblaApi && emblaApi.canScrollNext()) {
      emblaApi.scrollNext();
    }
  }, [emblaApi]);
  useEffect(() => {
    const handleWid = () =>
      setAlignEmb(window.innerWidth < 500 ? "center" : "start");
    handleWid();
    window.addEventListener("resize", handleWid);
    return () => window.removeEventListener("resize", handleWid);
  }, []);
  return (
    <div className="relative w-full">
      <div className="absolute  m-auto flex justify-end  gap-2 -top-12 md:-top-26 right-0">
        <button
          onClick={nextbtn}
          className="p-2 bg-gray-100 rounded-full flex  items-center "
        >
          <RxDoubleArrowLeft className="md:text-2xl  " />
        </button>
        <button
          onClick={prevbtn}
          className="p-2 bg-gray-100 rounded-full flex items-center "
        >
          <RxDoubleArrowRight className="md:text-2xl" />
        </button>
      </div>
      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex ">
          {homeCategory.map((eh) => (
            <div
              key={eh.id}
              className="flex-shrink-0  w-43 h-36 mr-8 flex flex-col border items-center  bg-white text-black hover:bg-[#DB4444] hover:text-white justify-center "
            >
              <div className="flex flex-col items-center justify-between gap-4">
                <eh.icon className="text-6xl" />
                <p className="text-lg font-semibold">{eh.name} </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CategoryCaro;
