"use client";
import React, { useState } from "react";
import { generalfaq } from "../Data/FAQ";
import { bitcoinfaq } from "../Data/FAQ";
import { pensionfaq } from "../Data/FAQ";
import Image from "next/image";
import Link from "next/link";
import ArrowDown from "../../../public/down_arrow_icon.svg";

interface FAQItemProps {
  key: number;
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="py-4 bg-[#F8F8FA] my-4 w-full md:w-[700px]">
      {/* Question */}
      <div
        className="flex justify-between items-center cursor-pointer p-4"
        onClick={toggleOpen}
      >
        <span className="text-base md:text-lg">{question}</span>
        <button className="text-lg md:text-2xl font-bold">
          <Image src={ArrowDown} alt="Arrow" /> {isOpen ? " " : " "}{" "}
        </button>
      </div>

      {/* Answer */}
      <div
        className={`overflow-hidden transition-max-height duration-300 ease-in-out ${
          isOpen ? "max-h-40" : "max-h-0"
        }`}
      >
        <p className="mt-2 text-[#B3B0B0] text-base p-4">{answer}</p>
      </div>
    </div>
  );
};

const BitFaq: React.FC = () => {
  return (
    <section className="p-4 md:p-24">
      <div className="flex justify-center flex-col md:flex-row gap-24 mb-8">
        <div>
          <h2 className="text-4xl font-semibold pb-4">General FAQs</h2>
          <p className="text-[#7C7C7C] text-xl">
            Everything you need to knw about Bitpension and
             how it works, cant find your answers ?
          </p>
          <Link href="/contact">
            <p className="italic text-xl text-[#0B7A38] underline font-semibold my-4">
              Please Chat With Our Team
            </p>
          </Link>
        </div>
        <div>
          {generalfaq.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>
      </div>

      <div className="flex justify-center flex-col md:flex-row gap-24 mb-4 md:mb-8 border-t border-t-gray-100 pt-12">
        <div>
          <h2 className="text-4xl font-semibold pb-4">Bitcoin FAQs</h2>
          <p className="text-[#7C7C7C] text-xl">
            Everything you need to knw about Bitpension and
            how it works, cant find your answers ?
          </p>
          <Link href="/contact">
            <p className="italic text-xl text-[#0B7A38] underline font-semibold my-4">
              Please Chat With Our Team
            </p>
          </Link>
        </div>
        <div>
          {bitcoinfaq.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>
      </div>

      <div className="flex justify-center flex-col md:flex-row gap-24 mb-4 md:mb-8 border-t border-t-gray-100 pt-12">
        <div>
          <h2 className="text-4xl font-semibold pb-4">Pension FAQs</h2>
          <p className="text-[#7C7C7C] text-xl">
            Everything you need to knw about Bitpension and
             how it works, cant find your answers ?
          </p>
          <Link href="/contact">
            <p className="italic text-xl text-[#0B7A38] underline font-semibold my-4">
              Please Chat With Our Team
            </p>
          </Link>
        </div>
        <div>
          {pensionfaq.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BitFaq;