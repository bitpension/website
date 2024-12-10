"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import BitcoinRate from "../BitcoinRate";
import Logo from "../../../public/bitPension logo nbg.svg";
import LogoMobile from "../../../public/logoMobile.svg";
import Globe from "../../../public/browser_icon.svg";
import DownArrow from "../../../public/down_arrow_icon.svg";
import Button_Light from "../Buttons/Button_Light";
import Button_Dark from "../Buttons/Button_Dark";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="flex items-center justify-between py-9 lg:px-8">
      {/* Logo */}
      <div>
        <Image src={Logo} alt="Logo" className=" hidden md:block" />
        <Image src={LogoMobile} alt="Logo" className=" block md:hidden" />
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden lg:flex items-center gap-4 bg-[#F8F8FA] rounded-full p-4">
        <div>
          <BitcoinRate />
        </div>
        <ul className="flex items-center gap-9 text-[#7C7C7C] text-lg">
          <li>
            <Link href="/press">Press</Link>
          </li>
          <li>
            <Link href="/story">Story</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li>
            <Link href="/faq">FAQ</Link>
          </li>
          <li>
            <Link href="/bitcoin">What is Bitcoin?</Link>
          </li>
          <li>
            <Link href="/payment">Payment Plan</Link>
          </li>
        </ul>
      </nav>

      {/* Desktop Actions */}
      <div className="hidden lg:flex items-center gap-4">
        <div className="flex items-center gap-4">
          <Image src={Globe} alt="Icon" />
          <p>EN</p>
          <Image src={DownArrow} alt="Icon" />
        </div>
        <Link href="/login">
          <Button_Light text="Login" />
        </Link>
        <Link href="/getstarted">
          <Button_Dark text="Get Started" />
        </Link>
      </div>

      {/* Mobile Hamburger Button */}
      <div className="flex">
      <div className="block md:hidden">
            <BitcoinRate />
          </div>
      <button onClick={toggleMenu} className="lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-8 h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>
      
      </div>
 

      {/* Mobile Slide-In Menu */}
      {isOpen && (
        <div className="fixed top-0 right-0 w-full h-full bg-white shadow-lg p-10 flex flex-col justify-start items-start lg:hidden z-50">
          <button onClick={toggleMenu} className="self-end mb-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <ul className="flex flex-col gap-6 text-[#7C7C7C] text-lg">
            <li onClick={toggleMenu}>
              <Link href="/press">Press</Link>
            </li>
            <li onClick={toggleMenu}>
              <Link href="/story">Story</Link>
            </li>
            <li>
            <Link href="/blog">Blog</Link>
          </li>
            <li>
            <Link href="/faq">FAQ</Link>
          </li>
            <li onClick={toggleMenu}>
              <Link href="/bitcoin">What is Bitcoin?</Link>
            </li>
            <li onClick={toggleMenu}>
              <Link href="/payment">Payment Plan</Link>
            </li>
          </ul>
          <div className="mt-8 flex items-center gap-4">
            <Image src={Globe} alt="Icon" />
            <p>EN</p>
            <Image src={DownArrow} alt="Icon" />
          </div>
          <div className="mt-4 flex flex-col gap-4">
            <Link href="/login">
              <Button_Light text="Login" onClick={toggleMenu} />
            </Link>
            <Link href="/getstarted">
              <Button_Dark text="Get Started" onClick={toggleMenu} />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
