import React from "react";
import Image from "next/image";
import Link from "next/link";
import Button_Clear from "../Buttons/Button_Clear";
import Business from "../../../public/business.svg";
import Tick from "../../../public/tick.svg";

const Holdings_Info = () => {
  return (
    <div className="w-full md:w-[322px]">
      <div className="relative">
        <div className="absolute right-5 -top-20">
          <Image src={Business} alt="Business Icon" />
        </div>
        <p className="text-3xl leading-10 mb-4">
          <span className="text-[#0B7A38]"> Bitpension:</span> Increase Your
          Employee Benefits With The Ultimate Long-Term Savings Platform.
        </p>
      </div>

      <section className="flex flex-col gap-6">
        <div className="flex items-start justify-start gap-4">
          <Image src={Tick} alt="Tick Icon" />
          <p className="text-[#454444] text-lg leading-7">
            Inflation is eating up your hard-earned balance. Adding Bitcoin to
            your balance sheet will position your business for long-term capital
            gains.
          </p>
        </div>

        <div className="flex items-start justify-start gap-4">
          <Image src={Tick} alt="Tick Icon" />
          <p className="text-[#454444] text-lg leading-7">
            <span className="text-[#0B7A38]"> Bitpension </span> Personalize
            Custody makes it easy for you to incorporate Bitcoin into your
            Financial Strategy.
          </p>
        </div>

        <div className="flex items-start justify-start gap-4">
          <Image src={Tick} alt="Tick Icon" />
          <p className="text-[#454444] text-lg leading-7">
            Securely Invest in Bitcoin on a recurring basis with Our Expert
            Guidance
          </p>
        </div>
      </section>

      <div className="mt-6">
        <Link href="/signup">
          <Button_Clear text="Get Started" />
        </Link>
      </div>
    </div>
  );
};

export default Holdings_Info;
