import Link from "next/link";
import Marquee from "react-fast-marquee";
import Leftfirst from "../first/Leftfirst";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
function TopAds() {
  const[show,setShow]=useState(50)
  const[isInside,setIsInside]=useState(false)
  useEffect(()=> {
    const handleShow=(event:MouseEvent)=> {
      if(!isInside){
      let posit=  event.clientY *100/window.innerHeight -20
        posit=Math.max(0,Math.min(posit,80))
        setShow(posit)
      }
      
    }
    document.addEventListener("mousemove",handleShow)
    return ()=> document.removeEventListener("mousemove",handleShow)
  },[isInside])
  const pathname=usePathname()
  return (
    <div className="flex relative justify-end items-center px-8 h-12 md:px-33 bg-black text-white">
      <div className="flex gap-2 sm:gap-6  lg:gap-57 items-center">
        <div className="text-sm capitalize text-nowrap max-w-[270px] sm:max-w-[450px] flex items-center gap-2">
          <Marquee speed={40} pauseOnHover={true}>
            {" "}
            <p>
              summer sale for all swims suits and free express delivery -OFF
              50%! <span className="w-4 px-1"></span>{" "}
            </p>
          </Marquee>{" "}
          <Link href="/" className="underline text-xs sm:text-sm font-semibold">
            shop now
          </Link>
        </div>
        <select
          className="text-xs md:text-sm outline-none"
          name="lang"
          id="lang"
        >
          <option value="english">English</option>
        </select>
      </div>
      <div className="group lg:hidden ">
        <div className="w-6 group-hover:w-12  fixed h-[87%]  top-12 left-0 group"></div>
        {pathname==="/" &&  <div style={{top:`${show}%`}} className={` fixed  text-black transition-all duration-700 ease-in-out -translate-x-80 opacity-0 group-hover:opacity-100 group-hover:translate-x-0  z-20 px-6 py-8 bg-white rounded-sm  left-10 `}
        onMouseEnter={()=> setIsInside(true)}
        onMouseLeave={()=> setIsInside(false)}
        >
          <h2 className="text-2xl font-semibold mb-6 text-center w-full bg-blue-900/10 px-1 shadow-lg rounded-sm">Our Collections</h2>
          <Leftfirst />
        </div>}
     {/*    <div className="absolute w-fit top-24 left-8  text-black z-20">
          <div onClick={()=> setCategory(!category)}>
          <IoGridOutline className="w-6 h-6" />
          </div>
        <div className={` bg-white transition-all duration-700 ease-in-out ${category?"scale-100 opacity-100":"scale-0 opacity-0"}`}>
        <h2 className="text-2xl font-semibold mb-6 text-center w-full bg-blue-900/10 px-1 shadow-lg rounded-sm">Our Collections</h2>
        <Leftfirst />
        </div>
        </div> */}
      </div>
    </div>
  );
}

export default TopAds;
