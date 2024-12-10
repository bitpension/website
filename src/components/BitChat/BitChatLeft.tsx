import React from "react";
import Image from "next/image";
import BitChatLogo from "../../../public/bitpension_frame.svg";
import PhoneIcon from "../../../public/call-received.svg";
import MessageIcon from "../../../public/sms.svg";
import GreenDot from "../../../public/smallgreendot.svg";
import User from "../../../public/user.svg";
import BitPensionChatIcon from "../../../public/BitPensionChatIcon.svg";
import Send from "../../../public/send.svg";
import ThreeDLine from "../../../public/3dLine.png";

const BitChatLeft = () => {
  return (
    <section className="flex">
      <div className="md:px-12 py-10">
        <header className="flex items-center justify-between bg-[#F8F8FA] px-5 py-3 rounded-2xl">
          <div className="flex items-center gap-8">
            <Image src={BitChatLogo} alt="BitPensionChat Icon" />
            <div>
              <h2 className="text-sm md:text-2xl py-3">
                Bitpension Support
              </h2>
              <div className="flex items-center gap-2">
                <Image src={GreenDot} alt="Green Dot" />
                <p>Active now</p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-7">
            <Image src={PhoneIcon} alt="Phone Icon" />
            <Image src={MessageIcon} alt="Message Icon" />
          </div>
        </header>

        <div className="bg-[#F8F8FA]  w-48 h-16  mx-auto my-6 p-4 rounded-xl text-center">
          <p className="text-lg text-[#7C7C7C]"> 29 Sept 2024</p>
        </div>

        <div className="text-left flex items-end justify-end gap-2 ">
          <div className="bg-[#F4F2F0] text-lg px-12 py-4 rounded-xl">
            <p>Hey, Why Bitpension?</p>
          </div>
          <Image src={User} alt="User" />
        </div>

        <div className="flex my-9 gap-2">
          <div className="mt-4">
            <Image src={BitPensionChatIcon} alt="BitPensionChatIcon" />
          </div>
          <div className="text-xl">
            <p className=" bg-[#F8F8FA] rounded-xl p-4">
              Great question! Here’s why
              <br /> BitPension stands out:
            </p>
            <p className="bg-[#F8F8FA] rounded-xl p-4 mt-4">
              <span className="text-[#0B7A38]">Accessibility:</span> Stay
              protected from mismanagement,
              <br /> withdrawal limits, or emergency.
            </p>
            <p className="bg-[#F8F8FA] rounded-xl p-4 mt-4">
              <span className="text-[#0B7A38]">Security:</span> Keep total
              control over your long-term savings
              <br /> in a better asset in Bitcoin.
            </p>
            <p className="bg-[#F8F8FA] rounded-xl p-4 mt-4">
              <span className="text-[#0B7A38]">Value:</span> Your savings are
              shielded from inflation and <br />
              provide a high yield.
            </p>
            <p className="bg-[#F8F8FA] rounded-xl p-4 mt-4">
              We’re here to make sure your financial future is secure,
              <br /> flexible, and rewarding! 😊.
              <span className="text-[#0B7A38] underline">
                Click to Get started
              </span>
            </p>
          </div>
        </div>

        <div className="text-left flex items-end justify-end gap-2 ">
          <div className="bg-[#F4F2F0] text-lg px-12 py-4 rounded-xl">
            <p>That sounds really interesting! Thanks</p>
          </div>
          <Image src={User} alt="User" />
        </div>

        <div className="relative mt-8">
          <input
            readOnly
            type="text"
            name="message"
            placeholder="Type Something......"
            className="text-[#7C7C7C] text-lg px-9 py-6 bg-[#F8F8FA] rounded-full w-full outline-none border-none"
          />
          <div className="absolute right-3 top-2">
            <Image src={Send} alt="Send Icon" />
          </div>
        </div>
      </div>
      <Image src={ThreeDLine} alt="3DLine" />
    </section>
  );
};

export default BitChatLeft;
