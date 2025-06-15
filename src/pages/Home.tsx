import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Solutions from '../components/Solutions';
import ScrollAnimation from '../components/ScrollAnimation';
import ContactForm from '../components/ContactForm';
import { 
  CheckCircleIcon,
  ClockIcon,
  CogIcon,
  ArrowPathIcon
} from '@heroicons/react/24/outline';

const Home: React.FC = () => {
  const benefits = [
    {
      icon: <CheckCircleIcon className="w-8 h-8" />,
      title: "Comprehensive Solution",
      description: "All-in-one school management system handling admissions, academics, fees, exams, and alumni."
    },
    {
      icon: <ClockIcon className="w-8 h-8" />,
      title: "24/7 Support",
      description: "Round-the-clock dedicated support team ready to assist you whenever you need help with any aspect of the system."
    },
    {
      icon: <CogIcon className="w-8 h-8" />,
      title: "Easy Integration",
      description: "Seamlessly integrates with your existing systems and workflows for a smooth transition and enhanced efficiency."
    },
    {
      icon: <ArrowPathIcon className="w-8 h-8" />,
      title: "Regular Updates",
      description: "Continuous improvements and new features to keep your institution at the forefront of educational technology."
    }
  ];

  return (
    <>
      <Helmet>
        <title>School ERP - Modern School Management System</title>
        <meta
          name="description"
          content="Transform your educational institution with our comprehensive school management system. Streamline administration, enhance learning, and improve communication."
        />
      </Helmet>

      <div className="min-h-screen">
        <ScrollAnimation>
          <Hero />
        </ScrollAnimation>

        {/* Why Choose Us Section */}
        <div className="relative py-20 bg-gradient-to-b from-white to-blue-50">
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollAnimation direction="up">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
                  Why Choose School ERP?
                </h2>
                <p className="mt-4 text-xl text-gray-600">
                  Empowering educational institutions with cutting-edge technology
                </p>
              </div>
            </ScrollAnimation>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <ScrollAnimation key={benefit.title} direction="up" delay={0.2 * index}>
                  <div className="relative group h-full">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl transform rotate-2 group-hover:rotate-0 transition-transform duration-300 opacity-10 group-hover:opacity-20"></div>
                    <div className="relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full flex flex-col">
                      <div className="text-blue-600 mb-6 transform group-hover:scale-110 transition-transform duration-300">
                        {benefit.icon}
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-600 group-hover:text-gray-900 transition-colors duration-200 flex-grow">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </div>

        <ScrollAnimation delay={0.2}>
          <ContactForm />
        </ScrollAnimation>

        <ScrollAnimation delay={0.2}>
          <Features />
        </ScrollAnimation>

        <ScrollAnimation delay={0.4}>
          <Solutions />
        </ScrollAnimation>
      </div>
    </>
  );
};

// Add a CSS class for the grid pattern background
const style = document.createElement('style');
style.textContent = `
  .bg-grid-pattern {
    background-image: linear-gradient(to right, #e2e8f0 1px, transparent 1px),
                      linear-gradient(to bottom, #e2e8f0 1px, transparent 1px);
    background-size: 24px 24px;
  }
`;
document.head.appendChild(style);

export default Home; 