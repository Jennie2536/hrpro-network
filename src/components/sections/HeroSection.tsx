import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CustomButton } from '../CustomButton';
import { trackCTAClick, trackApplicationStarted } from '../../utils/analytics';

const HeroSection = () => {
  const navigate = useNavigate();

  const handleJoinNetworkClick = () => {
    trackCTAClick('Join The HR Pro Network', 'Hero Section');
    trackApplicationStarted('hero');
    window.location.href = '#join-network';
  };

  const handleLearnMoreClick = () => {
    trackCTAClick('Learn How It Works', 'Hero Section');
    navigate('/how-it-works');
  };

  return (
    <section className="bg-gradient-to-br from-hr-green to-hr-lemongreen text-white py-20 md:py-32 relative overflow-hidden">
      {/* Subtle background elements simulating a dynamic visual/collage */}
      <div className="absolute inset-0 z-0 opacity-40">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-hr-orange rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-float-slow"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-hr-lemongreen rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-float-fast"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-float-medium"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-hr-black rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-float-slow-reverse"></div>
        <div className="absolute top-0 right-0 w-56 h-56 bg-hr-orange rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-float-fast-reverse"></div>
      </div>

      {/* Overlay for better text contrast */}
      <div className="absolute inset-0 bg-hr-black opacity-20 z-0"></div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 drop-shadow-lg">
          Join Africa's Fastest-Growing HR Talent Network — Powered by The HR Hub Nigeria
        </h1>
        <p className="text-lg md:text-xl mb-10 max-w-3xl mx-auto text-hr-offwhite drop-shadow-md">
          We're building Africa's trusted community of HR professionals — trained, supported, and deployed by The HR Hub to deliver real impact for businesses across the continent.
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <CustomButton variant="secondary" onClick={handleJoinNetworkClick}>
            Join The HR Pro Network
          </CustomButton>
          <CustomButton
            variant="primary"
            className="bg-white text-hr-green hover:bg-gray-100 hover:scale-[1.02] hover:shadow-lg hover:shadow-hr-orange/50"
            onClick={handleLearnMoreClick}
          >
            Learn How It Works
          </CustomButton>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;