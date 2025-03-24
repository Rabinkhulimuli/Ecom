import { categoryArray } from "@/config/category";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";

export default function Leftfirst() {
  return (
    <div className=" md:mr-4 lg:mr-10">
      <h2 className="text-2xl sm:hidden font-semibold mb-6 text-center w-full bg-blue-900/10 px-1 shadow-lg rounded-sm">
        Our Collections
      </h2>
      <div className=" ">
        {categoryArray.map((eh, index) => (
          <p
            key={index}
            className="link-style2 capitalize text-nowrap  sm:max-w-50 w-full "
          >
            {" "}
            {eh}
            {index == 0 || index == 1 ? <IoIosArrowForward /> : ""}{" "}
          </p>
        ))}
      </div>
    </div>
  );
}
