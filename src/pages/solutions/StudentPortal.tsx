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
  ChartBarIcon,
} from '@heroicons/react/24/outline';
import IconBox from '../../components/IconBox';

interface LearningTool {
  title: string;
  features: string[];
}

const learningTools: LearningTool[] = [
  {
    title: 'Interactive Learning',
    features: [
      'Live virtual classrooms',
      'Interactive quizzes and polls',
      'Multimedia content library',
      'Collaborative workspaces',
      'Real-time feedback system',
      'Practice exercises',
    ],
  },
  {
    title: 'Study Tools',
    features: [
      'Digital note-taking',
      'Flashcard creator',
      'Study schedule planner',
      'Resource bookmarking',
      'Progress tracking',
      'Assignment reminders',
    ],
  },
  {
    title: 'Support Resources',
    features: [
      'Online tutoring access',
      'Study group formation',
      'Academic counseling',
      'Technical support',
      'Learning resources',
      'FAQ knowledge base',
    ],
  },
];

const StudentPortal: React.FC = () => {
  const features = [
    {
      icon: BookOpenIcon,
      title: 'Digital Learning Hub',
      description: 'Access course materials, e-books, and interactive learning resources anytime, anywhere.',
      color: 'blue' as const,
    },
    {
      icon: DocumentChartBarIcon,
      title: 'Performance Dashboard',
      description: 'Track grades, attendance, and progress with AI-powered performance insights and recommendations.',
      color: 'green' as const,
    },
    {
      icon: CalendarIcon,
      title: 'Schedule Management',
      description: 'View class schedules, exam timetables, and important academic events in real-time.',
      color: 'purple' as const,
    },
    {
      icon: ChatBubbleLeftRightIcon,
      title: 'Communication Center',
      description: 'Connect with teachers, submit queries, and participate in class discussions.',
      color: 'orange' as const,
    },
    {
      icon: VideoCameraIcon,
      title: 'Virtual Classroom',
      description: 'Join live classes, watch recorded sessions, and participate in interactive learning.',
      color: 'pink' as const,
    },
    {
      icon: ClockIcon,
      title: 'Assignment Tracker',
      description: 'Manage homework, projects, and submissions with automated reminders and status updates.',
      color: 'teal' as const,
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
          content="Empower students with a modern learning platform featuring personalized dashboards, resources, and collaboration tools."
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 pt-28">
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 sm:py-20">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              Student Portal
              <span className="block text-blue-600 mt-4">Your Learning Journey Starts Here</span>
            </h1>
            <p className="mt-8 text-xl text-gray-600 max-w-3xl mx-auto">
              Empower students with a modern, intuitive platform that makes learning engaging,
              collaborative, and personalized to each student's needs.
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

          {/* Learning Tools Section */}
          <div className="mt-28">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-16">
              Modern Learning Tools
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {learningTools.map((tool) => (
                <div key={tool.title} className="bg-white rounded-2xl shadow-md p-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-8">
                    {tool.title}
                  </h3>
                  <ul className="space-y-5">
                    {tool.features.map((feature) => (
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

          {/* Personalization Section */}
          <div className="mt-28 bg-white rounded-2xl shadow-xl p-10 lg:p-14">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  Personalized Learning Experience
                </h2>
                <div className="space-y-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-blue-50 text-blue-600">
                        <AcademicCapIcon className="h-6 w-6" />
                      </div>
                    </div>
                    <div className="ml-6">
                      <h3 className="text-xl font-semibold text-gray-900">
                        Adaptive Learning
                      </h3>
                      <p className="mt-3 text-gray-600">
                        Content and pace tailored to each student's learning style and progress.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-blue-50 text-blue-600">
                        <ChartBarIcon className="h-6 w-6" />
                      </div>
                    </div>
                    <div className="ml-6">
                      <h3 className="text-xl font-semibold text-gray-900">
                        Progress Tracking
                      </h3>
                      <p className="mt-3 text-gray-600">
                        Real-time insights into academic performance and learning goals.
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
                        Collaborative Learning
                      </h3>
                      <p className="mt-3 text-gray-600">
                        Tools for group projects, peer learning, and student discussions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-blue-50 rounded-2xl transform rotate-3"></div>
                <img
                  src="/student-dashboard.png"
                  alt="Student Dashboard"
                  className="relative rounded-2xl shadow-lg transform -rotate-2 hover:rotate-0 transition-transform duration-300"
                />
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-28 bg-blue-600 rounded-2xl shadow-xl p-10 lg:p-14 text-center">
            <h2 className="text-3xl font-bold text-white mb-8">
              Ready to Transform Learning?
            </h2>
            <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto">
              Join thousands of students already benefiting from our modern learning platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 transition-colors duration-200">
                Get Started
              </button>
              <button className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-base font-medium rounded-md text-white hover:bg-blue-700 transition-colors duration-200">
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StudentPortal; 