import React from "react";

function TopBestSelling() {
  return (
    <div className="flex justify-between items-end ">
      <div className="category-outer-div">
        <div className="flex items-center gap-2">
          <span className=" w-2 md:w-5  h-8 md:h-10 bg-[#DB4444] "></span>
          <span className="font-semibold text-[#DB4444]">This Month</span>
        </div>
        <div>
          <p className="category-p">Best Selling Product</p>
        </div>
      </div>
      <p className="category-btn">view all</p>
    </div>
  );
}

export default TopBestSelling;
