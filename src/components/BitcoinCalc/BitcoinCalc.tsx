"use client"
import React from 'react'
import Head from '../Head/Head';
import Header from "../Header/Header";
import BitCalcHero from "./BitCalcHero"
import CalcCrumbs from "./CalcCrumbs"
import Footer from "../Footer/Footer";

const BitcoinCalc = () => {
  return (
    <div>
    <Head />
    <div className="max-w-screen-2xl mx-auto px-4">
      <Header />
      <BitCalcHero />
    <CalcCrumbs />
    </div>
    <Footer />
  </div>
  )
}

export default BitcoinCalc