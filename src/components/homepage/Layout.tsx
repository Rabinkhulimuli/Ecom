"use client";
import React, { useEffect, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { GiSelfLove } from "react-icons/gi";
import { CiSearch } from "react-icons/ci";
import Movlayout from "./Movlayout";
import Image from "next/image";
import { motion } from "framer-motion";
import { useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import ProfileDropdown from "./header/ProfileDropdown";
import Notification from "../cart/Notification";
import { usePathname } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import { CgProfile } from "react-icons/cg";

function Layout() {
  const [showNav, setShowNav] = useState(true);
  const [active, setActive] = useState(false);
  const { scrollYProgress } = useScroll();
  const user = useSelector((state:RootState)=> state.user.user)
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.1]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.1],
    ["#0000", "#fc0388"],
  );
  const handleDropdown = () => {
    setActive(!active);
  };
 
  useEffect(() => {
    if (active) {
      setTimeout(() => {
        setActive(false);
      }, 60000);
    }
  }, [active]);

  useEffect(() => {
    let lastScrollY = 0;
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }
      lastScrollY = window.scrollY <= 0 ? 0 : window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const pathname = usePathname();
  return (
    <div
      className={`sticky z-20 w-full py-2 border-b-1  transition-all duration-700 ease-in-out ${!showNav ? "opacity-0 invisible" : "opacity-100 visible"}  inset-0 top-0 bg-white h-fit`}
    >
      <div className="flex  items-center justify-between text-lg">
        <div className="flex items-center justify-between xl:gap-40 2xl:gap-48 ">
          <div className="relative w-14 ">
            <Link href="/" className="  ">
              <div className=" m-auto absolute w-30 md:w-36 h-18 -top-9  left-3 md:left-4">
                <Image
                  className=""
                  src="/companyProducts/company-sub.png"
                  alt=""
                 fill
                 sizes="100"
                />
              </div>
            </Link>

            {pathname === "/" ? (
              <div>
                <motion.div
                  initial={{ scale: 1 }}
                  whileTap={{ scale: 1.5 }}
                  style={{ scale, opacity, backgroundColor }}
                  className="fixed top-13 sm:top-14 md:top-14 md:left-32 w-9 h-9 md:w-11 md:h-11 z-10 rounded-full "
                >
                  <Image
                    src="/companyProducts/com-logo.png"
                    alt=""
                    width={44}
                    height={44}
                  />
                </motion.div>
                <div className="absolute -top-5 opacity-40 md:-left-1 w-9 h-9 md:w-11 md:h-11 z-10 rounded-full ">
                  <Image
                    src="/companyProducts/com-logo.png"
                    alt=""
                    width={44}
                    height={44}
                  />
                </div>
              </div>
            ) : (
              <div className="absolute -top-5.5  md:-left-1 w-9 h-9 md:w-11 md:h-11 z-10 rounded-full ">
                <Image
                  src="/companyProducts/com-logo.png"
                  alt=""
                  width={44}
                  height={44}
                />
              </div>
            )}
          </div>
          <div className="hidden xl:flex items-center  justify-between gap-12">
            <div>
              <Link href="/" className="hidden lg:block">
                Home
              </Link>
            </div>
            <div>
              <Link href="/contact" className="hidden lg:block">
                Contact
              </Link>
            </div>
            <div>
              <Link href="/about" className="hidden lg:block">
                About
              </Link>
            </div>
            {user===null && (
              <div>
                <Link href="/signup" className="hidden lg:block text-nowrap">
                  Sign Up
                </Link>
              </div>
            )} 
             
          </div>
        </div>
        <div className="flex items-center justify-between  gap-6">
          <div className=" hidden sm:flex items-center px-2 py-1 justify-between bg-gray-50">
            <input
              className="text-lg px-3"
              type="text"
              name="search"
              placeholder="What are you lookin for ?"
            />
            <div>
              <CiSearch className="w-6 h-6 hidden lg:block" />
            </div>
          </div>
          <div className="hidden xl:flex items-center justify-between gap-4">
            <Link href="/wishlist">
              <GiSelfLove className="w-8 h-8" />
            </Link>
            <Link href="/cart" className="relative">
              <FaShoppingCart className="w-8 h-8" />
              <div className="absolute -top-1 -right-1">
                <Notification />
              </div>
            </Link>
            <div className="relative ">
               <div>
                {user!==null && (user?.image ? (
                  <Image
                    onClick={handleDropdown}
                    className="rounded-full cursor-pointer"
                    src={`${user?.image}`}
                    alt=""
                    width={32}
                    height={32}
                  />
                ):<CgProfile  onClick={handleDropdown}
                className="rounded-full cursor-pointer w-8 h-8 "   />)}
              </div> 
              <div
                className={`absolute top-12 z-1 right-0 transition-all duration-900 ease-in-out ${
                  active ? "scale-100 opacity-100" : "scale-0 opacity-0"
                }`}
              >
                <ProfileDropdown setActive={setActive} />
              </div>
            </div>
          </div>
          <div className="block xl:hidden">
          <Movlayout />
        </div>
        </div>
        
      </div>
      
    </div>
  );
}

export default Layout;
