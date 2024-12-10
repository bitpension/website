import React from "react";
import Image from "next/image";
import Link from "next/link";
import { bitpensioncoin } from "../Data/WhyBitcoin";
import Button_Yellow from "../Buttons/Button_Dark";
const BitChatRight = () => {
  return (
    <div className="px-4 md:px-14 md:w-[674px]">
      <div>
        <h1 className="text-3xl my-8 leading-10">
          Why{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FECA00] to-[#D19228]">
          Bitcoin -
          </span>
          <br />
          Better Asset Class
        </h1>
        <Link href="/signup">
          <Button_Yellow text="Buy Bitcoin" />
        </Link>
      </div>
      <div className="grid grid-cols-2 justify-center gap-4 pt-12">
        {bitpensioncoin.map((bitpensioncoin, index) => (
          <div
            key={index}
            className="rounded-lg 
            shadow-sm hover:shadow-md transition-shadow p-2 md:p-8"
          >
            <Image
              src={bitpensioncoin.icon}
              alt={`Logo of ${bitpensioncoin.icon}`}
              width={50}
              height={50}
              className="object-contain w-[30px]"
            />
            <h2 className="text-base md:text-2xl font-semibold py-4">
              {bitpensioncoin.title}
            </h2>
            <p className="text-sm md:text-lg text-[#7C7C7C]">
              {bitpensioncoin.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BitChatRight;
