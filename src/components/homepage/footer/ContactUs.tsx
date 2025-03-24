import React from "react";
import { FaAt } from "react-icons/fa";

function ContactUs() {
  return (
    <div className="flex flex-col items-center lg:items-start gap-2">
      <div className="flex lg:flex-col items-center lg:items-start gap-1">
        <FaAt className="text-xl" />
        <p className="text-lg font-semibold">ContactUs</p>
      </div>
      <p>xeron@gmail.com</p>
      <button className="button-b-white w-fit">Chat with us</button>
    </div>
  );
}

export default ContactUs;
