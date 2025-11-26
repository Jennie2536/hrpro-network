import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase, TrendingUp, Users, ShieldCheck } from 'lucide-react';
import { CustomButton } from '../CustomButton';

const WhyJoinSection = () => {
  const whatYoullGain = [
    {
      icon: <Briefcase size={32} className="text-hr-orange" />,
      title: 'Structured Client Projects',
      description: 'Access vetted, high-impact client projects without the hassle of client acquisition.',
    },
    {
      icon: <TrendingUp size={32} className="text-hr-orange" />,
      title: 'Professional Growth',
      description: 'Benefit from continuous professional development and mentorship opportunities.',
    },
    {
      icon: <Users size={32} className="text-hr-orange" />,
      title: 'Professional Visibility',
      description: 'Operate under The HR Hub Nigeria brand, enhancing your professional credibility and reach.',
    },
    {
      icon: <ShieldCheck size={32} className="text-hr-orange" />,
      title: 'Community & Support',
      description: 'Join a network of peers, gain mentorship, and access continuous professional development.',
    },
  ];

  return (
    <section id="why-join" className="bg-hr-offwhite py-16 md:py-24">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-hr-green mb-8">
          Not Freelancers. HR Professionals — Backed by The HR Hub Nigeria.
        </h2>
        <p className="text-lg md:text-xl text-gray-700 mb-12 max-w-4xl mx-auto">
          We’re building a system where HR professionals grow within a trusted structure — not a gig marketplace. As part of The HR Hub Nigeria, you’ll gain access to structured consulting opportunities, professional development, and the backing of a recognized brand.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 max-w-6xl mx-auto">
          {whatYoullGain.map((item, index) => (
            <Card key={index} className="shadow-lg border-hr-green/20 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 flex flex-col items-center text-center p-6">
              <div className="mb-4 p-3 bg-white rounded-full border border-hr-orange/30"> {/* Changed bg-hr-offwhite to bg-white */}
                {item.icon}
              </div>
              <CardTitle className="text-xl font-semibold text-hr-green mb-2">{item.title}</CardTitle>
              <p className="text-gray-700 text-base">{item.description}</p>
            </Card>
          ))}
        </div>

        <CustomButton variant="secondary" onClick={() => window.location.href = '#join-network'}>
          Join The HR Pro Network Today
        </CustomButton>
      </div>
    </section>
  );
};

export default WhyJoinSection;