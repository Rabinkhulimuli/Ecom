"use client";
import React, { useCallback, useEffect } from "react";
import OurTop from "./OurTop";
import { secProduct } from "@/config/carouselRight";
import { GiBleedingEye, GiStaryu } from "react-icons/gi";
import { TiHeartOutline } from "react-icons/ti";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import AutoPlay from "embla-carousel-autoplay";
import { RxDoubleArrowRight } from "react-icons/rx";
function Ourproduct() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start" },
    [AutoPlay({ stopOnMouseEnter: true })],
  );
  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.plugins()?.autoplay?.stop(); // Stop autoplay initially
    emblaApi.on("init", () => {
      emblaApi.plugins()?.autoplay?.play(); // Start autoplay only after init
    });
  }, [emblaApi]);
  const scrollNext = useCallback(() => {
    if (emblaApi?.canScrollNext()) {
      return emblaApi && emblaApi.scrollNext();
    }
  }, [emblaApi]);
  const scrollPrev = useCallback(() => {
    if (emblaApi?.canScrollPrev()) {
      return emblaApi && emblaApi.scrollPrev();
    }
  }, [emblaApi]);
  return (
    <div>
      <OurTop />
      <div className="relative w-full h-full ">
        <div className="absolute inset-0 flex justify-end gap-2 items-start m-auto right-0 z-10 -top-10 md:-top-14">
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
        <div ref={emblaRef} className="overflow-hidden overscroll-contain">
          <div className="flex ">
            {Array.from({ length: Math.ceil(secProduct.length / 2) }).map(
              (_, index) => (
                <div key={index} className="flex-shrink-0 max-w-[325px] w-full">
                  <div className="grid grid-rows-2 lg:justify-between  gap-8 lg:gap-14">
                    {secProduct.slice(index * 2, index * 2 + 2).map((eh) => (
                      <div
                        key={eh.id}
                        className="border-white border-4 flex-shrink-0  min-w-67 "
                      >
                        <div className="relative group flex py-10 min-w-67 h-62 overflow-hidden justify-center bg-gray-100">
                          <div className="max-w-43 max-h-38">
                            <Image
                              className="w-full h-full object-cover"
                              src={eh.image}
                              width={300}
                              height={200}
                              alt={eh.title}
                              priority={index < 2}
                              loading="eager"
                            />
                          </div>
                          <div className="absolute transition-all duration-700 ease-in-out opacity-0 cursor-pointer font-semibold capitalize  translate-y-10 group-hover:translate-y-0 group-hover:opacity-100  bottom-0 bg-black w-full py-2 text-white text-center">
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
                            <p>
                              {(
                                eh.price -
                                (eh.price * eh.discount) / 100
                              ).toFixed(2)}{" "}
                            </p>
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
              ),
            )}
          </div>
        </div>
        <div className="flex items-center justify-center">
          <p className="category-btn w-fit mt-10 lg:mt-16">View All Products</p>
        </div>
      </div>
    </div>
  );
}

export default Ourproduct;
