import Footer5 from '@/components/footers/Footer5';
import Header5 from '@/components/headers/Header5';
import Cta from '@/components/homes/home-4/Cta';
import Features from '@/components/homes/home-4/Features';
import Hero from '@/components/homes/home-4/Hero';
import About from '@/components/homes/home-4/About';
import Pricing from '@/components/homes/home-4/Pricing';
import Projects from '@/components/homes/home-4/Projects';
import Steps from '@/components/homes/home-4/Steps';
import React from 'react';

export const metadata = {
  title: 'Cognify',
};
export default function HomePage4() {
  return (
    <>
      {/* <SearchPopup /> */}
      <Header5 />
      <Hero />
      <Steps />
      <About />
      <Features />
      <Projects />
      <Cta />
      <Pricing />
      <Footer5 />
    </>
  );
}
