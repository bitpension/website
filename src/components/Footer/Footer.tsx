import React from "react";
import Image from "next/image";
import Link from "next/link"
import Logo from "../../../public/bitPension logo nbg.svg";
import Facebook from "../../../public/facebook.svg";
import X from "../../../public/X.svg";
import Instagram from "../../../public/instagram.svg";
import LinkedIn from "../../../public/linkedIn.svg";
import TikTok from "../../../public/tiktok.svg";
import YouTube from "../../../public/youtube.svg";
import GrayDot from "../../../public/graydot.svg";
import ButtonDark from "../Buttons/Button__Dark";

const Footer = () => {
  return (
    <footer className="bg-[#F4F2F0] md:py-20 md:px-18 py-8 px-4">
      <div className="flex md:items-center md:justify-around flex-col md:flex-row">
        <div>
          <Image src={Logo} alt="BitPension Logo" className="py-4" />
          <p className="text-[#7C7C7C] text-lg">
            Lorem Ipsum is simply dummy text of the printing
          </p>
          <div className="flex items-center justify-around py-4">
            <Link href='/next-env.d.ts'><Image src={Facebook} alt="Facebook" /></Link>
            <Link href='/next-env.d.ts'><Image src={X} alt="X" /></Link>
            <Link href='/next-env.d.ts'><Image src={Instagram} alt="Instagram" /></Link>
            <Link href='/next-env.d.ts'><Image src={LinkedIn} alt="LinkedIn" /></Link>
            <Link href='/next-env.d.ts'><Image src={TikTok} alt="TikTok" /></Link>
            <Link href='/next-env.d.ts'><Image src={YouTube} alt="YouTube" /></Link>
          </div>
        </div>

        <div className="my-8 md:my-0">
          <h2 className="italic text-base md:text-2xl capitalize font-semibold mb-8">
            Get an up to date update straight to your email
          </h2>
          <div>
            <p className="text-[#7C7C7C] font-medium">Enter Email </p>
            <br />
            <div className="flex gap-2 items-center">
              <input
                placeholder="Enter Email Address"
                className="bg-white text-[#7C7C7C] w-full p-4 outline-none border-none"
              />
              <ButtonDark text="Submit" />
            </div>
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-2xl italic my-4">Quick Links:</h3>
          <div className="flex items-start justify-start md:items-center gap-4 md:gap-8 ">
            <div>
              <div className="flex gap-8 md:gap-4 my-4 font-semibold">
                <Image src={GrayDot} alt="GrayDot" />
                <Link href="/calculator">
                <p className="text-[#7C7C7C] text-lg">Bitcoin Calculator</p>
                </Link>
              </div>
              <div className="flex gap-8 md:gap-4 my-4 font-semibold">
                <Image src={GrayDot} alt="GrayDot" />
                <Link href="/blog">
                <p className="text-[#7C7C7C] text-lg">Blog</p>
                </Link>
              </div>
              <div className="flex gap-8 md:gap-4 my-4 font-semibold">
                <Image src={GrayDot} alt="GrayDot" />
                <Link href="/">
                <p className="text-[#7C7C7C] text-lg">Terms & Conditions</p>
                </Link>
              </div>
            </div>

            <div>
              <div className="flex gap-8 md:gap-4 my-4 font-semibold">
                <Image src={GrayDot} alt="GrayDot" />
                <Link href="/faq">
                <p className="text-[#7C7C7C] text-lg">FAQ</p>
                </Link>
              </div>
              <div className="flex gap-8 md:gap-4 my-4 font-semibold">
                <Image src={GrayDot} alt="GrayDot" />
                <p className="text-[#7C7C7C] text-lg">Career</p>
              </div>
              <div className="flex gap-8 md:gap-4 my-4 font-semibold">
                <Image src={GrayDot} alt="GrayDot" />
                <Link href="/">
                <p className="text-[#7C7C7C] text-lg">Privacy Policy</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" mt-8">
        <p className="text-[#7C7C7C] text-lg capitalize pt-4 border-t border-t-[#7C7C7C80] text-left md:text-center ">
          Disclaimer: Bitpension does not provide any investment, financial,
          tax, legal or other professional advice. We recommend that you consult
          with financial and tax advisors to understand the risks and 
          consequences of buying, selling and holding Bitcoin
        </p>
          <div className="text-[#0B7A38] font-semibold mt-8 text-center">
            © 2024 Bitpension.io. Made For Freedom.
          </div>
      </div>
    </footer>
  );
};

export default Footer;
