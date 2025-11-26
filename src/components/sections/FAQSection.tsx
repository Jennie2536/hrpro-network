import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "What is The HR Hub Pro Network?",
      answer: "The HR Hub Pro Network is Africa’s fastest-growing community of vetted HR professionals, deployed by The HR Hub Nigeria to deliver high-impact consulting projects for SMEs and startups across the continent. We are a structured network, not a freelance marketplace."
    },
    {
      question: "How is this different from traditional freelancing platforms?",
      answer: "Unlike traditional freelancing, you operate under The HR Hub Nigeria's brand and guidance. We handle client acquisition, project vetting, and coordination, allowing you to focus solely on delivering quality HR solutions. We also offer transparent revenue sharing and professional development."
    },
    {
      question: "What kind of projects can I expect?",
      answer: "You'll be matched with structured consulting projects for SMEs and startups, covering areas like HR Generalist & Operations, Recruitment, L&D, HR Analytics, Compensation & Benefits, Employee Relations, and Employer Branding."
    },
    {
      question: "What are the requirements to join?",
      answer: "We are looking for HR professionals at all experience levels (junior, associate, senior, lead) with expertise in various HR domains. A strong professional background and a commitment to delivering high-quality work are essential."
    },
    {
      question: "How does the revenue sharing model work?",
      answer: "Our revenue sharing is transparent and based on your experience level, ranging from 50% for Junior Associates to 60% for Lead Consultants, with a premium for Specialists on certain assignments. Details are provided upon successful application."
    },
    {
      question: "Do I need to find my own clients?",
      answer: "No, The HR Hub Nigeria handles client acquisition and project matching. We connect you with vetted businesses that require your expertise, so you can focus on delivery."
    },
    {
      question: "What support and resources are available to network members?",
      answer: "Members receive onboarding, access to project tools, ongoing support, and professional development resources including articles, case studies, webinars, and workshops to help you stay at the forefront of HR trends."
    }
  ];

  return (
    <section id="faq" className="bg-hr-offwhite py-16 md:py-24">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-hr-green mb-8">
          Frequently Asked Questions
        </h2>
        <p className="text-lg md:text-xl text-gray-700 mb-12 max-w-3xl mx-auto">
          Have questions about joining The HR Hub Pro Network? Find answers to common queries below.
        </p>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-hr-green/20">
                <AccordionTrigger className="text-lg font-semibold text-hr-green hover:no-underline hover:text-hr-orange transition-colors py-4 text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 text-base text-left pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;