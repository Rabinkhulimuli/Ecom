"use client"
import React, { useEffect, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { GiSelfLove } from "react-icons/gi";
import { CiSearch } from "react-icons/ci";
import Movlayout from "./Movlayout";
import Image from "next/image";
import * as motion from "motion/react-client"
import {useScroll, useTransform} from "framer-motion"
import Link from "next/link";
import { useSession } from "next-auth/react";
import ProfileDropdown from "./header/ProfileDropdown";
import Notification from "../cart/Notification";
function Layout() {
  const[active,setActive]=useState(false)
  const {scrollYProgress}= useScroll()
  const scale=useTransform(scrollYProgress,[0,0.5],[1,0.1])
  const opacity=useTransform(scrollYProgress,[0,0.6],[1,0])
  const backgroundColor=useTransform(scrollYProgress,[0,0.1],["#0000","#fc0388"])
  const {data:session,status}=useSession()
  const handleDropdown=()=> {
    setActive(!active)
  }
  useEffect(()=> {
    if(active){
      setTimeout(()=> {
        setActive(false)
      },60000)
    }
  },[active])
  return (
    <div className="">
      <div className="flex my-1 sm:my-4  items-center justify-between text-lg">
        <div className="flex items-center justify-between xl:gap-40 2xl:gap-48 ">
          <div className="relative w-14 ">
            <Link href="/" className="  ">
            <div className=" m-auto absolute w-30 md:w-36 h-18 -top-11 md:-top-10 left-3 md:left-4">
            <Image className="" src="/companyProducts/company-sub.png" alt="" width={100} height={100}  />
           
           </div>
            </Link>
           
           <motion.div
           initial={{scale:1}}
           whileTap={{scale:1.5}}
           style={{scale,opacity,backgroundColor}}
           className="fixed top-12 md:top-15 md:left-32 w-9 h-9 md:w-11 md:h-11 z-10 rounded-full ">
            <Image src="/companyProducts/com-logo.png"  alt="" width={44} height={44}  />
           
           </motion.div>
           
          </div>
          <div className="hidden xl:flex items-center  justify-between gap-12">
            <div>
              <Link href="/" className="hidden lg:block">Home</Link>
            </div>
            <div>
              <h2 className="hidden lg:block">Contact</h2>
            </div>
            <div>
              <h2 className="hidden lg:block">About</h2>
            </div>
            {status!=="authenticated"&& <div>
              <Link href="/signup" className="hidden lg:block text-nowrap">Sign Up</Link>
            </div>}
          </div>
        </div>
        <div className="flex items-center justify-between gap-6">
          <div className=" hidden sm:flex items-center px-5 py-1 justify-between bg-gray-50">
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
          <div className="hidden xl:flex items-center justify-between gap-4">
            <Link href="/wishlist"  >
              <GiSelfLove className="w-8 h-8" />
            </Link>
            <Link href="/cart" className="relative">
              <FaShoppingCart className="w-8 h-8" />
              <div className="absolute -top-1 -right-1">
              <Notification/>
              </div>
              
            </Link>
            <div className="relative">
              <div>
              {(session?.user?.image&&<Image onClick={handleDropdown} className="rounded-full cursor-pointer" src={`${session?.user?.image}`} alt="" width={32} height={32} />)}
              </div>
              <div className={`absolute top-12 z-1 right-0 transition-all duration-900 ease-in-out ${active?"scale-100 opacity-100":"scale-0 opacity-0"}`} >
                <ProfileDropdown/>
              </div>
            </div>
          </div>
        </div>
        <div className="block xl:hidden">
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
