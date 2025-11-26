import React from 'react';
import { CustomButton } from '../CustomButton';
import { Star, Rocket, Eye } from 'lucide-react';
import { Card, CardContent, CardTitle } from '@/components/ui/card';

const EarlyAccessOfferSection = () => {
  const benefits = [
    { icon: <Star size={28} className="text-hr-orange" />, title: 'Priority Project Access', text: 'Be among the first to receive verified client projects tailored to your expertise.' },
    { icon: <Rocket size={28} className="text-hr-orange" />, title: 'Seamless Onboarding', text: 'Get early and guided integration into our professional network and project delivery system.' },
    { icon: <Eye size={28} className="text-hr-orange" />, title: 'Enhanced Visibility', text: 'Gain prominent visibility within The HR Hub’s exclusive verified HR professional directory.' },
  ];

  return (
    <section id="early-access" className="bg-hr-green text-white py-16 md:py-24 relative overflow-hidden">
      {/* Subtle background pattern/overlay for visual interest */}
      <div className="absolute inset-0 z-0 opacity-10" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"6\" height=\"6\" viewBox=\"0 0 6 6\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Ccircle cx=\"3\" cy=\"3\" r=\"0.5\" fill=\"%23ffffff\" fill-opacity=\"0.1\"/%3E%3C/svg%3E')" }}></div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold mb-8 drop-shadow-lg">
          Be Among the First to Join The HR Hub Pro Network
        </h2>
        <p className="text-lg md:text-xl mb-10 max-w-3xl mx-auto text-hr-offwhite drop-shadow-md">
          We’re currently enrolling our first wave of HR professionals to deliver consulting projects for SMEs and startups. Joining early gives you:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
          {benefits.map((benefit, index) => (
            <Card key={index} className="bg-white text-hr-green p-6 rounded-lg shadow-xl border-b-4 border-hr-orange hover:scale-[1.03] transition-transform duration-300">
              <CardContent className="flex flex-col items-center text-center p-0">
                <div className="mb-4 p-3 bg-hr-offwhite rounded-full">
                  {benefit.icon}
                </div>
                <CardTitle className="text-xl font-semibold mb-2">{benefit.title}</CardTitle>
                <p className="text-gray-700 text-base">{benefit.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <CustomButton variant="secondary" onClick={() => window.location.href = '#join-network'}>
          Join the Waitlist Now
        </CustomButton>
      </div>
    </section>
  );
};

export default EarlyAccessOfferSection;