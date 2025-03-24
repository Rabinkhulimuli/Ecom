import Image from "next/image";
import React from "react";

function FirstAbout() {
  return (
    <div
      className={`flex flex-col lg:flex-row lg:items-center justify-between gap-19`}
    >
      <div className="flex flex-col lg:max-w-[40%] gap-6">
        <h2 className="text-5xl lg:text-4xl xl:text-5xl font-semibold">
          Our Story
        </h2>
        <p className="lg:text-sm xl:text-[16px] ">
          Born on February 5, 2025, Xprive is more than just an e-commerce
          platform; it’s a global journey where quality meets convenience. With
          a passion for excellence, we strive to deliver an extraordinary
          shopping experience to every corner of the world. From handpicked
          products to worldwide shipping, Xprive is here to make your shopping
          dreams a reality, no matter where you are.
        </p>
        <p className="lg:text-sm  xl:text-[16px]">
          Join us on this exciting journey as we continue to grow and innovate.
          At Xprive, your satisfaction is our priority, and we’re committed to
          delivering the best, always.
        </p>
      </div>
      <div className="w-full aspect-square ">
        <Image
          className="object-cover w-full h-full  bg-[#e2b5a0]"
          src="/nav/shopping.png"
          alt="shopping girl"
          width={830}
          height={600}
        />
      </div>
    </div>
  );
}

export default FirstAbout;
