import React from "react";
import Link from "next/link";
import PensionStatisticsLeft from "./PensionStatisticsLeft";
import PensionStatisticsRight from "./PensionStatisticsRight";
import Button_Clear from "../Buttons/Button_Dark";

const PensionStatistics = () => {
  return (
    <section className="p-4 md:p-0">
      <div className="flex items-center justify-around flex-col md:flex-row py-8 md:py-28 gap-4 md:gap-0 bg-[#F8F8FA]">
        <PensionStatisticsLeft />
        <PensionStatisticsRight />
      </div>

      <div className="bg-[#F4F2F0] py-9 text-center my-8">
        <h2 className="text-4xl">
          Forget Traditional Pension <br />
          Invest in <span className="text-[#0B7A38]">Bitcoin!</span>
        </h2>
        <div className="mt-6">
        <Link href="/signup">
          <Button_Clear text="Buy Now" />
        </Link>
      </div>
      </div>
    </section>
  );
};

export default PensionStatistics;
