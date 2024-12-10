import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link"
import { press } from "../Data/Press";
import Prev from "../../../public/Prev.svg";
import Next from "../../../public/Next.svg";

const PressCrumbs: React.FC = () => {
  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  // Calculate total pages and current items
  const totalPages = Math.ceil(press.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = press.slice(startIndex, endIndex);

  // Handle pagination navigation
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <div>
        <h1 className="italic text-3xl md:text-5xl my-8">
        More Press Release:
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-center rounded-xl">
        {currentItems.map((pressItem, index) => (
            <Link href={`/press/${pressItem.id}`} key={index}>
          <div
            key={index}
            className="shadow-sm hover:shadow-md transition-shadow bg-[#F8F8FA] md:w-[380px]"
          >
            <div className="overflow-hidden rounded-tl-xl rounded-tr-xl">
              <Image
                src={pressItem.image}
                alt={`Logo of ${pressItem.image}`}
                width={380}
                height={168}
                className="object-cover transform transition-transform duration-300 hover:scale-105 w-full"
              />
            </div>

            <div className="p-4 md:p-10">
              <div className="flex items-center justify-center gap-4 bg-[#0B7A380D] rounded-full py-2 px-4 md:px-8 md:py-4 w-[111px]">
                <Image
                  src={pressItem.icon}
                  alt={pressItem.title}
                  width={20}
                  height={20}
                />
                <p className="text-base text-[#0B7A38] font-semibold">
                  {pressItem.iconText}
                </p>
              </div>

              <h2 className="text-xl md:text-4xl font-semibold my-4">
                {pressItem.title}
              </h2>
              <p className="text-[#7C7C7C] text-lg">{pressItem.text}</p>

              <h4 className="text-sm font-bold mt-12">{pressItem.date}</h4>
            </div>
          </div>
          </Link>
        ))}
      </div>

      {/* Pagination controls */}
      <div className="flex justify-end items-center my-8 space-x-4">

        <button
          onClick={handlePrevious}
          disabled={currentPage === 1}
          className="p-4 rounded-lg bg-[#FAFAFA] hover:bg-[#0B7A38] disabled:bg-gray-200 disabled:cursor-not-allowed"
        >
          <Image src={Prev} alt="Previous" />
        </button>

        {/* Page Numbers */}
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            className={`px-8 py-4 rounded-lg font-semibold ${
              currentPage === page
                ? "bg-[#0B7A38] text-white"
                : "bg-[#FAFAFA] text-gray-700 hover:bg-gray-300"
            }`}
          >
            {page}
          </button>
        ))}

        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className="p-4 rounded-lg bg-[#FAFAFA] hover:bg-gray-300 disabled:bg-gray-200 disabled:cursor-not-allowed"
        >
          <Image src={Next} alt="Next" />
        </button>
      </div>
    </div>
  );
};

export default PressCrumbs;
