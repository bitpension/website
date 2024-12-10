"use client"
import React from 'react'
import Head from '../Head/Head'
import Header from '../Header/Header'
import BlogHero from "./BlogHero"
import BlogCrumbs from "./BlogCrumbs"
import Footer from '../Footer/Footer'

const Blog = () => {
  return (
    <div>
    <Head />
    <div className="max-w-screen-2xl mx-auto">
      <Header />
    <BlogHero />
    <BlogCrumbs />
    </div>
      <Footer />
  </div>
  )
}

export default Blog