import React from "react";
import Head from "../Head/Head"
import Header from "../Header/Header";
import FAQHero from "./FAQHero";
import BitFaq from "./BitFaq";
import Footer from "../Footer/Footer";

const FAQPage = () => {
  return (
    <div>
      <Head />
      <Header />
      <FAQHero />
      <BitFaq />
      <Footer />
    </div>
  );
};

export default FAQPage;
