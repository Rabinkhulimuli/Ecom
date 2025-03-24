import React from "react";
import { IconType } from "react-icons/lib";

function OptionMod({
  Icon,
  title,
  desc,
}: {
  Icon: IconType;
  title: string;
  desc: string;
}) {
  return (
    <div className="flex flex-col items-center w-fit gap-6">
      <div className="bg-gray-300 flex items-center justify-center lg:w-20 lg:h-20 w-12 h-12 rounded-full">
        <Icon className="lg:w-14 lg:h-14 w-10 h-10 rounded-full bg-[#2f2e30]  text-white p-1 " />
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="font-lg lg:text-xl uppercase font-semibold text-nowrap w-full text-center">
          {title}
        </h2>
        <p className="text-sm text-center w-full capitalize ">{desc} </p>
      </div>
    </div>
  );
}

export default OptionMod;
