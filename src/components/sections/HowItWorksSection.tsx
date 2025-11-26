import React from 'react';
import { CustomButton } from '../CustomButton';
import { FileText, Award, Briefcase, DollarSign } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const HowItWorksSection = () => {
  const steps = [
    {
      icon: <FileText size={48} className="text-hr-orange mb-4" />,
      title: '1. Apply to Join',
      whatHappens: 'Join The HR Hub’s vetted professional pool',
      whatYouDo: 'Submit your profile, experience level, and expertise',
    },
    {
      icon: <Award size={48} className="text-hr-orange mb-4" />,
      title: '2. Get Verified & Onboarded',
      whatHappens: 'We integrate you into The HR Hub’s delivery system',
      whatYouDo: 'Attend onboarding and access our project tools',
    },
    {
      icon: <Briefcase size={48} className="text-hr-orange mb-4" />,
      title: '3. Get Matched',
      whatHappens: 'We assign client projects that fit your skills',
      whatYouDo: 'Review project brief and confirm participation',
    },
    {
      icon: <DollarSign size={48} className="text-hr-orange mb-4" />,
      title: '4. Deliver Professionally',
      whatHappens: 'You deliver as part of The HR Hub team',
      whatYouDo: 'Focus on quality delivery — we handle coordination and payout',
    },
  ];

  return (
    <section id="how-it-works" className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-hr-green mb-12">
          A Structured Network — Not a Marketplace
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {steps.map((step, index) => (
            <Card key={index} className="shadow-lg border-hr-green/20 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 flex flex-col justify-between">
              <CardContent className="p-6 flex flex-col items-center text-center">
                {step.icon}
                <CardTitle className="text-xl font-semibold text-hr-green mb-4">{step.title}</CardTitle>
                <div className="text-gray-700 text-base">
                  <p className="font-medium text-hr-orange mb-1">What Happens:</p>
                  <p className="mb-3">{step.whatHappens}</p>
                  <p className="font-medium text-hr-orange mb-1">What You Do:</p>
                  <p>{step.whatYouDo}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <CustomButton variant="secondary" onClick={() => window.location.href = '#join-network'}>
          Apply to Join Now
        </CustomButton>
      </div>
    </section>
  );
};

export default HowItWorksSection;