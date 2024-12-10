import React from "react";
import Link from "next/link";
import Image from "next/image";
import RightArrow from "../../../public/right_arrow.svg";
import Button_Dark from "../Buttons/Button_Dark";

const HeroIntro = () => {
  return (
    <div className="px-4 md:px-0 md:py-24">
      <div className="p-4 md:p-0 w-full md:w-[750px]">
        <p className="text=[#7C7C7C] italic text-lg py-4">
          Invest In Bitcoin With Long-Term Confidence.
        </p>
        <div>
          <h3 className="text-3xl md:text-5xl leading-10 md:leading-[62px]">
            Bitpension is The Best Place To{" "}
            <span className="text-[#0B7A38] border-[#0B7A38] border-l-4 border-r-4 px-2 bg-[#F4F2F0]">
              Buy Bitcoin
            </span>{" "}
            With 100% Full Reserve, Personalize Custody, And Zero Setup Fees.
          </h3>
        </div>

        <div className="flex items-center gap-2">
          <div className="block md:hidden py-8">
            <Button_Dark text="Buy Bitcoin Now!" />
          </div>
          <Link
            href="/signup"
            className="text-[#7C7C7C] text-lg underline py-4 hidden md:block"
          >
            Buy Bitcoin Now!
          </Link>
          <Image
            src={RightArrow}
            alt="Right Arrow Icon"
            className="hidden md:block"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroIntro;
