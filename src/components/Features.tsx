import React from 'react';
import {
  ChartBarIcon,
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from '@heroicons/react/24/outline';
import IconBox from './IconBox';

const features = [
  {
    name: 'Analytics',
    description: 'Get detailed insights into student performance, attendance, and financial metrics.',
    icon: ChartBarIcon,
    color: 'blue' as const,
  },
  {
    name: 'Cloud Storage',
    description: 'All your data is securely stored in the cloud and accessible from anywhere.',
    icon: CloudArrowUpIcon,
    color: 'green' as const,
  },
  {
    name: 'Security',
    description: 'Enterprise-grade security with role-based access control and data encryption.',
    icon: LockClosedIcon,
    color: 'red' as const,
  },
  {
    name: 'API Access',
    description: 'Integrate with your existing systems using our comprehensive API.',
    icon: ServerIcon,
    color: 'yellow' as const,
  },
];

const Features: React.FC = () => {
  return (
    <div className="bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">
            Powerful Features for Modern Education
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-base sm:text-lg text-gray-500 sm:mt-4">
            Everything you need to manage your educational institution efficiently
          </p>
        </div>

        <div className="mt-10 sm:mt-12">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 sm:gap-8">
            {features.map((feature, index) => (
              <div 
                key={feature.name}
                className="relative group bg-white p-4 sm:p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <IconBox
                  icon={<feature.icon className="w-full h-full" />}
                  color={feature.color}
                  className="mb-4"
                />
                
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                  {feature.name}
                </h3>
                
                <p className="mt-2 text-sm text-gray-500 group-hover:text-gray-600 line-clamp-3 sm:line-clamp-none">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features; 