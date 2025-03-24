import React from "react";
import CompTop from "../CompTop";
import image1 from "../../../../public/homepage/feature/ffeature1.png";
import image2 from "../../../../public/homepage/feature/fearure22.png";
import image3 from "../../../../public/homepage/feature/feature3.png";
import image4 from "../../../../public/homepage/feature/feature4.png";
import FeatureTag from "./FeatureTag";
import Image from "next/image";
function Feature() {
  return (
    <div className="relative">
      <div>
        <CompTop title={"Featured"} desc={"New Arrival"} />
      </div>
      <div className="flex flex-col xl:flex-row gap-2 ">
        <div className="relative w-full  pl-4 py-12 flex items-end justify-end bg-black text-white">
          <div className="max-w-[500px]   ">
            <Image
              className="w-full h-full "
              src={image1}
              alt=""
              width={500}
              height={600}
            />
          </div>
          <div className="absolute space-y-2 md:space-y-4 bottom-8 left-8 ">
            <FeatureTag
              title={"playstation 5"}
              desc={"Black and white PS5 comming out on sale."}
            />
          </div>
        </div>
        <div className="flex w-full h-full flex-col gap-2">
          <div className="relative w-full h-full  pl-4 py-12 md:pr-24 flex items-end justify-end bg-black text-white">
            <div className="max-w-[250px]   ">
              <Image
                className="w-full h-full  "
                src={image2}
                alt=""
                width={500}
                height={600}
              />
            </div>
            <div className="absolute space-y-2 md:space-y-4 bottom-8 left-8 ">
              <FeatureTag
                title={"Women's collections"}
                desc={"Featured womens collections that give you another vibe."}
              />
            </div>
          </div>

          <div>
            <div className=" flex flex-col sm:flex-row gap-2">
              <div className="relative max-w-[570px] pl-4 py-12 flex items-end justify-end bg-black text-white">
                <div className="max-w-[500px]   ">
                  <Image
                    className="w-full h-full "
                    src={image3}
                    alt=""
                    width={500}
                    height={600}
                  />
                </div>
                <div className="absolute space-y-2 md:space-y-4 bottom-8 left-8 ">
                  <FeatureTag
                    title={"Speakers"}
                    desc={"Amazing wireless speakers."}
                  />
                </div>
              </div>
              <div className="relative max-w-[570px]  pl-4 py-12 flex  items-end justify-end bg-black text-white">
                <div className="max-w-[500px]   ">
                  <Image
                    className="w-full h-full "
                    src={image4}
                    alt=""
                    width={500}
                    height={600}
                  />
                </div>
                <div className="absolute space-y-2 md:space-y-4 bottom-8 left-8 ">
                  <FeatureTag
                    title={"Perfume"}
                    desc={"We sell best long lasting luxury perfume."}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feature;
