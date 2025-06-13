import React from 'react';
import {
  BanknotesIcon,
  AcademicCapIcon,
  BuildingOfficeIcon,
  UserGroupIcon,
  ClipboardDocumentCheckIcon,
  CurrencyDollarIcon,
  DocumentTextIcon,
  BookOpenIcon,
} from '@heroicons/react/24/outline';
import IconBox from '../../components/IconBox';

const solutions = [
  {
    name: 'Finance',
    description: 'Keeping a close watch on every financial transaction of any nature and any magnitude is truly essential.',
    icon: BanknotesIcon,
    color: 'red' as const,
  },
  {
    name: 'Academics',
    description: 'In this digital era, from banking to education most things have gone online.',
    icon: AcademicCapIcon,
    color: 'yellow' as const,
  },
  {
    name: 'Administration',
    description: 'Now those complex and time-consuming day-to-day administrative processes can be automated.',
    icon: BuildingOfficeIcon,
    color: 'green' as const,
  },
  {
    name: 'Human Resources',
    description: 'Human resources (HR) is the division of a business/organization that is charged with recruiting and training.',
    icon: UserGroupIcon,
    color: 'blue' as const,
  },
  {
    name: 'Attendance System',
    description: 'Automated attendance tracking with real-time notifications and reporting.',
    icon: ClipboardDocumentCheckIcon,
    color: 'purple' as const,
  },
  {
    name: 'Fee Management',
    description: 'Simplified fee collection, online payments, and financial reporting.',
    icon: CurrencyDollarIcon,
    color: 'pink' as const,
  },
  {
    name: 'Examination System',
    description: 'Digital exam management, result processing, and performance analytics.',
    icon: DocumentTextIcon,
    color: 'orange' as const,
  },
  {
    name: 'Library Management',
    description: 'Digital catalog, borrowing system, and resource tracking.',
    icon: BookOpenIcon,
    color: 'teal' as const,
  },
];

const Solutions: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 sm:py-20 lg:py-32">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
            <span className="block text-gray-900">Comprehensive</span>
            <span className="block text-blue-600 mt-4">School Management Solutions</span>
          </h1>
          <p className="mt-8 text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your educational institution with our integrated suite of management solutions.
          </p>
        </div>

        <div className="mt-20 sm:mt-24">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {solutions.map((solution, index) => (
              <div
                key={solution.name}
                className="group relative bg-white p-8 rounded-2xl transition-all duration-300 ease-in-out
                  hover:-translate-y-2 hover:shadow-2xl cursor-pointer
                  before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-br 
                  before:from-white before:to-gray-50/50 before:opacity-0 
                  hover:before:opacity-100 before:transition-all before:duration-300
                  after:absolute after:inset-0 after:rounded-2xl after:border-2 
                  after:border-transparent hover:after:border-blue-100
                  after:transition-colors after:duration-300
                  hover:bg-white/80 backdrop-blur-sm"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <div className="relative z-10">
                  <IconBox
                    icon={<solution.icon className="w-full h-full" />}
                    color={solution.color}
                    className="mb-7"
                  />
                  
                  <h3 className="text-xl font-semibold text-gray-900 transition-colors duration-300
                    group-hover:text-blue-600">
                    {solution.name}
                  </h3>
                  
                  <p className="mt-4 text-sm text-gray-500 transition-colors duration-300
                    group-hover:text-gray-600 line-clamp-3">
                    {solution.description}
                  </p>
                  
                  <div className="mt-6 flex items-center text-blue-600 text-sm font-medium
                    opacity-0 transform translate-y-2 transition-all duration-300
                    group-hover:opacity-100 group-hover:translate-y-0">
                    <span className="mr-3">Learn more</span>
                    <svg 
                      className="h-5 w-5 transform transition-transform duration-300 group-hover:translate-x-2" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M9 5l7 7-7 7" 
                      />
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