import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { MadeWithDyad } from '@/components/made-with-dyad';
import ScrollToTopButton from '@/components/ScrollToTopButton';
import { Link } from 'react-router-dom';
import { CustomButton } from '@/components/CustomButton';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { BookOpen, Tag } from 'lucide-react';

const CaseStudiesPage = () => {
  const caseStudies = [
    {
      id: 1,
      title: 'Optimizing Talent Acquisition for a Growing Tech Startup',
      client: 'InnovateTech Solutions',
      challenge: 'High attrition rate and slow hiring process for specialized roles.',
      solution: 'Implemented a streamlined recruitment pipeline, introduced competency-based interviewing, and developed an attractive employer branding strategy.',
      result: 'Reduced time-to-hire by 30% and decreased first-year attrition by 15%.',
      tags: ['Recruitment', 'Talent Acquisition', 'Employer Branding'],
      link: '#', // Placeholder for full case study link
    },
    {
      id: 2,
      title: 'Enhancing Employee Engagement in a Manufacturing Company',
      client: 'AfriBuild Manufacturing',
      challenge: 'Low employee morale and lack of clear communication channels.',
      solution: 'Conducted employee surveys, facilitated leadership workshops, and introduced a new internal communication platform and recognition program.',
      result: 'Increased employee engagement scores by 25% and improved inter-departmental collaboration.',
      tags: ['Employee Engagement', 'Internal Communications', 'Leadership Development'],
      link: '#', // Placeholder for full case study link
    },
    {
      id: 3,
      title: 'Developing a Comprehensive L&D Framework for a Financial Institution',
      client: 'Apex Financial Group',
      challenge: 'Outdated training programs and difficulty upskilling employees for new digital tools.',
      solution: 'Designed a blended learning approach, curated industry-specific courses, and implemented a continuous learning culture with mentorship programs.',
      result: 'Achieved 90% employee participation in new training modules and a significant improvement in digital literacy.',
      tags: ['Learning & Development', 'Training', 'Upskilling'],
      link: '#', // Placeholder for full case study link
    },
    {
      id: 4,
      title: 'Streamlining HR Operations for a Retail Chain Expansion',
      client: 'MegaMart Retail',
      challenge: 'Inefficient HR processes and lack of standardization across new store locations.',
      solution: 'Developed standardized HR policies, implemented a cloud-based HRIS, and provided training for HR teams in new branches.',
      result: 'Improved HR operational efficiency by 40% and ensured compliance across all locations.',
      tags: ['HR Operations', 'HRIS Implementation', 'Policy Development'],
      link: '#', // Placeholder for full case study link
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-16 md:py-24">
        <h1 className="text-4xl md:text-5xl font-bold text-hr-green mb-8 text-center">Case Studies</h1>
        <p className="text-lg text-gray-700 mb-12 max-w-3xl mx-auto text-center">
          Explore real-world examples of HR challenges and successful solutions implemented by The HR Hub Pro Network for businesses across Africa.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {caseStudies.map((study) => (
            <Card key={study.id} className="shadow-lg border-hr-orange/20 hover:shadow-xl transition-shadow duration-300 flex flex-col">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-hr-green mb-2">{study.title}</CardTitle>
                <CardDescription className="text-gray-600">Client: {study.client}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-gray-700 mb-3">
                  <span className="font-semibold text-hr-orange">Challenge:</span> {study.challenge}
                </p>
                <p className="text-gray-700 mb-3">
                  <span className="font-semibold text-hr-orange">Solution:</span> {study.solution}
                </p>
                <p className="text-gray-700 mb-4">
                  <span className="font-semibold text-hr-orange">Result:</span> {study.result}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {study.tags.map((tag, index) => (
                    <span key={index} className="flex items-center text-sm bg-hr-offwhite text-hr-green px-3 py-1 rounded-full border border-hr-green/30">
                      <Tag size={14} className="mr-1" /> {tag}
                    </span>
                  ))}
                </div>
                <CustomButton variant="primary" asChild className="w-full">
                  <a href={study.link} target="_blank" rel="noopener noreferrer">
                    <BookOpen size={20} className="mr-2" /> Read Full Case Study
                  </a>
                </CustomButton>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
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

export default CaseStudiesPage;