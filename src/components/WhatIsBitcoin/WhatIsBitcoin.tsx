import React from "react";
import Head from '../Head/Head';
import Header from "../Header/Header";
import WhatIsBitcoinHero from "./WhatIsBitcoinHero"
import Footer from "../Footer/Footer";

const WhatIsBitcoin = () => {
  return (
    <div>
      <Head />
      <div className="max-w-screen-2xl mx-auto px-4">
        <Header />
        <WhatIsBitcoinHero />
      </div>
      <Footer />
    </div>
  );
};

export default WhatIsBitcoin;
