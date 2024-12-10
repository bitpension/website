import React from 'react';
import Image from 'next/image';
import Tick from '../../../public/fluent_checkmark-circle-20-regular.svg';
import TickWhite from '../../../public/fluent_checkmark-circle-20-regular-white.svg';

interface CustodialCardProps {
  title: string;
  bgColor?: string;
  textColor?:string;
  titleFontSize?: string;
  content: {
    label?: string;
    value?: string | React.ReactNode;
  }[];
}

const CustodialCard: React.FC<CustodialCardProps> = ({
  title,
  bgColor = 'bg-[#F8F8FA]',
  textColor = 'text-black',
  titleFontSize = 'text-lg',
  content,
}) => {
    const isDarkBg = bgColor.includes('bg-black') || bgColor.includes('bg-[#282828]') || bgColor.includes('bg-gray-800') || bgColor.includes('bg-[#1A202C]');

  return (
    <div className={`${bgColor} ${textColor} p-8 rounded-lg shadow-md md:max-w-lg`}>
      {/* Title */}
      <h2 className={`${titleFontSize} font-semibold mb-4 border-b-2 pb-4`}>
        {title}
      </h2>

      {/* Content List */}
      <ul className="space-y-4 py-8">
        {content.map((item, index) => (
          <li key={index} className="flex items-start space-x-2 text-[#7C7C7C] leading-7">
            <div className="flex-shrink-0">
              <Image
                src={isDarkBg ? TickWhite : Tick}
                alt="tick"
                className="w-4 h-4 mt-1"
              />
            </div>
            <div>
              <span className="font-semibold">{item.label}:</span> <span>{item.value}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CustodialCard;
