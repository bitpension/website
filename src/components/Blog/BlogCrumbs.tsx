import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { blog } from "../Data/Blog";
import Prev from "../../../public/Prev.svg";
import Next from "../../../public/Next.svg";

const BlogCrumbs: React.FC = () => {
  // Pagination and filter state
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedFilter, setSelectedFilter] = useState("All");
  const itemsPerPage = 8;

  // Filter options
  const filterOptions = ["All", "Bitcoin", "Retirement"];

  // Filtered blog items based on selected filter
  const filteredBlog = selectedFilter === "All"
    ? blog
    : blog.filter((item) => item.category === selectedFilter);

  // Calculate total pages and current items
  const totalPages = Math.ceil(filteredBlog.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = filteredBlog.slice(startIndex, endIndex);

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

  // Handle filter change
  const handleFilterChange = (filter: string) => {
    setSelectedFilter(filter);
    setCurrentPage(1); // Reset to first page on filter change
  };

  return (
    <div>
      {/* Filter Bar */}
      <div className="flex items-center mb-8">
  {filterOptions.map((filter) => (
    <div key={filter} className="border-b border-[#D7D7D7]">
      <button
        onClick={() => handleFilterChange(filter)}
        className={`text-lg font-semibold pb-2 px-8 ${
          selectedFilter === filter
            ? "text-[#0B7A38] border-b-2 border-[#0B7A38]"
            : "text-[#7C7C7C]"
        }`}
      >
        {filter}
      </button>
    </div>
  ))}
</div>

      {/* Blog items */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-center rounded-xl bg-[#F8F8FA] md:p-12">
        {currentItems.map((blogItem, index) => (
          <Link href={`/blog/${blogItem.id}`} key={index}>
            <div className="shadow-sm hover:shadow-md transition-shadow bg-[#F8F8FA] md:w-[350px]">
              <div className="overflow-hidden rounded-tl-xl rounded-tr-xl">
                <Image
                  src={blogItem.image}
                  alt={`Logo of ${blogItem.image}`}
                  width={350}
                  height={168}
                  className="object-cover transform transition-transform duration-300 hover:scale-105 w-full"
                />
              </div>

              <div className="p-4 md:p-10">
                <div className="flex items-center justify-center gap-4 bg-[#0B7A380D] rounded-full py-2 px-4 md:px-8 md:py-4 w-[111px]">
                  <Image
                    src={blogItem.icon}
                    alt={blogItem.title}
                    width={20}
                    height={20}
                  />
                  <p className="text-base text-[#0B7A38] font-semibold">
                    {blogItem.iconText}
                  </p>
                </div>

                <h2 className="text-xl md:text-2xl font-semibold my-4">
                  {blogItem.title}
                </h2>
                <p className="text-[#7C7C7C] text-lg">{blogItem.text}</p>

                <h4 className="text-sm font-bold mt-12">{blogItem.date}</h4>
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

export default BlogCrumbs;