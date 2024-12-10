import React from "react";
import Image from "next/image";
import Link from "next/link";
import SinglepressHero from "../../../public/singlepress.png"
import SinglepressHeroMobile from "../../../public/singlepressMobile.png"
import TC from "../../../public/tc.png";
import TCMobile from "../../../public/tcMobile.png";
import Facebook from "../../../public/facebook.svg";
import X from "../../../public/X.svg";
import Instagram from "../../../public/instagram.svg";
import LinkedIn from "../../../public/linkedIn.svg";
import { press } from "../../components/Data/Press";

interface PressItem {
  id: number;
  image: string;
  icon: string;
  iconText: string;
  title: string;
  text: string;
  date: string;
  fullText: string;
}

interface Props {
  params: {
    id: string;
  };
}

const SinglePressHero: React.FC<Props> = ({ params }) => {
  const { id } = params;

  // Find the press item based on the id from the URL
  const pressItem = press.find((item: PressItem) => item.id === Number(id));

  if (!pressItem) {
    return <p>Press item not found</p>;
  }

  return (
    <main>
      <div>
        <Image src={SinglepressHero} alt="Press Image" className="hidden md:block" />
        <Image src={SinglepressHeroMobile} alt="Press Image" className="block md:hidden" />
      </div>

      <div className="flex flex-col md:flex-row gap-8 md:gap-12 mt-12 md:mt-24">
        <div className="flex justify-between">
          <Image src={TC} alt="Icon" className="md:mt-[-300px] hidden md:block" />
          <Image src={TCMobile} alt="Icon" className="block md:hidden mt-[-150px]" />
          <p className="text-[#B3B0B0] block md:hidden">{pressItem.date}</p>
        </div>

        <div className="md:w-[684px]">
          <h1 className="text-2xl md:text-5xl py-8 md:leading-[45px]">{pressItem.title}</h1>
          <p className="text-[#B3B0B0] text-base leading-8">{pressItem.fullText}</p>
          <p className="text-[#B3B0B0] text-base leading-8 mt-8">{pressItem.fullTextCont}</p>
        </div>

        <aside className="border-l-2 border-[#E4E4E4] flex flex-col md:gap-12 px-4 md:px-12">
          <div>
          <h3 className="font-semibold">Share News</h3>
          <div className="flex items-center justify-around py-4">
            <Link href="/">
              <Image src={Facebook} alt="Facebook" />
            </Link>
            <Link href="/">
              <Image src={X} alt="X" />
            </Link>
            <Link href="/">
              <Image src={Instagram} alt="Instagram" />
            </Link>
            <Link href="/">
              <Image src={LinkedIn} alt="LinkedIn" />
            </Link>
          </div>
          </div>

          <div>
            <h3 className="font-semibold  hidden md:block">Publisher</h3>
            <p className="text-[#B3B0B0]  hidden md:block">{pressItem.iconText}</p>
          </div>
          <div>
            <h3 className="font-semibold  hidden md:block">Release Date</h3>
            <p className="text-[#B3B0B0] hidden md:block">{pressItem.date}</p>
          </div>
        </aside>
      </div>

    </main>
  );
};

export default SinglePressHero;
