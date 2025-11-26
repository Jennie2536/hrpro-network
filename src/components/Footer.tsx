import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Instagram, X, Facebook, Phone, Mail, MessageSquare } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'How It Works', path: '/how-it-works' },
    { name: 'Join Network', path: '#join-network' },
    { name: 'Contact', path: '/contact' }, // Added Contact link to footer quick links
  ];

  const resourceLinks = [
    { name: 'Articles & Guides', path: '/resources/articles-guides' },
    { name: 'Case Studies', path: '/resources/case-studies' },
    { name: 'Webinars & Workshops', path: '/resources/webinars-workshops' },
  ];

  return (
    <footer className="bg-hr-black text-white py-12 md:py-16 font-poppins">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 border-b border-gray-700 pb-8 mb-8">
          {/* Column 1: Logo and Description */}
          <div className="col-span-1 md:col-span-1 text-center md:text-left">
            <Link to="/" className="flex items-center justify-center md:justify-start space-x-2 mb-4">
              <span className="text-3xl font-bold text-hr-orange">HR</span>
              <span className="text-3xl font-bold text-white">Hub</span>
              <span className="text-lg font-medium ml-1 text-hr-offwhite">Pro Network</span>
            </Link>
            <p className="text-gray-400 text-sm max-w-xs mx-auto md:mx-0">
              Connecting Africa’s HR Professionals to Real Business Impact.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="col-span-1 text-center md:text-left">
            <h3 className="text-lg font-semibold text-hr-orange mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-hr-orange transition-colors text-base"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div className="col-span-1 text-center md:text-left">
            <h3 className="text-lg font-semibold text-hr-orange mb-4">Resources</h3>
            <ul className="space-y-2">
              {resourceLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-hr-orange transition-colors text-base"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Social */}
          <div className="col-span-1 text-center md:text-left">
            <h3 className="text-lg font-semibold text-hr-orange mb-4">Contact Us</h3>
            <ul className="space-y-2 mb-6">
              <li>
                <a href="mailto:contact@thehrhub.com.ng" className="text-gray-300 hover:text-hr-orange transition-colors text-base flex items-center justify-center md:justify-start">
                  <Mail size={18} className="mr-2" /> contact@thehrhub.com.ng
                </a>
              </li>
              <li>
                <a href="tel:+2342013309296" className="text-gray-300 hover:text-hr-orange transition-colors text-base flex items-center justify-center md:justify-start">
                  <Phone size={18} className="mr-2" /> 02013309296
                </a>
              </li>
              <li>
                <a href="https://wa.me/2349167676044" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-hr-orange transition-colors text-base flex items-center justify-center md:justify-start">
                  <MessageSquare size={18} className="mr-2" /> +234 916 767 6044 (WhatsApp)
                </a>
              </li>
            </ul>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="https://www.linkedin.com/company/thehrhub-ng/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-hr-orange transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="https://x.com/theHRhub_ng" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-hr-orange transition-colors">
                <X size={24} />
              </a>
              <a href="https://web.facebook.com/thehrhub.01" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-hr-orange transition-colors">
                <Facebook size={24} />
              </a>
              <a href="https://www.instagram.com/thehrhub.ng/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-hr-orange transition-colors">
                <Instagram size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom section: Copyright and Legal Links */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 space-y-4 md:space-y-0">
          <p>&copy; {currentYear} The HR Hub Nigeria. All rights reserved.</p>
          <div className="flex space-x-4">
            <Link to="/privacy-policy" className="hover:text-hr-orange transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:text-hr-orange transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;