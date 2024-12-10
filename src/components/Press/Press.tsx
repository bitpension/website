"use client"
import React from 'react'
import Head from '../Head/Head'
import Header from '../Header/Header'
import PressHero from "./PressHero"
import PressCrumbs from './PressCrumbs'
import Footer from '../Footer/Footer'
const Press = () => {
  return (
    <div>
    <Head />
    <div className="max-w-screen-2xl mx-auto">
      <Header />
     <PressHero />
     <PressCrumbs />
    </div>
      <Footer />
  </div>
  )
}

export default Press