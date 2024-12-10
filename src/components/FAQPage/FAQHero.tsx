import React from "react";
import Button_Dark from "../Buttons/Button_Dark";

const FAQHero = () => {
  return (
    <div className="bg-[#F8F8FA] my-4 p-8 md:px-24 md:py-20">
      <div>
        <h2 className="text-4xl font-semibold my-8">
          Top Questions About Bitpension
        </h2>
        <p className="text-[#7C7C7C] text-text-xl capitalize leading-8">
          We understand that saving Bitcoin for retirement might raise a few
          questions, and we’re here to provide
          <br /> clarity. Our FAQ section covers everything you need to know
          about BitPension, from how our platform
          <br />
          works to security measures, account setup, and more.
        </p>
      </div>

      <div className="flex items-center my-8">
        <input
          placeholder="Enter"
          className="bg-white text-[#7C7C7C] w-[300px] p-4 outline-none border-none"
        />

        <Button_Dark text="Search" />
      </div>
    </div>
  );
};

export default FAQHero;
