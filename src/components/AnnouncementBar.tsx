import React from 'react';
import { PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline';

const AnnouncementBar: React.FC = () => {
  return (
    <div className="hidden sm:block bg-gradient-to-r from-blue-600 to-blue-700 text-white py-2 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 rounded-full bg-blue-400 opacity-10 -top-48 -left-24 animate-pulse"></div>
        <div className="absolute w-96 h-96 rounded-full bg-blue-400 opacity-10 -bottom-48 -right-24 animate-pulse delay-300"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center relative z-10">
          <div className="flex items-center space-x-6">
            <div className="flex items-center">
              <span className="font-bold animate-pulse">Sales Enquiry</span>
            </div>
            <div className="hidden sm:flex items-center space-x-4">
              <div className="flex items-center text-sm">
                <PhoneIcon className="h-4 w-4 mr-1" />
                <a href="tel:+919259447270" className="hover:text-blue-100 transition-colors duration-300">
                +91 9259447270
                </a>
              </div>
              <div className="flex items-center text-sm">
                <PhoneIcon className="h-4 w-4 mr-1" />
                <a href="email:" className="hover:text-blue-100 transition-colors duration-300">
                  schoolerp@gmail.com
                </a>
              </div>
            </div>
          </div>
          
          <button className="hidden sm:block bg-white text-blue-600 px-4 py-1 rounded-full text-sm font-medium hover:bg-blue-50 transition-colors duration-300">
            TALK TO US!
          </button>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementBar; 