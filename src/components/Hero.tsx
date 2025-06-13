import React from 'react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-b from-white to-blue-50 overflow-hidden min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 pt-28 lg:pt-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="text-left space-y-6 md:space-y-8">
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold tracking-tight text-[#1a237e]">
                School ERP
                <span className="inline-block">
                  <sup className="text-sm align-super">©</sup>
                </span>
              </h1>
              
              <div className="space-y-4 md:space-y-6">
                <h2 className="text-lg sm:text-xl lg:text-2xl text-blue-600 font-medium">
                  An advanced and comprehensive school management software
                </h2>
                
                <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-2xl">
                  Transform your educational institution with our state-of-the-art ERP system. 
                  Streamline administrative tasks, enhance communication, and focus on delivering quality education.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                <Link
                  to="/request-demo"
                  className="w-full sm:w-auto text-center inline-flex items-center justify-center px-5 py-2.5 sm:px-7 sm:py-3.5 border border-transparent text-sm sm:text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
                >
                  Request Demo
                </Link>
                <Link
                  to="/contact"
                  className="w-full sm:w-auto text-center inline-flex items-center justify-center px-5 py-2.5 sm:px-7 sm:py-3.5 border-2 border-blue-600 text-sm sm:text-base font-medium rounded-md text-blue-600 bg-transparent hover:bg-blue-50 transition-colors duration-200"
                >
                  Contact Sales
                </Link>
              </div>
            </div>

            <div className="relative mt-8 lg:mt-0">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-blue-50 rounded-2xl transform rotate-3"></div>
              <img
                src="/SCHOOL-ERP-MODULES.png"
                alt="School ERP Modules Overview"
                className="relative w-full max-w-lg mx-auto rounded-2xl shadow-xl transform -rotate-2 hover:rotate-0 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(#e0e7ff_1px,transparent_1px)] [background-size:16px_16px] opacity-25"></div>
      </div>
    </div>
  );
};

export default Hero;