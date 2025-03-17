import React from "react";
import { CiShop } from "react-icons/ci";
import OptionMod from "../homepage/subfooter/OptionMod";
import { HiOutlineCurrencyDollar } from "react-icons/hi2";
import { BsBagHeart } from "react-icons/bs";
import { FaSackDollar } from "react-icons/fa6";

function IncomeTag() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 items-center justify-between gap-2 md:gap-8">
      <div className="border px-1 md:px-12 rounded-md py-4 md:py-8 flex items-center justify-center transition-all duration-700 ease-in-out hover:border-white hover:bg-[#DB4444] cursor-pointer ">
        <OptionMod title="10.5K" Icon={CiShop} desc="seller active our site" />
      </div>
      <div className="border px-1 md:px-12 rounded-md py-4 md:py-8 flex items-center justify-center transition-all duration-700 ease-in-out hover:border-white hover:bg-[#DB4444] cursor-pointer ">
        <OptionMod
          title="33k"
          Icon={HiOutlineCurrencyDollar}
          desc="monthly product sale"
        />
      </div>
      <div className="border px-1 md:px-12 rounded-md py-4 md:py-8 flex items-center justify-center transition-all duration-700 ease-in-out hover:border-white hover:bg-[#DB4444] cursor-pointer ">
        <OptionMod
          title="45.5k"
          Icon={BsBagHeart}
          desc="customer active in out site"
        />
      </div>
      <div className="border px-1 md:px-12 rounded-md py-4 md:py-8 flex items-center justify-center transition-all duration-700 ease-in-out hover:border-white hover:bg-[#DB4444] cursor-pointer ">
        <OptionMod
          title="25k"
          Icon={FaSackDollar}
          desc="Anual gross sale in our site"
        />
      </div>
    </div>
  );
}

export default IncomeTag;
