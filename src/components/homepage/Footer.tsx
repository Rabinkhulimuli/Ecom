import React from "react";
import Book from "./footer/Book";
import NavFooter from "./footer/NavFooter";
import LegalFooter from "./footer/LegalFooter";
import ContactUs from "./footer/ContactUs";
import Owner from "./footer/Owner";

function Footer() {
  return (
    <div className=" bg-black mt-12 md:mt-35 flex items-center justify-center w-full">
      <div className="relative px-12">
        <h2 className=" uppercase  absolute inset-0 m-auto   top-10   text-[3rem] md:top-4 tracking-tight text-center font-black md:text-[6rem] lg:text-[10rem] xl:text-[13rem] xl:tracking-wider p-0 bg-gradient-to-b from-black/80 to-transparent text-transparent bg-clip-text drop-shadow-[0px_-0.5px_0px_rgba(115,115,120,1)]">
          XPRIVE
        </h2>
        <div className="p-4 md:p-14 mt-22 md:mt-28 lg:mt-40 xl:mt-50   drop-shadow-[0px_-0.5px_0px_rgba(65,67,69,0.8)]  shadow-accent w-fit border-2 border-gray-700 rounded-2xl bg-[#16161a]">
          <div className="flex flex-col lg:flex-row gap-10 justify-between opacity-85 text-white ">
            <Book />
            <div className="flex  flex-col md:flex-row gap-8 justify-between md:justify-start">
              <NavFooter />
              <LegalFooter />
            </div>
            <div className="flex flex-col xl:flex-row gap-6 xl:gap-14 justify-between md:justify-start">
              <ContactUs />
              <Owner />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
