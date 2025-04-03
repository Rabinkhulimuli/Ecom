import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";
import { FaApple } from "react-icons/fa";

interface RightContentProps {
    ehv: {
      id: number;
      name: string;
      des: string;
      image: string;
    };
  }
const  RightContent:React.FC<RightContentProps>= ({ehv})=> {

    return(<>
        <div
              key={ehv.id}
              className=" touch-manipulation bg-black max-h-86 h-full  lg:h-86 flex  items-center pl-2 w-full  justify-between"
            >
              <div>
              <div className="text-white space-y-1 md:space-y-6 md:my-18 ml-1 ">
                  <div className="flex  items-center gap-3 md:gap-6">
                    <FaApple className="w-4 h-6  sm:w-10 sm:h-12 " />
                    <p className=" tracking-tight">{ehv.name} </p>
                  </div>
                  <p className="text-xs  md:text-3xl xl:text-4xl max-w-76">
                    {ehv.des}
                  </p>
                  <div className="group cursor-pointer">
                    <div className="flex items-center gap-3">
                      <p className="text-sm md:text-lg font-semibold">
                        Shop Now{" "}
                      </p>
                      <BsArrowRight className="w-5 h-5 md:w-6 md:h-6" />
                    </div>
                    <hr className="w-0 mx-0.5 rounded-lg bg-white transition-all duration-300 group-hover:w-18" />
                  </div>
                </div>
              </div>
              <div className="max-w-40 max-h-62 sm:max-w-124  sm:max-h-86 lg:max-w-80 lg:max-h-60  ">
                  <Image
                    className="w-full h-full object-cover"
                    src={ehv.image}
                    alt={ehv.name}
                    width={1024}
                    height={720}
                  />
                </div>
            </div>
    </>)
}
export default RightContent
/* 

import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";
import { FaApple } from "react-icons/fa";

interface RightContentProps {
    ehv: {
      id: number;
      name: string;
      des: string;
      image: string;
    };
  }
const  RightContent:React.FC<RightContentProps>= ({ehv})=> {

    return(<>
        <div
              key={ehv.id}
              className=" touch-manipulation bg-black max-h-86 h-full lg:h-86 flex  items-center pl-2 justify-between"
            >
              <div className="flex items-center justify-between  h-full">
                <div className="text-white space-y-1 md:space-y-6 md:my-18 ml-1 sm:ml-4 lg:ml-16">
                  <div className="flex  items-center gap-3 md:gap-6">
                    <FaApple className="w-4 h-6  sm:w-10 sm:h-12 " />
                    <p className=" tracking-tight">{ehv.name} </p>
                  </div>
                  <p className="text-xs  md:text-3xl lg:text-5xl max-w-76">
                    {ehv.des}
                  </p>
                  <div className="group cursor-pointer">
                    <div className="flex items-center gap-3">
                      <p className="text-sm md:text-lg font-semibold">
                        Shop Now{" "}
                      </p>
                      <BsArrowRight className="w-5 h-5 md:w-6 md:h-6" />
                    </div>
                    <hr className="w-0 mx-0.5 rounded-lg bg-white transition-all duration-300 group-hover:w-18" />
                  </div>
                </div>
                <div className="max-w-40 sm:max-w-124 max-h-86  h-full">
                  <Image
                    className="w-full h-full object-cover"
                    src={ehv.image}
                    alt={ehv.name}
                    width={1024}
                    height={720}
                  />
                </div>
              </div>
            </div>
    </>)
}
export default RightContent

*/