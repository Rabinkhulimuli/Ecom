import LeftContact from "@/components/contact/LeftContact";
import RightContact from "@/components/contact/RightContact";
import React from "react";

function Page() {
  return (
    <div className="">
      <h2 className="mb-2 sm:mb-10 xl:mb-20">Home / Contact</h2>
      <div className="flex flex-col items-center justify-center lg:flex-row xl:gap-8">
        <LeftContact />
        <RightContact />
      </div>
    </div>
  );
}

export default Page;
