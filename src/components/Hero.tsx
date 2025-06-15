import React from 'react';
import { Link } from 'react-router-dom';
import ScrollAnimation from './ScrollAnimation';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-b from-white to-blue-50 overflow-hidden min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 pt-28 lg:pt-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="text-left space-y-6 md:space-y-8">
              <ScrollAnimation direction="left">
                <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold tracking-tight text-[#1a237e]">
                  School ERP
                  <span className="inline-block">
                    <sup className="text-sm align-super">©</sup>
                  </span>
                </h1>
              </ScrollAnimation>
              
              <div className="space-y-4 md:space-y-6">
                <ScrollAnimation direction="left" delay={0.2}>
                  <h2 className="text-lg sm:text-xl lg:text-2xl text-blue-600 font-medium">
                    An advanced and comprehensive school management software
                  </h2>
                </ScrollAnimation>
                
                <ScrollAnimation direction="left" delay={0.4}>
                  <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-2xl">
                    Transform your educational institution with our state-of-the-art ERP system. 
                    Streamline administrative tasks, enhance communication, and focus on delivering quality education.
                  </p>
                </ScrollAnimation>

                <ScrollAnimation direction="up" delay={0.6}>
                  <div className="flex flex-wrap gap-4 mt-8">
                    <Link
                      to="/request-demo"
                      className="btn-primary transform hover:scale-105 transition-transform duration-200"
                    >
                      Request Demo
                    </Link>
                    <Link
                      to="/contact"
                      className="btn-outline transform hover:scale-105 transition-transform duration-200"
                    >
                      Contact Sales
                    </Link>
                  </div>
                </ScrollAnimation>
              </div>
            </div>

            <ScrollAnimation direction="right" delay={0.3}>
              <div className="relative">
                <img
                  src="/SCHOOL-ERP-MODULES.png"
                  alt="School ERP System"
                  className="w-full h-auto max-w-lg mx-auto"
                />
              </div>
            </ScrollAnimation>
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