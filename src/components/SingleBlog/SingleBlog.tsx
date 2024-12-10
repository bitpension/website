"use client";
import React from 'react'
import { useParams } from 'next/navigation';
import Head from '../Head/Head';
import Header from '../Header/Header';
import SingleBlogHero from "./SingleBlogHero"
import SingleBlogCrumbs from "./SingleBlogCrumbs"
import Footer from '../Footer/Footer';

const SingleBlog = () => {
  const params = useParams();
  const id = typeof params.id === 'string' ? params.id : ''; // Ensure `id` is a string
  return (
    <div>
    <Head />
    <div className="max-w-screen-2xl mx-auto px-4">
      <Header />
      <SingleBlogHero params={{ id }} /> {/* Pass params with a string id */}
      <SingleBlogCrumbs />
    </div>
    <Footer />
  </div>
  )
}

export default SingleBlog
