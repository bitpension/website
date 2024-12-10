import React from "react";
import Holdings_Info from "./Holdings_Info";
import Holdings_Logos from "./Holdings_Logos";

const Holdings = () => {
  return (
    <div className="flex items-center justify-around flex-col gap-8 py-20 md:gap-0 md:flex-row p-4 md:py-28 bg-[#F8F8FA]">
      <Holdings_Info />
      <Holdings_Logos />
    </div>
  );
};

export default Holdings;