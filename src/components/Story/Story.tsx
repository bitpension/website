"use client";
import React from "react";
import Head from "../Head/Head";
import Header from "../Header/Header";
import StoryHero from "./StoryHero";
import StorySubHero from "./StorySubHero";
import StoryInfo from "./StoryInfo";
import StoryGallery from "./StoryGallery";

import Footer from "../Footer/Footer";
const Story = () => {
  return (
    <div>
      <Head />
      <div className="max-w-screen-2xl mx-auto">
        <Header />
        <StoryHero />
        <StorySubHero />
        <StoryInfo />
        <StoryGallery />
      </div>
      <Footer />
    </div>
  );
};

export default Story;
