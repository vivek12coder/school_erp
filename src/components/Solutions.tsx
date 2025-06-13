import React from 'react';
import {
  AcademicCapIcon,
  UserGroupIcon,
  ClipboardDocumentCheckIcon,
  CurrencyDollarIcon,
  DocumentTextIcon,
  BookOpenIcon,
  TruckIcon,
  ChatBubbleBottomCenterTextIcon,
} from '@heroicons/react/24/outline';

const solutions = [
  {
    name: 'Student Management',
    description: 'Comprehensive student profiles, attendance tracking, and performance monitoring.',
    icon: AcademicCapIcon,
  },
  {
    name: 'Staff Management',
    description: 'Streamline HR processes, track performance, and manage staff records efficiently.',
    icon: UserGroupIcon,
  },
  {
    name: 'Attendance System',
    description: 'Automated attendance tracking with real-time notifications and reporting.',
    icon: ClipboardDocumentCheckIcon,
  },
  {
    name: 'Fee Management',
    description: 'Simplified fee collection, online payments, and financial reporting.',
    icon: CurrencyDollarIcon,
  },
  {
    name: 'Examination System',
    description: 'Digital exam management, result processing, and performance analytics.',
    icon: DocumentTextIcon,
  },
  {
    name: 'Library Management',
    description: 'Digital catalog, borrowing system, and resource tracking.',
    icon: BookOpenIcon,
  },
  {
    name: 'Transport Management',
    description: 'Route planning, vehicle tracking, and transport fee management.',
    icon: TruckIcon,
  },
  {
    name: 'Parent Communication',
    description: 'Direct messaging, announcements, and progress updates for parents.',
    icon: ChatBubbleBottomCenterTextIcon,
  },
];

const Solutions: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">Comprehensive</span>
            <span className="block text-blue-600">School Management Solutions</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Transform your educational institution with our integrated suite of management solutions.
          </p>
        </div>

        <div className="mt-16 sm:mt-20">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {solutions.map((solution, index) => (
              <div
                key={solution.name}
                className="relative group bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
                
                <div className="relative">
                  <div className="w-12 h-12 rounded-xl bg-blue-600/10 flex items-center justify-center transform rotate-3 group-hover:rotate-6 transition-transform duration-300">
                    <solution.icon className="h-6 w-6 text-blue-600 transform -rotate-3 group-hover:-rotate-6 transition-transform duration-300" />
                  </div>
                  
                  <h3 className="mt-4 text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                    {solution.name}
                  </h3>
                  
                  <p className="mt-2 text-gray-500 text-sm group-hover:text-gray-600 transition-colors duration-300">
                    {solution.description}
                  </p>
                  
                  <div className="mt-4 flex items-center text-blue-600 text-sm font-medium opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    Learn more
                    <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solutions; 