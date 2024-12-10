import React from "react";
import Image from "next/image";
import Analysis from "../../../public/analysis.svg";

const PensionStatisticsRight = () => {
  return (
    <div className="bg-white p-8">
      <h2 className="text-[#7C7C7C] text-lg italic pb-24">
        Bitcoin is outperforming all asset classes since 2010
      </h2>

      <div >
        <Image src={Analysis} alt="Analysis" />
      </div>
    </div>
  );
};

export default PensionStatisticsRight;
