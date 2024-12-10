import React from "react";
import Image from "next/image";
import Link from "next/link";
import Private from "../../../public/private_individual.svg";
import Tick from "../../../public/tick.svg";
import Button_Clear from "../Buttons/Button_Dark";

const PensionStatisticsLeft = () => {
  return (
    <div>
      <div className="w-full md:w-[322px]">
        <div className="px-2 pt-20 md:p-0">
          <div className="relative">
            <div className="absolute right-5 -top-20">
              <Image src={Private} alt="Private Icon" />
            </div>
            <p className="text-2xl md:text-3xl font-medium leading-10 mb-4">
              Self-Employed or An Entrepreneur? Take Control of Your Pension
              with Bitpension
            </p>
          </div>

          <section className="flex flex-col gap-6">
            <div className="flex items-start justify-start gap-4">
              <Image src={Tick} alt="Tick Icon" />
              <p className="text-[#454444] text-lg leading-7">
                Whether you are self-employed, an entrepreneur, or simply
                looking for a more flexible and innovative way to save for
                retirement
              </p>
            </div>

            <div className="flex items-start justify-start gap-4">
              <Image src={Tick} alt="Tick Icon" />
              <p className="text-[#454444] text-lg leading-7">
                Our expert team is here to serve sophisticated investors buying
                more than
                <span className="underline text-[#0B7A38]">$10,000</span>.
              </p>
            </div>
          </section>

          <div className="my-6">
            <Link href="/signup">
              <Button_Clear text="Get Started" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PensionStatisticsLeft;
