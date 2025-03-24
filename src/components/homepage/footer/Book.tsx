import React from "react";
import { LuArrowRight } from "react-icons/lu";
import { HiOutlineLocationMarker } from "react-icons/hi";
function Book() {
  return (
    <div className="flex justify-between flex-col gap-4  md:max-w-[250px]">
      <div className="flex flex-col gap-2">
        <div className="flex flex-col items-start gap-1">
          <HiOutlineLocationMarker className=" -rotate-45 text-2xl hidden lg:block " />
          <p className="text-lg font-semibold">
            Want to make sure we&apos;re the right fit?Book a discovery call!
          </p>
        </div>
        <p>Find how you can save more and get luxury items.forever.</p>
      </div>
      <div className="flex flex-col gap-2 ">
        <button className="button-o-c w-fit">
          <span>Book a call</span>
          <LuArrowRight className="text-xl" />
        </button>
        <button className="button-b-white w-fit">See our plans</button>
      </div>
    </div>
  );
}

export default Book;
