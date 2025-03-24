"use client";
import React, { useState, useEffect } from "react";

function CarolTop() {
  const [distance, setDistance] = useState(0);
  useEffect(() => {
    const countdownDate = new Date("Jan 5, 2030 15:37:25").getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distances = countdownDate - now;
      setDistance(distances);
      if (distances < 0) {
        clearInterval(timer);
        return;
      }
    }, 1000);

    return () => clearInterval(timer); // Cleanup interval on unmount
  }, []); // Empty dependency array ensures it runs only once
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  return (
    <div className="category-2outer-div">
      <div className="category-outer-div">
        <div className="flex items-center gap-2">
          <span className=" w-2 md:w-5  h-8 md:h-10 bg-[#DB4444] "></span>
          <span className="font-semibold text-[#DB4444]">Today&apos;s</span>
        </div>
        <p className="category-p">Flash Sales</p>
      </div>
      <div className="flex items-end gap-1 md:gap-4">
        <div className="font-semibold">
          <p>Days</p>
          <p className="text-lg md:text-3xl font-bold">{days} </p>
        </div>
        <span className="text-2xl md:text-4xl">:</span>
        <div>
          <p className="font-semibold">Hrs</p>
          <p className="text-lg md:text-3xl font-bold">
            {" "}
            {hours < 10 ? `0${hours}` : `${hours}`}{" "}
          </p>
        </div>
        <span className="text-2xl md:text-4xl">:</span>
        <div>
          <p className="font-semibold">Min</p>
          <p className="text-lg md:text-3xl font-bold">
            {minutes < 10 ? `0${minutes}` : `${minutes}`}{" "}
          </p>
        </div>
        <span className="text-2xl md:text-4xl">:</span>
        <div>
          <p className="font-semibold">Sec </p>
          <p className="text-lg md:text-3xl font-bold">
            {seconds < 10 ? `0${seconds}` : `${seconds}`}{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default CarolTop;
