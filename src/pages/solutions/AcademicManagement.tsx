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

      <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 pt-24">
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
              Academic Management
              <span className="block text-blue-600 mt-2">Powered by AI</span>
            </h1>
            <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
              Transform your academic operations with our comprehensive management solution.
              Leverage AI-powered insights to enhance student learning and streamline administrative tasks.
            </p>
          </div>

          {/* Features Grid */}
          <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all duration-300"
              >
                <IconBox
                  icon={<feature.icon className="w-full h-full" />}
                  color={feature.color}
                  className="mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* AI Integration Section */}
          <div className="mt-24 bg-white rounded-2xl shadow-xl p-8 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  AI-Powered Academic Excellence
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white">
                        <PresentationChartLineIcon className="h-6 w-6" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-semibold text-gray-900">
                        Predictive Analytics
                      </h3>
                      <p className="mt-2 text-gray-600">
                        Identify at-risk students early and get AI-powered intervention suggestions.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white">
                        <UserGroupIcon className="h-6 w-6" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-semibold text-gray-900">
                        Personalized Learning
                      </h3>
                      <p className="mt-2 text-gray-600">
                        Generate customized learning paths based on individual student performance.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white">
                        <ClipboardDocumentListIcon className="h-6 w-6" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-semibold text-gray-900">
                        Automated Assessment
                      </h3>
                      <p className="mt-2 text-gray-600">
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