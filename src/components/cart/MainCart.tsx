"use client";
import { secProduct } from "@/config/carouselRight";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";

function MainCart() {
  const pathname = usePathname();
  const router = useRouter();
  const [quantity, setQuantity] = useState("0");
  return (
    <div className="space-y-16 md:space-y-20">
      <p className="capitalize">Home / {pathname.replace("/", "")} </p>
      <div className="space-y-10">
        <div className="grid grid-cols-6 lg:grid-cols-4 items-center justify-between font-semibold text-sm sm:text-lg px-3 lg:px-10 py-2 lg:py-6 shadow-md rounded-sm">
          <p className="col-span-3 lg:col-span-1">Product</p>
          <p>Price</p>
          <p>Quant</p>
          <p className="leading-4 text-end sm:text-start">Sub total</p>
        </div>
        <div className="space-y-10">
          {secProduct.map((eh) => (
            <div
              className="grid grid-cols-6 lg:grid-cols-4 gap-4 items-center justify-between lg:text-lg px-3 lg:px-10 py-2 lg:py-6 shadow-md rounded-sm"
              key={eh.id}
            >
              <span className="col-span-3 lg:col-span-1">
                {" "}
                <span className="flex items-center">
                  <span className="max-w-14 max-h-14">
                    <Image
                      className="w-full h-full"
                      src={eh.image}
                      alt=""
                      width={100}
                      height={100}
                    />
                  </span>
                  <span
                    style={{ scrollbarWidth: "none" }}
                    className="text-sm overflow-y-auto max-h-12 leading-4  lg:max-h-25 md:text-[16px] pl-2 lg:pl-5 "
                  >
                    {eh.title}{" "}
                  </span>
                </span>{" "}
              </span>
              <span>{eh.price} </span>
              <span>
                <input
                  className="w-4 sm:w-10"
                  type="number"
                  onChange={(event) => setQuantity(event?.target.value)}
                  value={quantity}
                />{" "}
              </span>
              <span>$1000</span>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-between mt-4 md:mt-6">
        <button className="px-3 sm:px-6 py-2 lg:px-12 lg:py-4 border rounded-md font-semibold capitalize">
          Return to shop
        </button>
        <button className="px-3 sm:px-6 py-2 lg:px-12 lg:py-4 border rounded-md font-semibold capitalize">
          Update Cart
        </button>
      </div>
      <div className="flex items-center justify-center ">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-4">
          <div className="flex flex-col sm:flex-row gap-2 md:items-center justify-between">
            <input
              type="text"
              placeholder="Coupon Code"
              className="border px-3 py-2 md:px-6 md:py-4"
            />
            <button className="px-3 sm:px-6 text-nowrap py-2 lg:px-12 lg:py-4 border rounded-md font-semibold capitalize text-white bg-[#db4444]">
              Apply coupon
            </button>
          </div>
          <div className="flex max-w-118 w-full flex-col border-2 rounded-md px-4 md:px-6 py-6 md:py-8 items-center  justify-center">
            <div className="w-full">
              <p className="text-lg  font-semibold capitalize">Cart total</p>
              <p className=" flex items-center justify-between border-b-2 capitalize py-4">
                <span>subtotal</span> <span> $1750</span>{" "}
              </p>
              <p className=" flex items-center justify-between border-b-2 capitalize py-4">
                <span>shipping</span> <span> free</span>{" "}
              </p>
              <p className=" flex items-center justify-between  capitalize py-4">
                <span>total</span> <span> $1750</span>{" "}
              </p>
            </div>
            <button
              onClick={() =>
                router.push("/account/myaccount/product/viewcart/checkout")
              }
              className="cursor-pointer px-3  sm:px-6 py-2 lg:px-12 lg:py-4 border rounded-md font-semibold capitalize text-white bg-[#db4444]"
            >
              proceed to checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainCart;
