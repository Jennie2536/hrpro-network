import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { MadeWithDyad } from '@/components/made-with-dyad';
import ScrollToTopButton from '@/components/ScrollToTopButton';
import { Link } from 'react-router-dom';
import { CustomButton } from '@/components/CustomButton';
import HowItWorksSection from '@/components/sections/HowItWorksSection'; // The 4 steps section
import RevenueShareTable from '@/components/sections/RevenueShareTable'; // The new revenue share table

const HowItWorksPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="bg-hr-green text-white py-20 md:py-32 text-center">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 drop-shadow-lg">
              How The HR Hub Pro Network Works
            </h1>
            <p className="text-lg md:text-xl mb-10 max-w-3xl mx-auto text-hr-offwhite drop-shadow-md">
              Discover our structured approach to connecting HR professionals with impactful projects and transparent compensation.
            </p>
          </div>
        </section>
        <HowItWorksSection /> {/* The 4 steps */}
        <RevenueShareTable /> {/* The revenue sharing table */}
        <div className="py-16 md:py-24 text-center bg-white">
          <Link to="/">
            <CustomButton variant="primary">Back to Home</CustomButton>
          </Link>
        </div>
      </main>
      <Footer />
      <MadeWithDyad />
      <ScrollToTopButton />
    </div>
  );
};

export default HowItWorksPage;