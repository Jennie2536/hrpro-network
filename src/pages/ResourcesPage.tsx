import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { MadeWithDyad } from '@/components/made-with-dyad';
import ScrollToTopButton from '@/components/ScrollToTopButton';
import ResourcesSection from '@/components/sections/ResourcesSection'; // Import the existing section

const ResourcesPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <ResourcesSection /> {/* Render the existing ResourcesSection here */}
        {/* Removed the 'Back to Home' button as navigation is available via Header/Footer */}
      </main>
      <Footer />
      <MadeWithDyad />
      <ScrollToTopButton />
    </div>
  );
};

export default ResourcesPage;