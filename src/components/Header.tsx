import React from 'react';
import { Link } from 'react-router-dom';
import { CustomButton } from './CustomButton';
import { Menu, X } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const isMobile = useIsMobile();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'How It Works', path: '/how-it-works' },
    { name: 'Join Network', path: '#join-network' },
    { name: 'Resources', path: '/resources' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="bg-hr-green text-white py-4 shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link to="/" className="flex items-center space-x-2">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-hr-orange">HR</span>
            <span className="text-2xl font-bold text-white">Hub</span>
            <span className="text-sm font-medium ml-1 text-hr-offwhite">Pro Network</span>
          </div>
        </Link>

        {isMobile ? (
          <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        ) : (
          <nav className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-white hover:text-hr-orange transition-colors text-lg font-medium"
              >
                {link.name}
              </Link>
            ))}
            <CustomButton variant="secondary" onClick={() => window.location.href = '#join-network'}>
              Get Started
            </CustomButton>
          </nav>
        )}
      </div>

      {isMobile && isOpen && (
        <div className="md:hidden bg-hr-green absolute top-full left-0 w-full shadow-lg pb-4">
          <nav className="flex flex-col items-center space-y-4 mt-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-white hover:text-hr-orange transition-colors text-lg font-medium"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <CustomButton variant="secondary" onClick={() => { window.location.href = '#join-network'; setIsOpen(false); }}>
              Get Started
            </CustomButton>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;