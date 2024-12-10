import React from "react";

const StoryInfo = () => {
  return (
    <div className="bg-[#F4F2F0] p-4 md:p-32">
      <section className="md:w-[700px]">
        <h3 className="capitalize text-3xl md:text-5xl leading-10 md:leading-[45px]">
          our journey began with a bold vision: to empower individuals to <span className="text-[#0B7A38]">secure</span>
          their financial futures using the transformative power of Bitcoin.
        </h3>
        <p className="text-[#7C7C7C] my-8 leading-7">
          As traditional retirement models faced increasing uncertainty, we saw
          an opportunity to introduce a more resilient and innovative approach
          to long-term savings. From day one, our mission has been to combine
          the stability of pension planning with the growth potential of digital
          assets.
        </p>

        <div className="flex gap-8 my-8">

          <div>
            <h1 className="text-[#0B7A38] text-3xl md:text-7xl mb-2">20K+</h1>
            <p className="text-sm text-[#7C7C7C]">WEB APP USERS</p>
          </div>
          <div>
            <h1 className="text-[#0B7A38] text-3xl md:text-7xl mb-2">50K+</h1>
            <p className="text-sm text-[#7C7C7C]">WEB APP USERS</p>
          </div>
          <div>
            <h1 className="text-[#0B7A38] text-3xl md:text-7xl mb-2">10M+</h1>
            <p className="text-sm text-[#7C7C7C]">WEB VISIT</p>
          </div>

        </div>
      </section>
    </div>
  );
};

export default StoryInfo;
