import React from "react";
import BitPensionPressHomeLeft from "./BitPensionPressHomeLeft";
import BitPensionPressHomeRight from "./BitPensionPressHomeRight";

const BitPensionPressHome = () => {
  return (
    <div className="flex items-center justify-around gap-8 md:gap-0 flex-col md:flex-row px-4 md:p-0">
      <BitPensionPressHomeLeft />
      <BitPensionPressHomeRight />
    </div>
  );
};

export default BitPensionPressHome;
