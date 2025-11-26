import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { MadeWithDyad } from '@/components/made-with-dyad';
import ScrollToTopButton from '@/components/ScrollToTopButton';
import { Link } from 'react-router-dom';
import { CustomButton } from '@/components/CustomButton';

const ArticlesAndGuidesPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-16 md:py-24 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-hr-green mb-8">Articles & Guides</h1>
        <p className="text-lg text-gray-700 mb-12 max-w-3xl mx-auto">
          Dive into our expert articles and comprehensive guides on various HR topics.
          We're constantly updating this section with valuable insights for HR professionals across Africa.
        </p>
        {/* Placeholder for future article content */}
        <div className="bg-gray-100 p-8 rounded-lg shadow-inner max-w-2xl mx-auto">
          <p className="text-gray-600 italic">
            Content for articles and guides will be available here soon. Stay tuned for expert insights!
          </p>
        </div>
        <div className="mt-12">
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

export default ArticlesAndGuidesPage;