"use client"
import React from "react";
import Head from "../Head/Head";
import Header from "../Header/Header";
import HeroIntro from "../HeroIntro/HeroIntro";
import Hero from "../Hero/Hero";
import Holdings from "../BitcoinHoldings/Holdings";
import PensionPlan from "../PensionPlan/PensionPlan";
import PensionStatistics from "../PensionStatistics/PensionStatistics";
import BitChat from "../BitChat/BitChat";
import BitPensionSecurity from "../BitPensionSecurity/BitPensionSecurity";
import BitPensionPressHome from "../BitPensionPressHome/BitPensionPressHome"
import FAQ from "../FAQ/FAQ"
import Footer from "../Footer/Footer";

const BitHome = () => {
  return (
    <div>
      <Head />
      <div className="max-w-screen-2xl mx-auto">
        <Header />
        <HeroIntro />
        <Hero />
        <Holdings />
        <PensionPlan />
        <PensionStatistics />
        <BitChat />
        <BitPensionSecurity />
        <BitPensionPressHome />
        <FAQ />
      </div>
        <Footer />
    </div>
  );
};

export default BitHome;
