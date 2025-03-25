"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { SignIn } from "@/components/login/Login";
function Spage() {

  
  return (
    <div className="flex flex-col gap-8 xl:gap-32 lg:flex-row md:justify-between mt-8 md:mt-15">
      <div className="relative min-w-[200px] w-full min-h-[400px] max-w-[805px] max-h-[780px]">
        <Image
          className="w-full h-full object-cover"
          src="/signup/cart.png"
          alt=" cart"
          fill
          priority
        />
      </div>
      <div className="w-full flex items-center justify-center">
        <div className="flex flex-col gap-4 md:gap-6 xl:min-w-[370px] w-full ">
          <p className=" text-2xl md:text-4xl">Create an account </p>
          <p className=" md:text-lg">Enter your details below</p>
          <div className="flex flex-col gap-2 md:gap-4 md:mt-6">
            <form className="flex flex-col gap-6 md:gap-10  " action="">
              <input
                className="outline-none border-b-2 px-2 pb-2 text-lg focus:ring-2 focus:ring-blue-600 focus:rounded-md"
                type="text"
                placeholder="Name"
                name="name"
              />
              <input
                className="outline-none border-b-2 px-2 pb-2 text-lg focus:ring-2 focus:ring-blue-600 focus:rounded-md"
                type="text"
                placeholder="Email or Phone Number"
                name="email"
              />
              <input
                className="outline-none border-b-2 px-2 pb-2 text-lg focus:ring-2 focus:ring-blue-600 focus:rounded-md"
                type="password"
                placeholder="Password"
                name="password"
              />
              <button className="text-lg py-2 md:py-4 cursor-pointer w-full bg-[#DB4444] text-white">
                Create Account
              </button>
            </form>
            <div className="flex flex-col">
              <SignIn />

              <p className="w-full text-center py-6 md:py-8 md:text-lg rounded-sm">
                <span className="opacity-70">Already have account? </span>{" "}
                <Link className="ml-2 underline" href="/login">
                  LogIn
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Spage;
