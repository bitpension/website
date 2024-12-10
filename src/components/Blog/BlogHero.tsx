import React from "react";
import Image from "next/image";
import BlogVector from "../../../public/blogVector.png";
import ButtonDark from "../Buttons/Button_Dark";

const BlogHero = () => {
  return (
    <div className="flex item-center justify-between py-12">
      <div className="md:w-[689px] flex flex-col gap-8">
        <div>
          <h1 className="text-4xl md:text-6xl md:leading-[50px] mb-8">Financial Freedom Starts Here: Explore Our Latest Blogs</h1>
          <p className="text-lg text-[#7C7C7C]">
            At BitPension, we believe that knowledge is key to financial
            empowerment. Our blog is your go-to resource for everything related
            to Bitcoin, retirement planning, and the evolving world of digital
            finance.
          </p>
          
        </div>

        <div>
        <div className="flex gap-2 items-center">
              <input
                placeholder="Enter"
                className="bg-[#F8F8FA] text-[#7C7C7C] w-full p-4 outline-none border-none rounded-full"
              />
              <ButtonDark text="Submit"/>
            </div>
        </div>
      </div>

<div>
    <Image src={BlogVector} alt="BlogVector" className="hidden md:flex" />
</div>
    </div>
  );
};

export default BlogHero;