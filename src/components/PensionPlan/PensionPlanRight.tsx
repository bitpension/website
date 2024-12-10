import React from "react";
import Image from "next/image";
import Link from "next/link";
import Employees from "../../../public/employees.svg";
import Tick from "../../../public/tick.svg";
import Button_Clear from "../Buttons/Button_Dark";

const PensionPlanRight = () => {
  return (
    <div>
      <div className="py-20 md:py-0 w-full md:w-[322px]">
        <div className="relative">
          <div className="absolute right-5 -top-20">
            <Image src={Employees} alt="Employees Icon" />
          </div>
          <p className="text-3xl leading-10 mb-4">
          Not Satisfied with Your<br /> Current Pension Plan? <br />Bitpension Has You Covered!
          </p>
        </div>

        <section className="flex flex-col gap-6">
          <div className="flex items-start justify-start gap-4">
              <Image src={Tick} alt="Tick Icon" />
              <p className="text-[#454444] text-lg leading-7">
                Forget Pension and Piggy savings. Take advantage of Bitcoin long term price movements.
              </p>
          </div>
          <div className="flex items-start justify-start gap-4">
              <Image src={Tick} alt="Tick Icon" />
              <p className="text-[#454444] text-lg leading-7">
                Invest as low as{" "}
                <span className="underline text-[#0B7A38]">$10</span> of your
                income in Bitcoin every
                month and profit on the long term. Start with an
              initial deposit of{" "}
                <span className="underline text-[#0B7A38]">$1,000</span>.
              </p>
          </div>
        </section>

        <div className="mt-6">
          <Link href="/signup">
            <Button_Clear text="Get Started" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PensionPlanRight;
