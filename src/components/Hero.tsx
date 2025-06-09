import React from 'react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-b from-white to-blue-50 overflow-hidden min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 pt-16 lg:pt-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-left space-y-8">
              <h1 className="text-6xl lg:text-7xl font-bold tracking-tight text-[#1a237e]">
                School ERP
                <span className="inline-block">
                  <sup className="text-base align-super">©</sup>
                </span>
              </h1>
              
              <div className="space-y-6">
                <h2 className="text-2xl lg:text-3xl text-blue-600 font-medium">
                  An advanced and comprehensive school management software
                </h2>
                
                <p className="text-lg lg:text-xl text-gray-600 max-w-2xl">
                  Transform your educational institution with our state-of-the-art ERP system. 
                  Streamline administrative tasks, enhance communication, and focus on delivering quality education.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link
                  to="/request-demo"
                  className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
                >
                  Request Demo
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-blue-600 text-lg font-medium rounded-md text-blue-600 bg-transparent hover:bg-blue-50 transition-colors duration-200"
                >
                  Contact Sales
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-blue-50 rounded-2xl transform rotate-3"></div>
              <img
                src="/SCHOOL-ERP-MODULES.png"
                alt="School ERP Modules Overview"
                className="relative rounded-2xl shadow-xl transform -rotate-2 hover:rotate-0 transition-transform duration-300 max-w-md mx-auto"
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