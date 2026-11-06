import React from 'react';
import Navbar from '@/components/educonnect/Navbar';
import Hero from '@/components/educonnect/Hero';
import Problem from '@/components/educonnect/Problem';
import HowItWorks from '@/components/educonnect/HowItWorks';
import Personalisation from '@/components/educonnect/Personalisation';
import ProductShowcase from '@/components/educonnect/ProductShowcase';
import ForStudents from '@/components/educonnect/ForStudents';
import ForTutors from '@/components/educonnect/ForTutors';
import ForInstitutions from '@/components/educonnect/ForInstitutions';

import Impact from '@/components/educonnect/Impact';
import Validation from '@/components/educonnect/Validation';
import About from '@/components/educonnect/About';
import FAQ from '@/components/educonnect/FAQ';
import FinalCTA from '@/components/educonnect/FinalCTA';
import Footer from '@/components/educonnect/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <HowItWorks />
        <Personalisation />
        <ProductShowcase />
        <ForStudents />
        <ForTutors />
        <ForInstitutions />
       
        <Impact />
        <Validation />
        <About />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}