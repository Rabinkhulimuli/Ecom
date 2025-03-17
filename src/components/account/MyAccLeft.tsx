
import React from "react";

function MyAccLeft() {
  return (
    <div className=" flex  gap-3 lg:flex-col lg:gap-4 justify-between lg:justify-start w-full ">
      <div className="w-full  flex flex-col gap-1 sm:gap-2">
        <p
          className="font-semibold tracking-tight text-sm sm:text-lg text-nowrap capitalize w-full"
        >
          Manage account
        </p>
        <div className=" drop-down ">
          <p className="hover:text-[#DB4444] cursor-pointer">My profile</p>
          <p className="hover:text-[#DB4444] cursor-pointer">address book</p>
          <p className="hover:text-[#DB4444] cursor-pointer">payment options</p>
        </div>
      </div>
      <div className="w-full  flex flex-col gap-1 sm:gap-2  ">
        <p
          className="font-semibold cursor-pointer text-sm sm:text-lg capitalize "
        >
          my orders
        </p>
        <div className=" drop-down">
          <p className="hover:text-[#DB4444] cursor-pointer">My returns</p>
          <p className="hover:text-[#DB4444] cursor-pointer">cancellations</p>
        </div>
      </div>
      <div className="w-full  flex flex-col gap-1 sm:gap-2  ">
        <p
          className="font-semibold cursor-pointer text-sm sm:text-lg capitalize "
        >
          My wishlist
        </p>
        <div className="drop-down">
          <p className="hover:text-[#DB4444] cursor-pointer">Saved items</p>
          <p className="hover:text-[#DB4444] cursor-pointer">Recently viewed</p>
          <p className="hover:text-[#DB4444] cursor-pointer">
            price drop alerts
          </p>
        </div>
      </div>
    </div>
  );
}

export default MyAccLeft;
