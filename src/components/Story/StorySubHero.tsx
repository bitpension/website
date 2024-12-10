import React from 'react'
import Image from "next/image"
import StoryInfo  from "../../../public/storyInfoDesktop.png";
import StoryInfoMobile  from "../../../public/storyInfo.png";

const StorySubHero = () => {
  return (
    <section className='p-8   md:p-32 bg-[#F8F8FA]'>
        <div>
          <h3 className="italic text-3xl leading-[45px] my-8 w-[300px]">Reaching New Heights: Our <span className="text-[#0B7A38]">Milestones</span> and Accomplishments</h3>
        </div>
        <div>
          <Image src={StoryInfo} alt="info" className="hidden md:flex" />
          <Image src={StoryInfoMobile} alt="info" className="md:hidden" />
        </div>
    </section>
  )
}

export default StorySubHero