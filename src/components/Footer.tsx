
import React from 'react';
import { ChevronUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-navy/90 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <button 
            onClick={scrollToTop}
            className="bg-salesforce text-white p-3 rounded-full mb-6 hover:bg-salesforce/80 transition-colors"
            aria-label="Back to top"
          >
            <ChevronUp size={24} />
          </button>
          
          <h3 className="text-2xl font-bold mb-2">Pavani Pasupuleti</h3>
          <p className="text-gray-300 mb-6">Salesforce Developer</p>
          
          <div className="flex items-center justify-center space-x-4 mb-6">
            <a href="#" className="text-white hover:text-salesforce transition-colors">
              LinkedIn
            </a>
            <span className="text-gray-500">•</span>
            <a href="#" className="text-white hover:text-salesforce transition-colors">
              GitHub
            </a>
            <span className="text-gray-500">•</span>
            <a href="#" className="text-white hover:text-salesforce transition-colors">
              Trailhead
            </a>
          </div>
          
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Pavani Pasupuleti. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
