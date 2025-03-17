"use client";
import { useSession } from "next-auth/react";
import { CgProfile } from "react-icons/cg";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { GiSelfLove } from "react-icons/gi";
import { MdOutlineLogin } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { TbMenu2 } from "react-icons/tb";
function Movlayout() {
  const [active, setActive] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const { data: session, status } = useSession();
  const[videoLoaded,setVideoLoaded]=useState(false)
  useEffect(() => {
    if (active) {
      if (videoRef.current) {
        videoRef.current.currentTime = 0;
        videoRef.current.play();
      }
    }else{
      videoRef?.current?.pause()
    }
  }, [active]);
  const handleMenu = () => {
    console.log("clicked");
    setActive(!active);
  };
  return (
    <div className="relative w-full   ">
      <div onClick={handleMenu} className={``}>
        <TbMenu2 className="w-8 h-8" />
      </div>
      <div
        className={`fixed  max-w-[50%] ${videoLoaded?"bg-white border-l-black border-l-4 ":"bg-transparent border-l-transparent border-l-0 "}  z-50 w-full mx-auto text-[#ffa500] transition-transform ease-in-out  duration-800 ${
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
            muted={true}
            onLoadedData={()=> setVideoLoaded(true)}
          >
            <source src="/nav/vid1.mp4" type="video/mp4" />
          </video> 
        </div>
        <div className=" w-full absolute top-2 z-1">
          <div className=" w-full h-68 sm:h-78   ">
            <Image
              className=" pl-6 w-full h-full object-contain  backdrop-blur-xs backdrop-hue-rotate-15"
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
            className={`h-12 overflow-x-hidden text-nowrap text-sm md:text-2xl text-center pt-3 md:pt-1 font-semibold shadow-2xl transition-all duration-900 delay-50 ease-in-out ${
              active ? "w-[100%] bg-black" : "w-[0%] bg-white"
            }`}
          >
            Wellcome to Xprive.com{" "}
          </div>
          <div className="flex items-center justify-end px-2 md:px-5">
            <button
              onClick={handleMenu}
              className="cursor-pointer  pt-4  md:py-7 pr-1 md:pr-4"
            >
              <span className="relative flex size-6 ">
                <RxCross2 className="md:w-6 md:h-6 relative size-6 inline-flex text-white " />{" "}
                <span className="absolute inline-flex h-full   w-full animate-ping rounded-full bg-[#ce1c60] "></span>
              </span>
            </button>
          </div>
          <div className="absolute sm:relative top-28 sm:top-7 flex flex-col md:flex-row items-center md:pl-20 w-full  px-2 md:px-4 ">
            <div className="flex flex-col  w-full items-end justify-between  gap-2 md:gap-4 px-1 md:px-0 md:pr-5">
              <Link href="/wishlist" className="">
                <GiSelfLove className="w-6 h-6 md:w-8 md:h-8 " />
              </Link>
              <Link href="/cart">
                <FaShoppingCart className="w-6 h-6 md:w-8 md:h-8 " />
              </Link>
              <div>
                {status === "authenticated" ? (
                  session?.user?.image ? (
                    <Link href="/account/myaccount">
                      <Image
                        className="rounded-full w-6 h-6 md:w-8 md:h-8 "
                        src={`${session?.user?.image}`}
                        alt=""
                        width={20}
                        height={20}
                      />
                    </Link>
                  ) : (
                    <CgProfile className="w-6 h-6 md:w-8 md:h-8 " />
                  )
                ) : (
                  <Link href="/signup">
                    <MdOutlineLogin className="w-6 h-6 md:w-8 md:h-8 " />{" "}
                  </Link>
                )}
              </div>
            </div>
          </div>
          <div className="w-full text-center mt-38 sm:mt-24">
            <p className="text-xl flex flex-col backdrop-blur-sm md:text-2xl font-semibold mb-4  ">
              <span className="">{session?.user?.name || "Next Xen Appo"}</span>
              <span className="text-xs">{session?.user?.email} </span>
            </p>
            <hr />
          </div>
          <div className="flex flex-col justify-start  w-full px-2 md:px-12">
            <Link
              href="/"
              className="text-lg md:text-xl transition-all duration-700 cursor-pointer font-semibold hover:text-gray-900 ease-in-out  hover:bg-gray-200 px-2 py-1 w-full"
            >
              Home
            </Link>
            <h3 className="text-lg md:text-xl transition-all duration-700 cursor-pointer font-semibold hover:text-gray-900 ease-in-out  hover:bg-gray-200 px-2 py-1 w-full">
              Contact
            </h3>
            <Link href="/about" className="text-lg md:text-xl transition-all duration-700 cursor-pointer font-semibold hover:text-gray-900 ease-in-out  hover:bg-gray-200 px-2 py-1 w-full">
              About
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Movlayout;
