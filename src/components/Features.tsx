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

const features = [
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

const Features: React.FC = () => {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-primary font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl leading-8 font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to manage your school
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Our comprehensive ERP solution provides all the tools you need to streamline your school's operations.
          </p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                      <feature.icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">{feature.name}</h3>
                    <p className="mt-2 text-base text-gray-500">{feature.description}</p>
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

export default Features; 