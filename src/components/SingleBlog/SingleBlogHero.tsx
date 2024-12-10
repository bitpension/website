import React from 'react'
import Image from "next/image";
import Link from "next/link";
import SingleblogHero from "../../../public/singlepress.png"
import SingleblogHeroMobile from "../../../public/singlepressMobile.png"

import Facebook from "../../../public/facebook.svg";
import X from "../../../public/X.svg";
import Instagram from "../../../public/instagram.svg";
import LinkedIn from "../../../public/linkedIn.svg";
import { blog } from "../../components/Data/Blog";

interface BlogItem {
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


const SingleBlogHero: React.FC<Props> = ({ params }) => {
  const { id } = params;

  // Find the blog item based on the id from the URL
  const blogItem = blog.find((item: BlogItem) => item.id === Number(id));

  if (!blogItem) {
    return <p>Blog item not found</p>;
  }


  return (
    <main>
      <div>
        <Image src={SingleblogHero} alt="Press Image" className="hidden md:block" />
        <Image src={SingleblogHeroMobile} alt="Press Image" className="block md:hidden" />
      </div>

      <div className="flex justify-end flex-col md:flex-row gap-8 md:gap-12 mt-12 md:mt-24">
        <div className="flex justify-between">
          <p className="text-[#B3B0B0] block md:hidden">{blogItem.iconText}</p>
          <p className="text-[#B3B0B0] block md:hidden">{blogItem.date}</p>
        </div>

        <div className="md:w-[684px]">
          <h1 className="text-2xl md:text-5xl py-8 md:leading-[45px]">{blogItem.title}</h1>
          <p className="text-[#B3B0B0] text-base leading-8">{blogItem.fullText}</p>
          <p className="text-[#B3B0B0] text-base leading-8 mt-8">{blogItem.fullTextCont}</p>
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
            <p className="text-[#B3B0B0]  hidden md:block">{blogItem.iconText}</p>
          </div>
          <div>
            <h3 className="font-semibold  hidden md:block">Release Date</h3>
            <p className="text-[#B3B0B0] hidden md:block">{blogItem.date}</p>
          </div>
        </aside>
      </div>

    </main>
  )
}

export default SingleBlogHero