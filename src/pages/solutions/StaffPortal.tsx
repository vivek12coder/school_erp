import React from 'react';
import { Helmet } from 'react-helmet-async';
import {
  ClipboardDocumentListIcon,
  UserGroupIcon,
  ChartBarIcon,
  CalendarIcon,
  DocumentCheckIcon,
  ChatBubbleLeftRightIcon,
  ClockIcon,
  CogIcon,
} from '@heroicons/react/24/outline';
import IconBox from '../../components/IconBox';

const StaffPortal: React.FC = () => {
  const features = [
    {
      icon: ClipboardDocumentListIcon,
      title: 'Attendance Management',
      description: 'Easily track and manage student attendance with automated reports and notifications.',
      color: 'blue' as const,
    },
    {
      icon: ChartBarIcon,
      title: 'Performance Analytics',
      description: 'Access detailed analytics on student performance, class averages, and learning trends.',
      color: 'green' as const,
    },
    {
      icon: DocumentCheckIcon,
      title: 'Assignment Management',
      description: 'Create, distribute, and grade assignments with AI-assisted evaluation tools.',
      color: 'purple' as const,
    },
    {
      icon: ChatBubbleLeftRightIcon,
      title: 'Communication Hub',
      description: 'Connect with students, parents, and colleagues through a unified communication platform.',
      color: 'orange' as const,
    },
    {
      icon: CalendarIcon,
      title: 'Schedule Planner',
      description: 'Manage classes, meetings, and events with smart scheduling and calendar integration.',
      color: 'pink' as const,
    },
    {
      icon: CogIcon,
      title: 'Resource Management',
      description: 'Access and manage teaching resources, materials, and digital content efficiently.',
      color: 'teal' as const,
    },
  ];

  const toolsets = [
    {
      title: 'Teaching Tools',
      features: [
        'Interactive whiteboard',
        'Screen sharing capabilities',
        'Real-time student response system',
        'Digital content creation tools',
        'Assessment generator',
        'Rubric builder',
      ],
    },
    {
      title: 'Administrative Tools',
      features: [
        'Attendance tracker',
        'Grade book management',
        'Report card generator',
        'Parent communication system',
        'Resource scheduler',
        'Document management',
      ],
    },
    {
      title: 'Analytics & Reporting',
      features: [
        'Student performance tracking',
        'Class progress reports',
        'Behavioral analytics',
        'Attendance statistics',
        'Custom report builder',
        'Data visualization tools',
      ],
    },
  ];

  return (
    <>
      <Helmet>
        <title>Staff Portal - School ERP</title>
        <meta
          name="description"
          content="Empower your teaching staff with comprehensive tools for classroom management, student assessment, and administrative tasks."
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 pt-28">
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 sm:py-20">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              Staff Portal
              <span className="block text-blue-600 mt-4">Streamlined Teaching Experience</span>
            </h1>
            <p className="mt-8 text-xl text-gray-600 max-w-3xl mx-auto">
              Equip your teaching staff with powerful tools to enhance classroom management,
              streamline administrative tasks, and focus on what matters most - teaching.
            </p>
          </div>

          {/* Features Grid */}
          <div className="mt-20 sm:mt-24">
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="group relative bg-white p-8 rounded-2xl transition-all duration-300 ease-in-out
                    hover:-translate-y-2 hover:shadow-2xl cursor-pointer
                    before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-br 
                    before:from-white before:to-gray-50/50 before:opacity-0 
                    hover:before:opacity-100 before:transition-all before:duration-300
                    after:absolute after:inset-0 after:rounded-2xl after:border-2 
                    after:border-transparent hover:after:border-blue-100
                    after:transition-colors after:duration-300
                    hover:bg-white/80 backdrop-blur-sm"
                >
                  <div className="relative z-10">
                    <IconBox
                      icon={<feature.icon className="w-full h-full" />}
                      color={feature.color}
                      className="mb-7"
                    />
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 transition-colors duration-300
                      group-hover:text-blue-600">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 transition-colors duration-300
                      group-hover:text-gray-700">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Toolsets Section */}
          <div className="mt-28">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-16">
              Comprehensive Toolsets for Educators
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {toolsets.map((toolset) => (
                <div key={toolset.title} className="bg-white rounded-2xl shadow-md p-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-8">
                    {toolset.title}
                  </h3>
                  <ul className="space-y-5">
                    {toolset.features.map((feature) => (
                      <li key={feature} className="flex items-start">
                        <span className="flex-shrink-0 h-2 w-2 rounded-full bg-blue-600 mt-2.5 mr-3"></span>
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Integration Section */}
          <div className="mt-28 bg-white rounded-2xl shadow-xl p-10 lg:p-14">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  Seamless Integration
                </h2>
                <div className="space-y-8">
                  <ul className="space-y-5">
                    <li className="flex items-start">
                      <span className="flex-shrink-0 h-2 w-2 rounded-full bg-blue-600 mt-2.5 mr-3"></span>
                      <span className="text-gray-600">Google Classroom and Microsoft Teams integration</span>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 h-2 w-2 rounded-full bg-blue-600 mt-2.5 mr-3"></span>
                      <span className="text-gray-600">Popular learning management systems (LMS)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 h-2 w-2 rounded-full bg-blue-600 mt-2.5 mr-3"></span>
                      <span className="text-gray-600">Video conferencing platforms</span>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 h-2 w-2 rounded-full bg-blue-600 mt-2.5 mr-3"></span>
                      <span className="text-gray-600">Digital content providers and educational resources</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-blue-50 rounded-2xl transform rotate-3"></div>
                <img
                  src="/staff-dashboard.png"
                  alt="Staff Dashboard"
                  className="relative rounded-2xl shadow-lg transform -rotate-2 hover:rotate-0 transition-transform duration-300"
                />
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-28 bg-blue-600 rounded-2xl shadow-xl p-10 lg:p-14 text-center">
            <h2 className="text-3xl font-bold text-white mb-8">
              Ready to Empower Your Teaching Staff?
            </h2>
            <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto">
              Join leading educational institutions using our Staff Portal to enhance teaching efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 transition-colors duration-200">
                Request Demo
              </button>
              <button className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-base font-medium rounded-md text-white hover:bg-blue-700 transition-colors duration-200">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StaffPortal; 