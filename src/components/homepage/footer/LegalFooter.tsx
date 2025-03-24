import React from "react";
import { MdOutlinePrivacyTip } from "react-icons/md";

function LegalFooter() {
  return (
    <div className="flex flex-col items-center lg:items-start gap-2">
      <div className="flex lg:flex-col items-center lg:items-start gap-1">
        <MdOutlinePrivacyTip className="text-2xl" />
        <p className="text-lg font-semibold text-nowrap">Legal Info</p>
      </div>
      <p className="text-center lg:text-start">Terms & Conditions</p>
      <p>Privacy Policy</p>
    </div>
  );
}

export default LegalFooter;
