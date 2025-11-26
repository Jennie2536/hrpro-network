import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const RevenueShareTable = () => {
  const revenueShareData = [
    { level: 'Junior Associates', experience: '0–3 years', share: '50%' },
    { level: 'Associates', experience: '3–5 years', share: '55%' },
    { level: 'Senior Consultants', experience: '5–8 years', share: '57%' },
    { level: 'Lead Consultants', experience: '8+ years', share: '60%' },
    { level: 'Specialists', experience: 'Any level', share: '+3% premium on specialized assignments' },
  ];

  return (
    <section className="py-16 md:py-24 bg-hr-offwhite">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-hr-green mb-12">
          Transparent Revenue Sharing Model
        </h2>
        <p className="text-lg md:text-xl text-gray-700 mb-12 max-w-4xl mx-auto">
          We believe in fair compensation. Our transparent revenue-sharing model ensures you are rewarded based on your experience and the impact you deliver.
        </p>
        <Card className="max-w-4xl mx-auto shadow-lg border-hr-orange/20">
          <CardHeader className="bg-hr-green text-white rounded-t-lg py-4">
            <CardTitle className="text-2xl font-semibold">Revenue Share by Experience Level</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="bg-gray-100 hover:bg-gray-100">
                    <TableHead className="text-hr-green font-bold text-lg min-w-[150px] text-left">Level</TableHead>
                    <TableHead className="text-hr-green font-bold text-lg min-w-[150px] text-left">Experience</TableHead>
                    <TableHead className="text-hr-green font-bold text-lg min-w-[150px] text-left">Revenue Share</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {revenueShareData.map((row, index) => (
                    <TableRow key={index} className="hover:bg-gray-50 transition-colors duration-200">
                      <TableCell className="font-medium text-base text-hr-green text-left py-3">{row.level}</TableCell>
                      <TableCell className="text-base text-gray-700 text-left py-3">{row.experience}</TableCell>
                      <TableCell className="text-base text-gray-700 text-left py-3">{row.share}</TableCell>
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

export default RevenueShareTable;