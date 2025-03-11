import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { GiSelfLove } from "react-icons/gi";
import { CiSearch } from "react-icons/ci";
import Movlayout from "./Movlayout";
function Layout() {
  return (
    <div className="  ">
      <div className="flex my-4  items-center justify-between text-lg">
        <div className="flex items-center justify-between lg:gap-48 ">
          <div className="font-bold text-2xl">
            <p>Exclusive</p>{" "}
          </div>
          <div className="hidden md:flex items-center  justify-between gap-12">
            <div>
              <h2 className="hidden lg:block">Home</h2>
            </div>
            <div>
              <h2 className="hidden lg:block">Contact</h2>
            </div>
            <div>
              <h2 className="hidden lg:block">About</h2>
            </div>
            <div>
              <h2 className="hidden lg:block">Sign Up</h2>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between gap-6">
          <div className=" hidden sm:flex items-center px-5 py-2 justify-between bg-gray-50">
            <input
              className="text-lg"
              type="text"
              name="search"
              placeholder="What are you lookin for ?"
            />
            <div>
              <CiSearch className="w-6 h-6 hidden lg:block" />
            </div>
          </div>
          <div className="hidden lg:flex items-center justify-between gap-4">
            <div>
              <GiSelfLove className="w-8 h-8" />
            </div>
            <div>
              <FaShoppingCart className="w-8 h-8" />
            </div>
          </div>
        </div>
        <div className="block lg:hidden">
          <Movlayout />
        </div>
      </div>
      <div>
        <hr className="text-gray-200 " />
      </div>
    </div>
  );
}

export default Layout;
