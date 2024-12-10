import React from "react";
import Image from "next/image";
import { presshome } from "../Data/PressHome";

const BitPensionPressHomeRight = () => {
  return (
    <div>
      <div className="flex gap-4 items-center rounded-xl flex-col md:flex-row">
        {presshome.map((presshome, index) => (
          <div
            key={index}
            className="
            shadow-sm hover:shadow-md transition-shadow bg-[#F8F8FA] md:w-[380px] "
          >
            <Image
              src={presshome.image}
              alt={`Logo of ${presshome.image}`}
              width={380}
              height={168}
              className="object-cover rounded-tl-xl rounded-tr-xl w-full"
            />

            <div className="p-4 md:p-10">
            <div className="flex items-center justify-center gap-4 bg-[#0B7A380D] rounded-full py-2 px-4 md:px-8 md:py-4 w-[111px]">
              <Image src={presshome.icon} alt={presshome.title}
              width={20}
              height={20}/>
              <p className="text-base text-[#0B7A38] font-semibold">{presshome.iconText}</p>
            </div>

            <h2 className="text-xl md:text-3xl font-semibold my-4">{presshome.title}</h2>
            <p className="text-[#7C7C7C] text-lg">{presshome.text}</p>

            <h4 className="text-sm font-bold mt-12">{presshome.date}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BitPensionPressHomeRight;
