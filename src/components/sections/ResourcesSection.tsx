import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen, Newspaper, Video } from 'lucide-react';
import DownloadResourceDialog from '../DownloadResourceDialog';
import { Link } from 'react-router-dom'; // Import Link

const ResourcesSection = () => {
  const resources = [
    {
      icon: <BookOpen size={36} className="text-hr-orange mb-3" />,
      title: 'Articles & Guides',
      description: 'Dive into our expert articles and comprehensive guides on various HR topics.',
      link: '/resources/articles-guides', // Updated link
    },
    {
      icon: <Newspaper size={36} className="text-hr-orange mb-3" />,
      title: 'Case Studies',
      description: 'Explore real-world examples of HR challenges and successful solutions.',
      link: '/resources/case-studies', // Updated link
    },
    {
      icon: <Video size={36} className="text-hr-orange mb-3" />,
      title: 'Webinars & Workshops',
      description: 'Access recordings of our professional development webinars and workshops.',
      link: '/resources/webinars-workshops', // Updated link
    },
  ];

  return (
    <section id="resources" className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-hr-green mb-12">
          Resources for HR Professionals
        </h2>
        <p className="text-lg md:text-xl text-gray-700 mb-12 max-w-3xl mx-auto">
          Stay ahead with our curated collection of articles, case studies, and professional development materials designed for Africa's HR community.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {resources.map((resource, index) => (
            <Card key={index} className="shadow-lg border-hr-green/20 hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6 flex flex-col items-center text-center">
                {resource.icon}
                <CardTitle className="text-xl font-semibold text-hr-green mb-2">{resource.title}</CardTitle>
                <p className="text-gray-700 text-base mb-4">{resource.description}</p>
                <Link to={resource.link} className="text-hr-orange hover:underline font-medium">
                  Learn More
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <DownloadResourceDialog
          triggerText="Download Free Resource"
          resourceTitle="💡 Free Resource: “How to Build a Successful HR Consulting Career in Africa”"
          resourceDescription="Get your free guide to building a thriving HR consulting career in Africa. Learn strategies, tips, and essential steps to succeed."
          downloadLink="/downloads/how-to-build-hr-consulting-career.pdf" // Placeholder link
        />
      </div>
    </section>
  );
};

export default ResourcesSection;