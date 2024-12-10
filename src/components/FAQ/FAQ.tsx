import React, { useState } from "react";
import { faqData } from "../Data/HomeFAQ";
import Image from "next/image";
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
    <div className="py-4 bg-[#F8F8FA] my-4">
      {/* Question */}
      <div
        className="flex justify-between items-center cursor-pointer p-4"
        onClick={toggleOpen}
      >
        <span className="text-base md:text-lg ">{question}</span>
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

const FAQ: React.FC = () => {
  return (
    <div className="w-full max-w-6xl mx-auto my-20 px-4 md:px-0">
      <h2 className="text-5xl md:text-center pb-4 leading-[50px]">
        Frequently Asked <span className="text-[#0B7A38]"> Questions</span>
      </h2>
      {faqData.map((item, index) => (
        <FAQItem key={index} question={item.question} answer={item.answer} />
      ))}
    </div>
  );
};

export default FAQ;
