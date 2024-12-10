import React from 'react'
import Link from "next/link"
import Image from "next/image"
import RightArrow from "../../../public/basil_arrow-right-solid.svg"

const Head = () => {
  return (
    <div className='bg-[#F4F2F0] text-xs md:text-lg italic px-4 md:text-center overflow-hidden'>
      <div className="animate-scroll whitespace-nowrap">
        <p className="flex justify-center items-center gap-4 p-4">
          Join Our Free Webinar to Learn How to Invest and Grow with Bitcoin Safely 
          <Link href="/signup" className="flex items-center gap-4">
            <span className="text-[#0B7A38]">Register</span> 
            <Image src={RightArrow} alt="Right Arrow" /> 
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Head