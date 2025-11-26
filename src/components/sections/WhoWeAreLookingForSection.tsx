import React from 'react';
import { Card, CardContent, CardTitle } from '@/components/ui/card';
import { Users, Search, GraduationCap, BarChart, DollarSign, Handshake, Megaphone, BriefcaseBusiness } from 'lucide-react';
import { CustomButton } from '../CustomButton';

const WhoWeAreLookingForSection = () => {
  const categories = [
    { name: 'HR Generalists & Operations Experts', icon: <Users size={36} className="text-hr-orange" />, description: 'Streamline HR processes, manage employee lifecycles, and ensure smooth daily operations.' },
    { name: 'Recruiters & Talent Sourcers', icon: <Search size={36} className="text-hr-orange" />, description: 'Identify, attract, and onboard top talent for diverse roles across industries.' },
    { name: 'L&D and Training Consultants', icon: <GraduationCap size={36} className="text-hr-orange" />, description: 'Design and deliver impactful learning programs that foster employee growth and skill development.' },
    { name: 'HR Analysts & Workforce Data Specialists', icon: <BarChart size={36} className="text-hr-orange" />, description: 'Leverage data to provide strategic insights, optimize workforce planning, and improve HR decision-making.' },
    { name: 'Compensation & Benefits Analysts', icon: <DollarSign size={36} className="text-hr-orange" />, description: 'Develop competitive compensation structures and benefits packages to attract and retain employees.' },
    { name: 'Employee Relations & Engagement Leads', icon: <Handshake size={36} className="text-hr-orange" />, description: 'Foster positive workplace environments, manage conflicts, and drive employee engagement initiatives.' },
    { name: 'Employer Branding Professionals', icon: <Megaphone size={36} className="text-hr-orange" />, description: 'Craft compelling employer brands that attract high-caliber candidates and enhance organizational reputation.' },
    { name: 'HR Tech & Digital Transformation Specialists', icon: <BriefcaseBusiness size={36} className="text-hr-orange" />, description: 'Guide businesses through HR technology adoption and digital transformation initiatives.' },
  ];

  return (
    <section id="who-we-are-looking-for" className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-hr-green mb-8">
          We’re Building Africa’s Strongest HR Delivery Network
        </h2>
        <p className="text-lg md:text-xl text-gray-700 mb-12 max-w-3xl mx-auto">
          We are actively seeking passionate and skilled HR professionals across various specializations to join our growing network. If you're ready to make a real impact, we want to hear from you.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-6xl mx-auto mb-12">
          {categories.map((category, index) => (
            <Card key={index} className="shadow-lg border-hr-green/20 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 flex flex-col items-center justify-start p-6 text-left">
              <CardContent className="flex flex-col items-center text-center p-0">
                <div className="mb-4 p-3 bg-hr-offwhite rounded-full border border-hr-orange/30">
                  {category.icon}
                </div>
                <CardTitle className="text-xl font-semibold text-hr-green mb-2">{category.name}</CardTitle>
                <p className="text-gray-700 text-sm">{category.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
          <span className="font-semibold text-hr-orange">Note:</span> Whether you’re a junior, associate, or senior HR professional, you’ll operate as part of The HR Hub Nigeria’s consulting arm — working on real business projects, under our brand and guidance.
        </p>
        <CustomButton variant="secondary" onClick={() => window.location.href = '#join-network'}>
          See Open Roles & Apply
        </CustomButton>
      </div>
    </section>
  );
};

export default WhoWeAreLookingForSection;