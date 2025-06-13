import React from 'react';
import { Helmet } from 'react-helmet-async';
import {
  AcademicCapIcon,
  ClipboardDocumentListIcon,
  PresentationChartLineIcon,
  UserGroupIcon,
  CalendarIcon,
  ChatBubbleLeftRightIcon,
} from '@heroicons/react/24/outline';
import IconBox from '../../components/IconBox';

const AcademicManagement: React.FC = () => {
  const features = [
    {
      icon: ClipboardDocumentListIcon,
      title: 'Curriculum Management',
      description: 'Design, plan, and track curriculum implementation across all grades and subjects.',
      color: 'blue' as const,
    },
    {
      icon: PresentationChartLineIcon,
      title: 'Performance Analytics',
      description: 'Track and analyze student performance with AI-powered insights and recommendations.',
      color: 'green' as const,
    },
    {
      icon: UserGroupIcon,
      title: 'Class Management',
      description: 'Efficiently manage class schedules, attendance, and student groups.',
      color: 'purple' as const,
    },
    {
      icon: CalendarIcon,
      title: 'Academic Calendar',
      description: 'Plan and organize academic events, exams, and activities.',
      color: 'orange' as const,
    },
    {
      icon: ChatBubbleLeftRightIcon,
      title: 'Parent Communication',
      description: 'Keep parents informed about their children\'s academic progress and school activities.',
      color: 'pink' as const,
    },
    {
      icon: AcademicCapIcon,
      title: 'Learning Resources',
      description: 'Centralized repository for educational materials and resources.',
      color: 'teal' as const,
    },
  ];

  return (
    <>
      <Helmet>
        <title>Academic Management - School ERP</title>
        <meta
          name="description"
          content="Comprehensive academic management solution for schools with AI-powered insights and analytics."
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 pt-28">
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 sm:py-20">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              Academic Management
              <span className="block text-blue-600 mt-4">Powered by AI</span>
            </h1>
            <p className="mt-8 text-xl text-gray-600 max-w-3xl mx-auto">
              Transform your academic operations with our comprehensive management solution.
              Leverage AI-powered insights to enhance student learning and streamline administrative tasks.
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

          {/* AI Integration Section */}
          <div className="mt-28 bg-white rounded-2xl shadow-xl p-10 lg:p-14">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  AI-Powered Academic Excellence
                </h2>
                <div className="space-y-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-blue-50 text-blue-600">
                        <PresentationChartLineIcon className="h-6 w-6" />
                      </div>
                    </div>
                    <div className="ml-6">
                      <h3 className="text-xl font-semibold text-gray-900">
                        Predictive Analytics
                      </h3>
                      <p className="mt-3 text-gray-600">
                        Identify at-risk students early and get AI-powered intervention suggestions.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-blue-50 text-blue-600">
                        <UserGroupIcon className="h-6 w-6" />
                      </div>
                    </div>
                    <div className="ml-6">
                      <h3 className="text-xl font-semibold text-gray-900">
                        Personalized Learning
                      </h3>
                      <p className="mt-3 text-gray-600">
                        Generate customized learning paths based on individual student performance.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-blue-50 text-blue-600">
                        <ClipboardDocumentListIcon className="h-6 w-6" />
                      </div>
                    </div>
                    <div className="ml-6">
                      <h3 className="text-xl font-semibold text-gray-900">
                        Automated Assessment
                      </h3>
                      <p className="mt-3 text-gray-600">
                        Save time with AI-assisted grading and performance evaluation.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-blue-50 rounded-2xl transform rotate-3"></div>
                <img
                  src="/ai-dashboard.png"
                  alt="AI Dashboard"
                  className="relative rounded-2xl shadow-lg transform -rotate-2 hover:rotate-0 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AcademicManagement; 