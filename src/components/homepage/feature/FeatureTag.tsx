import * as motion from "motion/react-client";
import React from "react";
export type featureTagType = {
  title: string;
  desc: string;
};
function FeatureTag({ title, desc }: featureTagType) {
  return (
    <div className="opacity-95 bg-black/5">
      <h2 className=" tracking-tight text-xl font-semibold md:text-2xl">
        {title}{" "}
      </h2>
      <p className=" text-sm  max-w-60">{desc} </p>
      <div className="group w-fit">
        <motion.button
          whileHover={{ scale: 1.2 }}
          transition={{
            duration: 0.2,
            ease: "circInOut",
          }}
          className=" md:text-lg font-semibold w-fit  "
        >
          Shop Now
        </motion.button>
        <div className=" b-1  h-1 rounded-2xl transition-all duration-600 ease-in bg-black  w-0 group-hover:w-20 group-hover:bg-white"></div>
      </div>
    </div>
  );
}

export default FeatureTag;
