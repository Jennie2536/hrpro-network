import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { MadeWithDyad } from '@/components/made-with-dyad';
import ScrollToTopButton from '@/components/ScrollToTopButton';
import { Link } from 'react-router-dom';
import { CustomButton } from '@/components/CustomButton';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { CalendarDays, PlayCircle } from 'lucide-react';

const WebinarsAndWorkshopsPage = () => {
  const upcomingWebinars = [
    {
      id: 1,
      title: 'Future-Proofing HR: AI & Automation in Talent Management',
      date: 'October 26, 2024',
      time: '2:00 PM WAT',
      description: 'Explore how artificial intelligence and automation are reshaping talent acquisition, development, and retention strategies.',
      link: '#', // Placeholder for registration link
    },
    {
      id: 2,
      title: 'Building a Resilient Workforce: Mental Health & Well-being Strategies',
      date: 'November 15, 2024',
      time: '11:00 AM WAT',
      description: 'Learn practical strategies to support employee mental health and foster a resilient, productive workforce.',
      link: '#', // Placeholder for registration link
    },
  ];

  const pastWebinars = [
    {
      id: 101,
      title: 'Navigating Hybrid Work Models: Best Practices for African Businesses',
      date: 'August 10, 2024',
      description: 'A deep dive into successful hybrid work strategies tailored for the African business landscape.',
      videoLink: '#', // Placeholder for video recording link
    },
    {
      id: 102,
      title: 'The Power of Data: HR Analytics for Strategic Decision Making',
      date: 'July 22, 2024',
      description: 'Understand how to leverage HR data to drive strategic business outcomes and improve organizational performance.',
      videoLink: '#', // Placeholder for video recording link
    },
    {
      id: 103,
      title: 'Attracting Top Talent: Employer Branding in a Competitive Market',
      date: 'June 5, 2024',
      description: 'Strategies for building a compelling employer brand that attracts and retains high-caliber professionals.',
      videoLink: '#', // Placeholder for video recording link
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-16 md:py-24">
        <h1 className="text-4xl md:text-5xl font-bold text-hr-green mb-8 text-center">Webinars & Workshops</h1>
        <p className="text-lg text-gray-700 mb-12 max-w-3xl mx-auto text-center">
          Access recordings of our professional development webinars and workshops, designed to keep you at the forefront of HR trends and best practices in Africa.
        </p>

        {/* Upcoming Webinars Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-hr-orange mb-8 text-center">Upcoming Sessions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {upcomingWebinars.map((webinar) => (
              <Card key={webinar.id} className="shadow-lg border-hr-green/20 hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-2xl font-semibold text-hr-green">{webinar.title}</CardTitle>
                  <CardDescription className="flex items-center text-gray-600 mt-2">
                    <CalendarDays size={18} className="mr-2" /> {webinar.date} at {webinar.time}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">{webinar.description}</p>
                  <CustomButton variant="primary" asChild>
                    <a href={webinar.link} target="_blank" rel="noopener noreferrer">Register Now</a>
                  </CustomButton>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Past Webinars Section */}
        <section>
          <h2 className="text-3xl md:text-4xl font-bold text-hr-orange mb-8 text-center">Past Webinars & Recordings</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pastWebinars.map((webinar) => (
              <Card key={webinar.id} className="shadow-lg border-hr-orange/20 hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-hr-green">{webinar.title}</CardTitle>
                  <CardDescription className="flex items-center text-gray-600 mt-2">
                    <CalendarDays size={16} className="mr-2" /> {webinar.date}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4 text-sm">{webinar.description}</p>
                  <CustomButton variant="secondary" asChild>
                    <a href={webinar.videoLink} target="_blank" rel="noopener noreferrer">
                      <PlayCircle size={20} className="mr-2" /> Watch Recording
                    </a>
                  </CustomButton>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

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

export default WebinarsAndWorkshopsPage;