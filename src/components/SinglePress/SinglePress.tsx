"use client";
import React from 'react';
import { useParams } from 'next/navigation';
import Head from '../Head/Head';
import Header from '../Header/Header';
import SinglePressHero from './SinglePressHero';
import PressCrumbs from '../Press/PressCrumbs';
import Footer from '../Footer/Footer';

const SinglePress = () => {
  const params = useParams();
  const id = typeof params.id === 'string' ? params.id : ''; // Ensure `id` is a string

  return (
    <div>
      <Head />
      <div className="max-w-screen-2xl mx-auto px-4">
        <Header />
        <SinglePressHero params={{ id }} /> {/* Pass params with a string id */}
        <PressCrumbs />
      </div>
      <Footer />
    </div>
  );
};

export default SinglePress;
