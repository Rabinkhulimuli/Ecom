import React from "react";
import TopBestSelling from "./TopBestSelling";
import { secProduct } from "@/config/carouselRight";
import Image from "next/image";
import { TiHeartOutline } from "react-icons/ti";
import { GiBleedingEye, GiStaryu } from "react-icons/gi";

function ProductList() {
  return (
    <div className="space-y-4 md:space-y-15">
      <TopBestSelling />
      <div className="grid grid-cols-2 lg:grid-cols-4  justify-between gap-4">
        {secProduct.slice(0, 4).map((eh) => (
          <div
            key={eh.id}
            className="border-white border-4 flex-shrink-0  w-full group"
          >
            <div className="relative flex py-10 w-full px-4 sm:px-0 overflow-hidden justify-center bg-gray-100">
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
                <p>{(eh.price - (eh.price * eh.discount) / 100).toFixed(2)} </p>
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
  );
}

export default ProductList;
