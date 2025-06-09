import React from 'react';
import { Helmet } from 'react-helmet-async';
import {
  AcademicCapIcon,
  BookOpenIcon,
  CalendarIcon,
  ChatBubbleLeftRightIcon,
  ClockIcon,
  DocumentChartBarIcon,
  UserGroupIcon,
  VideoCameraIcon,
} from '@heroicons/react/24/outline';

const StudentPortal: React.FC = () => {
  const features = [
    {
      icon: BookOpenIcon,
      title: 'Digital Learning Hub',
      description: 'Access course materials, e-books, and interactive learning resources anytime, anywhere.',
    },
    {
      icon: DocumentChartBarIcon,
      title: 'Performance Dashboard',
      description: 'Track grades, attendance, and progress with AI-powered performance insights and recommendations.',
    },
    {
      icon: CalendarIcon,
      title: 'Schedule Management',
      description: 'View class schedules, exam timetables, and important academic events in real-time.',
    },
    {
      icon: ChatBubbleLeftRightIcon,
      title: 'Communication Center',
      description: 'Connect with teachers, submit queries, and participate in class discussions.',
    },
    {
      icon: VideoCameraIcon,
      title: 'Virtual Classroom',
      description: 'Join live classes, watch recorded sessions, and participate in interactive learning.',
    },
    {
      icon: ClockIcon,
      title: 'Assignment Tracker',
      description: 'Manage homework, projects, and submissions with automated reminders and status updates.',
    },
  ];

  const benefits = [
    {
      title: 'Personalized Learning Experience',
      description: 'AI-driven content recommendations and learning paths tailored to each student\'s needs.',
      features: [
        'Adaptive learning algorithms',
        'Progress-based content suggestions',
        'Custom study schedules',
        'Learning style assessment',
      ],
    },
    {
      title: 'Enhanced Student Engagement',
      description: 'Interactive tools and features to keep students motivated and involved.',
      features: [
        'Gamified learning modules',
        'Achievement badges and rewards',
        'Peer collaboration tools',
        'Interactive assessments',
      ],
    },
    {
      title: 'Comprehensive Progress Tracking',
      description: 'Detailed insights into academic performance and growth areas.',
      features: [
        'Real-time grade updates',
        'Performance analytics',
        'Skill gap analysis',
        'Progress reports and trends',
      ],
    },
  ];

  return (
    <>
      <Helmet>
        <title>Student Portal - School ERP</title>
        <meta
          name="description"
          content="Empower students with our comprehensive digital learning platform featuring personalized content, progress tracking, and interactive tools."
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 pt-24">
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
              Student Portal
              <span className="block text-blue-600 mt-2">Personalized Learning Experience</span>
            </h1>
            <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
              Empower students with a comprehensive digital learning platform that adapts
              to individual needs and promotes academic excellence through innovative technology.
            </p>
          </div>

          {/* Features Grid */}
          <div className="mt-20 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <feature.icon className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Benefits Section */}
          <div className="mt-24">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Why Choose Our Student Portal?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="bg-white rounded-xl shadow-md p-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {benefit.description}
                  </p>
                  <ul className="space-y-3">
                    {benefit.features.map((feature) => (
                      <li key={feature} className="flex items-start">
                        <span className="flex-shrink-0 h-1.5 w-1.5 rounded-full bg-blue-600 mt-2 mr-2"></span>
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-24 bg-blue-600 rounded-2xl shadow-xl p-8 lg:p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Transform the Learning Experience?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Join thousands of students already benefiting from our innovative learning platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 transition-colors duration-200">
                Schedule Demo
              </button>
              <button className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-base font-medium rounded-md text-white hover:bg-blue-700 transition-colors duration-200">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StudentPortal; 