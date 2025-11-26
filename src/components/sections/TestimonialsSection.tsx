import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: 'I got my first HR consulting project through The HR Hub — they managed the client while I focused on delivery.',
      author: 'Chidinma A., HR Consultant, Lagos',
    },
    {
      quote: 'It’s not freelancing. It’s a professional pathway under a trusted HR brand.',
      author: 'Stephen O., People Operations Lead, Abuja',
    },
  ];

  return (
    <section id="testimonials" className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-hr-green mb-12">
          What Our Professionals Say
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="shadow-lg border-hr-orange/20 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 flex flex-col justify-between">
              <CardContent className="p-6 text-left">
                <Quote size={40} className="text-hr-orange mb-4 opacity-70" />
                <p className="text-lg text-gray-800 italic mb-4">"{testimonial.quote}"</p>
                <p className="font-semibold text-hr-green text-base">— {testimonial.author}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;