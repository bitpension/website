"use client";
import React from "react";
import Head from "../Head/Head";
import Header from "../Header/Header";
import PaymentHero from "./PaymentHero";
import PaymentPlans from "./PaymentPlans"
import Footer from "../Footer/Footer";

const Payment = () => {
    return (
        <div>
          <Head />
          <div className="max-w-screen-2xl mx-auto">
            <Header />
            <PaymentHero />
            <PaymentPlans />
          </div>
          <Footer />
        </div>
      );
}

export default Payment