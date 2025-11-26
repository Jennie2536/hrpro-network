import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/sections/HeroSection";
import ImageGallerySection from "@/components/sections/ImageGallerySection";
import WhyJoinSection from "@/components/sections/WhyJoinSection";
import WhoWeAreLookingForSection from "@/components/sections/WhoWeAreLookingForSection";
import WhatMakesUsDifferentSection from "@/components/sections/WhatMakesUsDifferentSection";
import EarlyAccessOfferSection from "@/components/sections/EarlyAccessOfferSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import FAQSection from "@/components/sections/FAQSection";
import JoinNetworkSection from "@/components/sections/JoinNetworkSection";
import ScrollToTopButton from "@/components/ScrollToTopButton";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <ImageGallerySection />
        <WhyJoinSection />
        <WhoWeAreLookingForSection />
        <WhatMakesUsDifferentSection />
        <EarlyAccessOfferSection />
        <TestimonialsSection />
        <FAQSection />
        <JoinNetworkSection />
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default Index;