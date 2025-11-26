import React from 'react';
import { Card } from '@/components/ui/card';

// Import your images
import proPic2 from '@/assets/pro-pic2.jpeg';
import proPic12 from '@/assets/pro-pic12.jpeg';
import proPic6 from '@/assets/pro-pic6.jpeg';
import proPic10 from '@/assets/pro-pic10.jpg';
import proPic15 from '@/assets/pro-pic15.jpeg';
import proPic14 from '@/assets/pro-pic14.jpg';

const ImageGallerySection = () => {
  const images = [
    { id: 1, src: proPic2, alt: 'Collaborative Workshops', caption: 'Collaborative Workshops' },
    { id: 2, src: proPic12, alt: 'Strategic Planning Sessions', caption: 'Strategic Planning Sessions' },
    { id: 3, src: proPic6, alt: 'Networking Events', caption: 'Networking Events' },
    { id: 4, src: proPic10, alt: 'Client Engagement', caption: 'Client Engagement' },
    { id: 5, src: proPic15, alt: 'Professional Development', caption: 'Professional Development' },
    { id: 6, src: proPic14, alt: 'Team Brainstorming', caption: 'Team Brainstorming' },
  ];

  return (
    <section id="image-gallery" className="bg-hr-offwhite py-16 md:py-24">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-hr-green mb-8">
          Our Community in Action
        </h2>
        <p className="text-lg md:text-xl text-gray-700 mb-12 max-w-3xl mx-auto">
          See how The HR Hub Pro Network connects professionals and drives impact across Africa.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {images.map((image) => (
            <Card key={image.id} className="shadow-lg border-hr-green/20 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 overflow-hidden flex flex-col group">
              <div className="relative w-full h-64 overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-hr-black bg-opacity-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-xl font-semibold text-center p-4">{image.caption}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageGallerySection;