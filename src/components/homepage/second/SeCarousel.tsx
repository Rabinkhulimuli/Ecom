"use client";
import { secProduct } from "@/config/carouselRight";
import useEmblaCarousel from "embla-carousel-react";
import { TiHeartOutline } from "react-icons/ti";
import Image from "next/image";
import React, { useCallback, useEffect, useState } from "react";
import AutoPlay, {
  AutoplayOptionsType,
  AutoplayType,
} from "embla-carousel-autoplay";
import { GiBleedingEye, GiStaryu } from "react-icons/gi";
import CarolTop from "./CarolTop";
function SeCarousel() {
  const [alignCaro, setAlignCaro] = useState<"start" | "center">("start");
  const [isHovering, setIshovering] = useState(false);
  const [autoplay, setAutoplay] = useState<AutoplayType | null>(null);
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);
  const autoplayOptions: AutoplayOptionsType = {
    stopOnInteraction: false,
    delay: 3000,
  };
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: alignCaro, dragFree: false },
    [AutoPlay(autoplayOptions)]
  );
  // Store the autoplay plugin instance
  useEffect(() => {
    if (emblaApi) {
      const autoplayInstance = emblaApi.plugins().autoplay;
      if (autoplayInstance) {
        setAutoplay(autoplayInstance);
      }
    }
  }, [emblaApi]);

  const restartAutoplay = useCallback(() => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    const id = setTimeout(() => {
      if (autoplay && !isHovering) {
        autoplay.play();
      }
    }, 6000);
    setTimeoutId(id);
  }, [autoplay, isHovering, timeoutId]);

  const handleInteraction = useCallback(() => {
    if (autoplay) {
      autoplay.stop();
      restartAutoplay();
    }
  }, [autoplay, restartAutoplay]);

  useEffect(() => {
    if (!emblaApi) return;

    emblaApi.on("pointerDown", handleInteraction);
    emblaApi.on("select", handleInteraction);

    return () => {
      emblaApi.off("pointerDown", handleInteraction);
      emblaApi.off("select", handleInteraction);

      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [emblaApi, handleInteraction, timeoutId]);

  useEffect(() => {
    if (!autoplay) return;

    if (isHovering) {
      autoplay.stop();
    } else {
      autoplay.play();
    }
  }, [isHovering, autoplay]);

  useEffect(() => {
    const updateAlignment = () => {
      setAlignCaro(window.innerWidth < 500 ? "center" : "start");
    };
    updateAlignment();
    window.addEventListener("resize", updateAlignment);
    return () => window.removeEventListener("resize", updateAlignment);
  }, []);

  return (
    <div className="space-y-4 md:space-y-15">
      <CarolTop emblaApi={emblaApi} />
      <div className="relative">
        <div
          className="overflow-hidden w-full"
          ref={emblaRef}
          onMouseEnter={() => {
            setIshovering(true);
          }}
          onMouseLeave={() => setIshovering(false)}
        >
          <div className="flex  z-10">
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
                  <div className="absolute transition-transform duration-700 ease-in-out opacity-0 cursor-pointer font-semibold capitalize  translate-y-10 group-hover:-translate-y-2 group-hover:opacity-100  bottom-0 bg-black w-full py-2 text-white text-center">
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
                  <div className="flex gap-2">
                    {eh.discount > 0 && (
                      <p>
                        {(eh.price - (eh.price * eh.discount) / 100).toFixed(2)}{" "}
                      </p>
                    )}
                    <p
                      className={` ${
                        eh.discount > 0 ? "line-through text-[#DB4444]" : ""
                      }`}
                    >
                      ${eh.price}{" "}
                    </p>
                  </div>

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
        <div className="flex items-center  justify-center">
          <p className="category-btn mt-10 lg:mt-16">View All Products</p>
        </div>
      </div>
    </div>
  );
}

export default SeCarousel;
