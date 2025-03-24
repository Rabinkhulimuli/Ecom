"use client";
import React, { useState } from "react";
import { GiStaryu } from "react-icons/gi";
import { CgMathMinus, CgMathPlus } from "react-icons/cg";
import { IoMdHeartEmpty } from "react-icons/io";
import { TbTruckDelivery } from "react-icons/tb";
import { LuRefreshCw } from "react-icons/lu";

function ProductDescription() {
  const [updateSize, setUpdateSize] = useState("m");
  const handleSide = (size: string) => {
    setUpdateSize(size);
  };
  return (
    <div className="space-y-5 sm:space-y-6 w-fit xl:w-full max-h-[600px]">
      <div className="space-y-3 sm:space-y-4">
        <div className=" space-y-1">
          <h2 className="text-xl sm:text-2xl font-semibold capitalize">
            havic
          </h2>
          <div className="flex gap-2 sm:gap-4 text-xs sm:text-sm capitalize">
            <div className="flex sm:gap-1  ">
              {Array.from({ length: 5 }).map((_, index) => (
                <div key={index}>
                  <GiStaryu />
                </div>
              ))}
            </div>
            <span className="opacity-70 ">(150 reviews) | </span>
            <span className="opacity-70 text-blue-500">In Stock</span>
          </div>
          <p className="text-xl sm:text-2xl">$192 </p>
        </div>
        <p className="text-xs sm:text-sm max-w-[370px] text-justify">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero
          perferendis eaque consectetur quia? Natus modi iusto reprehenderit
          totam perspiciatis, praesentium exercitationem quos culpa ipsam id
          quidem dolorem iure repellat sed?
        </p>
        <hr className="border-1" />
        <div className="flex items-center gap-2 ">
          <label htmlFor="color" className="pr-2 text-lg sm:text-xl">
            Colors:{" "}
          </label>
          <label className="relative cursor-pointer">
            <input
              type="radio"
              value="blue"
              id="blue"
              name="color"
              className="peer hidden"
            />
            <div className=" bg-blue-700 border-2 sm:border-4 border-blue-700  w-4 sm:w-5 h-4 sm:h-5 transition-all ease-in-out duration-500 peer-checked:border-white peer-checked:peer-checked:ring-2 peer-checked:ring-blue-700 rounded-full"></div>
          </label>
          <label className="relative cursor-pointer">
            <input
              type="radio"
              value="red"
              id="red"
              name="color"
              className="peer hidden"
            />
            <div className=" w-4 h-4 sm:w-5 sm:h-5 bg-red-700 rounded-full border-2 sm:border-4 transition-all ease-in-out duration-500 peer-checked:border-white border-red-700 peer-checked:ring-2 peer-checked:ring-red-700"></div>
          </label>
        </div>
        <div className="flex items-center gap-6">
          <p className=" text-lg sm:text-xl">Size:</p>
          <div className="flex items-center gap-4">
            <p
              className={`w-7 sm:w-8 h-7 text-sm sm:text-[16px] sm:h-8 border cursor-pointer flex items-center justify-center rounded-md uppercase transition-all ease-in-out duration-700 ${
                updateSize === "xs"
                  ? "bg-[#db4444] text-white"
                  : "bg-white text-black"
              }`}
              onClick={() => handleSide("xs")}
            >
              xs
            </p>
            <p
              className={`w-7 sm:w-8 h-7 text-sm sm:text-[16px] sm:h-8 border cursor-pointer flex items-center justify-center rounded-md uppercase transition-all ease-in-out duration-700 ${
                updateSize === "s"
                  ? "bg-[#db4444] text-white"
                  : "bg-white text-black"
              }`}
              onClick={() => handleSide("s")}
            >
              s
            </p>
            <p
              className={`w-7 sm:w-8 h-7 text-sm sm:text-[16px] sm:h-8 border cursor-pointer flex items-center justify-center rounded-md uppercase transition-all ease-in-out duration-700 ${
                updateSize === "m"
                  ? "bg-[#db4444] text-white"
                  : "bg-white text-black"
              }`}
              onClick={() => handleSide("m")}
            >
              m
            </p>
            <p
              className={`w-7 sm:w-8 h-7 text-sm sm:text-[16px] sm:h-8 border cursor-pointer flex items-center justify-center rounded-md uppercase transition-all ease-in-out duration-700 ${
                updateSize === "l"
                  ? "bg-[#db4444] text-white"
                  : "bg-white text-black"
              }`}
              onClick={() => handleSide("l")}
            >
              l
            </p>
            <p
              className={`w-7 sm:w-8 h-7 text-sm sm:text-[16px] sm:h-8 border cursor-pointer flex items-center justify-center rounded-md uppercase transition-all ease-in-out duration-700 ${
                updateSize === "xl"
                  ? "bg-[#db4444] text-white"
                  : "bg-white text-black"
              }`}
              onClick={() => handleSide("xl")}
            >
              xl
            </p>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="flex border w-fit rounded-md">
            <div className="">
              <CgMathMinus className="p-2 w-8 h-full sm:w-10 sm:h-11 cursor-pointer " />
            </div>
            <p className="w-14 h-full sm:w-18 sm:h-11 border flex items-center justify-center text-xl">
              2
            </p>
            <CgMathPlus className="p-2 w-8 h-full sm:w-10 sm:h-11  cursor-pointer bg-[#db4444] rounded-r-md text-white" />
          </div>
          <button className="px-4 sm:px-10 py-2 text-nowrap bg-[#db4444] cursor-pointer text-white rounded-md">
            Buy Now
          </button>
          <IoMdHeartEmpty className="w-8 sm:w-10 h-11  border cursor-pointer rounded-md" />
        </div>
      </div>
      <div className="border ">
        <div className="flex items-center gap-4 px-2 sm:px-4 py-4 sm:py-6">
          <TbTruckDelivery className="w-7 h-7 sm:w-10 sm:h-10" />
          <div className="space-y-2">
            <p className="capitalize ">free delivery</p>
            <p className="text-xs capitalize cursor-pointer underline">
              enter your postal code for delivery availability
            </p>
          </div>
        </div>
        <hr />
        <div className="flex items-center gap-4 px-2 py-4 sm:px-4 sm:py-6">
          <LuRefreshCw className="w-7 h-7 sm:w-10 sm:h-10" />
          <div className="space-y-2">
            <p className="capitalize ">return delivery</p>
            <p className="text-xs capitalize cursor-pointer underline">
              free 30 days delivery returns detail
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDescription;
