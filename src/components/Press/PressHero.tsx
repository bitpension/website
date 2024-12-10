import React from "react";
import Image from "next/image";
import TC from "../../../public/tc.svg";
import PressImage1 from "../../../public/press1.png";
import PressImage2 from "../../../public/press2.png";
const PressHero = () => {
  return (
    <div>
      <h1 className="italic text-5xl my-4">
        The <span className="border-b-2 border-[#0B7A38]">Press</span>
      </h1>

      <section className="flex justify-center flex-col md:flex-row gap-8 my-12">


        <div className="flex flex-col md:flex-row">
          <Image src={PressImage1} alt="Press Image" className=" w-full rounded-tl-xl rounded-bl-xl" />

          <div className="p-4 md:p-10 bg-[#F4F2F0] rounded-tr-xl rounded br-xl  flex flex-col justify-center">

            <div className="flex items-center justify-center gap-4 bg-[#0B7A380D] rounded-full py-2 px-4 md:px-8 md:py-4 w-[111px]">
              <Image src={TC} alt="Icon" width={20} height={20} />
              <p className="text-base text-[#0B7A38] font-semibold">
                Techcabal
              </p>
            </div>

            <h2 className="text-xl md:text-5xl font-semibold my-4">
            BitPension Revolutionizes Retirement Planning with Bitcoin Savings
            </h2>
            <p className="text-[#7C7C7C] text-lg md:text-2xl">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been
            </p>

            <h4 className="text-sm md:text-lg font-bold mt-12">SEPT 20, 2024</h4>
          </div>
        </div>

        <div className="shadow-sm hover:shadow-md transition-shadow bg-[#FFFFFF] md:w-[380px]">
          <div className="overflow-hidden rounded-tl-xl rounded-tr-xl">
            <Image
              src={PressImage2}
              alt="Image"
              width={380}
              height={168}
              className="object-cover transform transition-transform duration-300 hover:scale-105"
            />
          </div>

          <div className="p-4 md:p-10">
            <div className="flex items-center justify-center gap-4 bg-[#0B7A380D] rounded-full py-2 px-4 md:px-8 md:py-4 w-[111px]">
              <Image src={TC} alt="Icon" width={20} height={20} />
              <p className="text-base text-[#0B7A38] font-semibold">
                Techcabal
              </p>
            </div>

            <h2 className="text-xl md:text-3xl font-semibold my-4">
              BitPension Revolutionizes Retirement
            </h2>
            <p className="text-[#7C7C7C] text-lg">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been
            </p>

            <h4 className="text-sm font-bold mt-12">SEPT 20, 2024</h4>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PressHero;
