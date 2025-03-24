import Card from "@/components/about/Card";
import FirstAbout from "@/components/about/FirstAbout";
import IncomeTag from "@/components/about/IncomeTag";
import Options from "@/components/homepage/subfooter/Options";

import React from "react";

function Page() {
  return (
    <div className="space-y-10 md:space-y-35">
      <FirstAbout />
      <IncomeTag />
      <Card />
      <Options />
    </div>
  );
}

export default Page;
