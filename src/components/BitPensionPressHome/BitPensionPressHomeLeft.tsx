import React from "react";
import Image from "next/image";
import Link from "next/link";
import LatestNews from "../../../public/latest_news.svg";
import ButtonClear from "../Buttons/Button_Clear";

const BitPensionPressHomeLeft = () => {
  return (
    <div>
      <div className="flex items-end justify-end md:block">
        <Image src={LatestNews} alt="Latest News" />
      </div>
      <div>
        <h2 className="font-semibold text-3xl italic py-6">
          In The <span className="text-[#0B7A38]">Press</span>
        </h2>
        <p className="text-[#7C7C7C] text-lg capitalize">
          We could talk about this stuff all day, but you <br />
          should not just take our word for it. Here is what the
          <br /> press has to say about Bitpension.
        </p>
      </div>

      <div className="py-6">
        <Link href="/press">
          <ButtonClear text="Check More" />
        </Link>
      </div>
    </div>
  );
};

export default BitPensionPressHomeLeft;
