import { secProduct } from "@/config/carouselRight";
import Image from "next/image";
import React from "react";
import { IoCartOutline } from "react-icons/io5";
import { RiDeleteBin5Line } from "react-icons/ri";
function Wishlist() {
  return (
    <div className=" space-y-10 sm:space-y-15">
      <div className="flex justify-between items-center">
        <p className="text-lg md:text-xl flex w-fit items-center">
          <span>Wishlist <span className="text-sm">(4)</span>

          </span>
        </p>
        <p className="border text-sm md:text-lg w-fit px-4 py-2 md:px-12 md:py-4 rounded-sm">Move All To Bag</p>
      </div>
      <div className=" grid   lg:gap-y-6 gap-1 sm:gap-2 grid-cols-2 sm:grid-cols-3 justify-between lg:grid-cols-4">
        {secProduct.map((eh) => (
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
              <button className="text-xs sm:text-sm md:text-[16px]   cursor-pointer font-semibold capitalize   py-2 text-white ">
                Add to cart
              </button>
             
            </div>
            <div className="mt-4 flex w-full text-sm sm:text-[16px]  flex-col gap-2 font-semibold pr-2">
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
            <div className={` absolute inset-0 m-x-auto flex   h-fit ${eh.discount === 0?"justify-end": "justify-between"}  top-1 sm:top-3  px-1 py-0.5 md:px-3 md:py-1 `}>
              <p className={`discount-text ${eh.discount === 0?"hidden": "block"}`}>
               {eh.discount === 0?"": `-${eh.discount}%`}
              </p>
              <RiDeleteBin5Line className=" md:w-4.5 md:h-4.5 lg:w-6 lg:h-6" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Wishlist;
