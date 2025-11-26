import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { CheckCircle, XCircle } from 'lucide-react';

const WhatMakesUsDifferentSection = () => {
  const comparisonData = [
    {
      feature: 'Talent Deployment',
      traditional: 'Freelancers compete for gigs',
      hrHub: 'Professionals deployed under The HR Hub Nigeria',
    },
    {
      feature: 'Client Vetting',
      traditional: 'No client vetting',
      hrHub: 'Verified businesses and ongoing partnerships',
    },
    {
      feature: 'Support & Tools',
      traditional: 'No guidance or tools',
      hrHub: 'Training, onboarding, and project support',
    },
    {
      feature: 'Earnings Structure',
      traditional: 'Unclear earnings',
      hrHub: 'Transparent revenue-sharing structure',
    },
    {
      feature: 'Professional Growth',
      traditional: 'Isolated growth',
      hrHub: 'Community, mentorship, and continuous development',
    },
  ];

  return (
    <section id="what-makes-us-different" className="bg-hr-offwhite py-16 md:py-24">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-hr-green mb-12">
          We’re Not Freelance. We’re Structured.
        </h2>
        <p className="text-lg md:text-xl text-gray-700 mb-12 max-w-4xl mx-auto">
          Discover the fundamental differences between traditional freelancing and joining The HR Hub Pro Network. We offer a structured, supportive, and growth-oriented environment for HR professionals.
        </p>

        <Card className="max-w-5xl mx-auto shadow-lg border-hr-orange/20">
          <CardHeader className="bg-hr-green text-white rounded-t-lg py-4">
            <CardTitle className="text-2xl font-semibold">Comparison: Freelance vs. The HR Hub Pro Network</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="bg-gray-100 hover:bg-gray-100">
                    <TableHead className="text-hr-green font-bold text-lg min-w-[150px] md:min-w-[200px] text-left">Feature</TableHead>
                    <TableHead className="text-hr-green font-bold text-lg min-w-[200px] md:min-w-[250px] text-left">Traditional Platforms</TableHead>
                    <TableHead className="text-hr-green font-bold text-lg min-w-[200px] md:min-w-[250px] text-left">The HR Hub Pro Network</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {comparisonData.map((row, index) => (
                    <TableRow key={index} className="hover:bg-gray-50 transition-colors duration-200">
                      <TableCell className="font-medium text-base text-hr-green text-left py-3">{row.feature}</TableCell>
                      <TableCell className="text-base text-gray-700 text-left py-3">
                        <div className="flex items-center">
                          <XCircle size={20} className="text-red-500 mr-2 flex-shrink-0" />
                          <span>{row.traditional}</span>
                        </div>
                      </TableCell>
                      <TableCell className="text-base text-gray-700 text-left py-3">
                        <div className="flex items-center">
                          <CheckCircle size={20} className="text-hr-green mr-2 flex-shrink-0" />
                          <span>{row.hrHub}</span>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default WhatMakesUsDifferentSection;