"use client";
import { CgProfile } from "react-icons/cg";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { GiSelfLove } from "react-icons/gi";
import { MdOutlineLogin } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { TbMenu2 } from "react-icons/tb";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import LogOut from "../login/logout";
function Movlayout() {
  const [active, setActive] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const user= useSelector((state:RootState)=> state.user.user)
  useEffect(() => {
    if (active) {
      if (videoRef.current) {
        videoRef.current.currentTime = 0;
        videoRef.current.play();
      }
    } else {
      videoRef?.current?.pause();
    }
  }, [active]);
  useEffect(() => {
    const video = videoRef.current;
    if (!video) {
      return;
    }
    const handleCanplaythrough = () => {
      setVideoLoaded(true);
    };
    video.addEventListener("canplaythrough", handleCanplaythrough);
    return () =>
      video.removeEventListener("canplaythrough", handleCanplaythrough);
  });
  const handleMenu = () => {
    setActive(!active);
  };

  return (
    <div className={`relative w-full `}>
      <div onClick={handleMenu} className={``}>
        <TbMenu2 className="w-8 h-8" />
      </div>
      <div
        className={`fixed  max-w-[50%] ${!videoLoaded ? "bg-white border-l-black border-l-4 " : "bg-transparent border-l-transparent border-l-0 "}  z-50 w-full mx-auto text-[#ffa500] transition-transform ease-in-out  duration-800 ${
          active ? "translate-x-0" : "translate-x-full "
        } top-0 right-0 flex flex-col gap-4 items-center justify-start text-lg  h-screen  `}
      >
        <div className={`relative `}>
          <video
            ref={videoRef}
            className={`fixed top-0 right-0 w-full h-full object-cover
          } `}
            playsInline
            preload="auto"
            muted
          >
            <source src="/nav/vid1.mp4" type="video/mp4" />
          </video>
        </div>
        <div className=" w-full absolute top-2 z-1">
          <div className=" w-full h-68 sm:h-78  animate-pulse  ">
            <Image
              className=" pl-6 w-full h-full object-contain  backdrop-blur-lg  backdrop-hue-rotate-15"
              src="/companyProducts/company-main.png"
              alt="company logo"
              width={800}
              height={400}
            />
          </div>
        </div>

        <div className="absolute inset-0 m-auto z-30 ">
          <div
            style={{ scrollbarWidth: "none" }}
            className={`h-12 overflow-hidden text-nowrap delay-300 text-sm md:text-2xl text-center pt-3 md:pt-1 font-semibold shadow-2xl transition-all duration-900 delay-50 ease-in-out ${
              active
                ? "translate-y-0 bg-black opacity-100 "
                : "-translate-y-full bg-white opacity-0"
            }`}
          >
            Wellcome to Xprive.com{" "}
          </div>
          <div className="flex items-center justify-end px-2 md:px-5">
            <button
              onClick={handleMenu}
              className="cursor-pointer  pt-4  md:py-7 pr-1 md:pr-4"
            >
              <span className="relative flex">
                <RxCross2 className="w-6 h-6 md:w-8 md:h-8 relative backdrop-blur-3xl border-blue-700 inline-flex text-white border-2 rounded-full " />{" "}
              </span>
            </button>
          </div>
          <div className="absolute sm:relative top-28 sm:top-7 flex flex-col md:flex-row items-center md:pl-20 w-full  px-2 md:px-4 ">
            <div className="flex flex-col  w-full items-end justify-between  gap-2 md:gap-4 px-1 md:px-0 md:pr-5">
              <Link href="/wishlist" onClick={handleMenu} className="">
                <GiSelfLove className="w-6 h-6 md:w-8 md:h-8 " />
              </Link>
              <Link href="/cart" onClick={handleMenu}>
                <FaShoppingCart className="w-6 h-6 md:w-8 md:h-8 " />
              </Link>
              <div>
                {user ? (
                  user?.image ? (
                    <div className="flex flex-col items-center gap-2 md:gap-4">
                      <Link href="/account/myaccount" onClick={handleMenu}>
                      <Image
                        className="rounded-full w-6 h-6 md:w-8 md:h-8 "
                        src={`${user?.image}`}
                        alt=""
                        width={20}
                        height={20}
                      />
                    </Link>
                    <div onClick={handleMenu}>
                      <LogOut/>
                    </div>
                    
                    </div>
                  ) : (
                    <CgProfile className="w-6 h-6 md:w-8 md:h-8 " />
                  )
                ) : (
                  <Link href="/signup" onClick={handleMenu}>
                    <MdOutlineLogin className="w-6 h-6 md:w-8 md:h-8 " />{" "}
                  </Link>
                )}
              </div>
            </div>
          </div>
          <div className="w-full text-center mt-38 sm:mt-24">
            <p className="text-xl flex flex-col backdrop-blur-sm md:text-2xl font-semibold mb-4  ">
              <span className="">{user?.name || "Next Xen Appo"}</span>
              <span className="text-xs">{user?.email} </span>
            </p>
            <hr />
          </div>
          <div className="flex flex-col justify-start  w-full px-2 md:px-12">
            <Link
              href="/"
              onClick={handleMenu}
              className="text-lg md:text-xl transition-all duration-700 cursor-pointer font-semibold hover:text-gray-900 ease-in-out  hover:bg-gray-200 px-2 py-1 w-full"
            >
              Home
            </Link>
            <Link
              href="/contact"
              onClick={handleMenu}
              className="text-lg md:text-xl transition-all duration-700 cursor-pointer font-semibold hover:text-gray-900 ease-in-out  hover:bg-gray-200 px-2 py-1 w-full"
            >
              Contact
            </Link>
            <Link
              href="/about"
              onClick={handleMenu}
              className="text-lg md:text-xl transition-all duration-700 cursor-pointer font-semibold hover:text-gray-900 ease-in-out  hover:bg-gray-200 px-2 py-1 w-full"
            >
              About
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Movlayout;
