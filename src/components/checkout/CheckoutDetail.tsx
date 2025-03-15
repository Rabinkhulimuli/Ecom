import { secProduct } from "@/config/carouselRight";
import Image from "next/image";
import React from "react";

function CheckoutDetail() {
  return (
    <div className="w-full">
      <div>
        <div style={{scrollbarWidth:"thin",scrollbarColor:"#db4444 #f5f5f5"}} className="space-y-8 overflow-y-auto max-h-37  border-b-1 ">
            {secProduct.map((eh) => (
                        <div
                          className="flex gap-4 items-center justify-between lg:text-lg   max-h-14  rounded-sm"
                          key={eh.id}
                        >
                          <span className="">
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
                          <span>${eh.price} </span>
                        </div>
                      ))}
        </div>
        <div>
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
        <div className="space-y-8">
          <label
            htmlFor="bank"
            className="inline-flex w-full items-center justify-between"
          >
            <span className="flex items-center gap-2">
              <input
                type="radio"
                className="w-6 h-6 accent-[#db4444]"
                name="payment"
                id="bank"
                value="Bank"
              />
              <span>Bank</span>{" "}
            </span>
            <span>
              <Image src="/stripe/card.jpg" alt="" width={200} height={28} />{" "}
            </span>
          </label>
          <br />
          <span className="flex items-center gap-2">
            <input
              type="radio"
              className="w-6 h-6  accent-[#db4444]"
              name="payment"
              id="cashondelivery"
              value="cashondelivery"
            />
            <label htmlFor="cashondelivery">Cash On Delivery</label>
          </span>
          <div className="flex flex-col sm:flex-row gap-2  justify-between">
            <input
              type="text"
              placeholder="Coupon Code"
              className="border px-3 py-2 w-full rounded-md md:px-6 md:py-4"
            />
            <button className="px-3 sm:px-6 text-nowrap w-fit py-2 lg:py-4 border rounded-md font-semibold capitalize text-white bg-[#db4444]">
              Apply coupon
            </button>
          </div>
          <button className="px-3 sm:px-6 text-nowrap w-fit   py-2 lg:px-12 md:py-4 border rounded-md font-semibold capitalize text-white bg-[#db4444]">
              Place Order
            </button>
        </div>
      </div>
    </div>
  );
}

export default CheckoutDetail;
