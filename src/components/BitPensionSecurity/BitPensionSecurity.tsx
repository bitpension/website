import React from "react";
import Image from "next/image";
import BitWallet from "../../../public/Bitcoin wallet icon.svg";
import Arrow from "../../../public/rightandleftarrow.svg";
import ArrowMobile from "../../../public/arrowMobile.png";
import BitSecurity from "../../../public/House Lock.svg";
import MobileSecurity from "../../../public/walletMobile.png";
import Security from "../../../public/securityMobile.png";

const BitPensionSecurity = () => {
  return (
    <div className="flex md:items-center md:justify-around flex-col md:flex-row bg-[#F8F8FA] px-4 py-12 md:px-36 md:py-28 my-20">
      <div>
        <h2 className="hidden md:block md:text-3xl leading-[70px] pb-8 md:pb-0 capitalize">
          <span className="text-[#0B7A38] font-medium">Bitpension</span> uses
          enterprise-
          <br />
          Grade security setup and <br />
          custodian partner.
        </h2>
        {/* Mobile */}
        <h2 className="block md:hidden text-3xl leading-[30px] pb-8 md:pb-0 capitalize">
          <span className="text-[#0B7A38] font-medium">Bitpension</span> uses
          enterprise- Grade security setup and custodian partner.
        </h2>
      </div>
      <div className="flex items-center justify-center gap-4 md:gap-8">
        <div className="flex flex-col items-center gap-4">
          <Image src={BitWallet} alt="BitWallet" className="hidden md:flex" />
          <Image
            src={MobileSecurity}
            alt="BitSecurity"
            className="flex md:hidden"
          />
          <h3 className="text-xs md:text-xl font-semibold text-center">
            BITCOIN WALLET
          </h3>
        </div>
        <Image src={Arrow} alt="Arrow" className="hidden md:flex" />
        <Image src={ArrowMobile} alt="Arrow" className="flex md:hidden" />
        <div className="flex flex-col">
          <Image
            src={BitSecurity}
            alt="BitSecurity"
            className="hidden md:flex md:pt-16"
          />
          <Image src={Security} alt="BitSecurity" className="flex md:hidden" />
          <h3 className="text-xs md:text-xl font-semibold text-center">
            BITPENSION SECURITY
          </h3>
        </div>
      </div>
    </div>
  );
};

export default BitPensionSecurity;
