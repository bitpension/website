import React from "react";
import Image from "next/image"
import WhatIsBitcoinHeroImage from "../../../public/WhatIsBitcoin.svg"
import WhatIsBitcoinHeroMobileImage from "../../../public/WhatIsBitcoinMobile.svg"
import BitcoinInfo from "./BitcoinInfo"

const WhatIsBitcoinHero = () => {
  return (
    <div>
        <div>
            <Image src={WhatIsBitcoinHeroImage} alt="Bitcoin Image" className="hidden md:block" />
            <Image src={WhatIsBitcoinHeroMobileImage} alt="Bitcoin Image" className="block md:hidden" />
        </div>
      <BitcoinInfo />
    </div>
  );
};

export default WhatIsBitcoinHero;