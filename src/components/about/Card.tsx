"use client";
import React, { useCallback } from "react";
import CardModel from "./CardModel";
import useEmblaCarousel from "embla-carousel-react";

function Card() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    watchDrag: true,
  });

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  return (
    <div className=" relative">
      {/* Embla Carousel Container */}
      <div className="overflow-hidden w-full" ref={emblaRef}>
        <div className="flex  ">
          {/* Cards inside Embla Carousel */}
          {Array.from("aa").map((_, index) => (
            <div key={index} className="flex-shrink-0 mx-auto w-full">
              <div className=" mx-auto flex justify-center sm:gap-2 items-center w-full md:w-fit">
                {[
                  {
                    name: "Zoro",
                    rank: "Managing Director",
                    image: "/anime/zoro.jpg",
                  },
                  {
                    name: "Boa Hancock",
                    rank: "Co-founder",
                    image: "/anime/boa.jpg",
                  },
                  { name: "Luffy", rank: "Chairman", image: "/anime/lufy.jpg" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="w-full pr-1 md:min-w-[150px] lg:min-w-[250px]  h-full "
                  >
                    <CardModel
                      name={item.name}
                      rank={item.rank}
                      image={item.image}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="absolute bottom-4 lg:-bottom-4 left-1/2 transform -translate-x-1/2 flex gap-4">
        <button
          onClick={scrollPrev}
          disabled={!emblaApi?.canScrollPrev()}
          className={`px-4 py-2 rounded ${
            emblaApi?.canScrollPrev() ? "bg-gray-800 text-white" : "bg-gray-400"
          }`}
        >
          Prev
        </button>
        <button
          onClick={scrollNext}
          disabled={!emblaApi?.canScrollNext()}
          className={`px-4 py-2 rounded ${
            emblaApi?.canScrollNext() ? "bg-gray-800 text-white" : "bg-gray-400"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Card;
