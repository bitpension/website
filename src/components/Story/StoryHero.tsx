import React from "react";
import Link from "next/link";
import Image from "next/image";
import StoryFace from "../../../public/storyperson.png";
import Button_Light from "../Buttons/Button_Light";
import Button_Dark from "../Buttons/Button_Dark";

const StoryHero = () => {
  return (
    <div>
      <section className="py-8 md:py-24 bg">
        <div className="flex justify-center items-center flex-col gap-8">
          <div className="md:w-[670px] text-center ">
            <h1 className="text-5xl leading-[45px] my-8">
              <span className="text-[#0B7A38] md:italic">Our Journey: </span>
              Building the Future of Retirement with Bitcoin
            </h1>
            <p className="text-[#cec0c0] text-lg">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry
            </p>
          </div>

          <div className="flex gap-8">
            <Link href="/login">
              <Button_Light text="Login" />
            </Link>
            <Link href="/getstarted">
              <Button_Dark text="Get Started" />
            </Link>
          </div>
        </div>
      </section>

      <div className="py-8 md:py-24 overflow-hidden">
        <div className="flex gap-4 animate-scroll whitespace-nowrap">
          <Image src={StoryFace} alt="StoryFace" />
          <Image src={StoryFace} alt="StoryFace" />
          <Image src={StoryFace} alt="StoryFace" />
          <Image src={StoryFace} alt="StoryFace" />
          <Image src={StoryFace} alt="StoryFace" />
          <Image src={StoryFace} alt="StoryFace" />
          <Image src={StoryFace} alt="StoryFace" />
          <Image src={StoryFace} alt="StoryFace" />
          {/* Duplicates */}
          <Image src={StoryFace} alt="StoryFace" />
          <Image src={StoryFace} alt="StoryFace" />
          <Image src={StoryFace} alt="StoryFace" />
          <Image src={StoryFace} alt="StoryFace" />
          <Image src={StoryFace} alt="StoryFace" />
          <Image src={StoryFace} alt="StoryFace" />
          <Image src={StoryFace} alt="StoryFace" />
          <Image src={StoryFace} alt="StoryFace" />
        </div>

        {/* Inline styles for defining keyframes */}
        <style jsx>{`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-100%);
            }
          }
          .animate-scroll {
            display: inline-flex;
            animation: scroll 40s linear infinite;
          }
        `}</style>
      </div>

      <div className="my-4 text-center px-8 bg-[#0B7A380D] rounded-full py-2 w-[400px] mx-auto">
        <h3 className="text-xl">🏆 Winner of ?? HACKATHON COMPETITION</h3>
      </div>
    </div>
  );
};

export default StoryHero;
