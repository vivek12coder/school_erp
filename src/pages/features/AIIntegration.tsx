import React from 'react';
import { Helmet } from 'react-helmet-async';
import {
  SparklesIcon,
  LightBulbIcon,
  ChartBarIcon,
  ChatBubbleLeftRightIcon,
  ClockIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline';

const AIIntegration: React.FC = () => {
  const features = [
    {
      icon: SparklesIcon,
      title: 'Smart Learning Paths',
      description: 'Personalized learning recommendations based on student performance and learning style.',
    },
    {
      icon: LightBulbIcon,
      title: 'Intelligent Assessment',
      description: 'Automated grading and performance evaluation with detailed feedback generation.',
    },
    {
      icon: ChartBarIcon,
      title: 'Predictive Analytics',
      description: 'Early warning systems and performance predictions to prevent academic challenges.',
    },
    {
      icon: ChatBubbleLeftRightIcon,
      title: 'AI-Powered Support',
      description: '24/7 intelligent chatbot assistance for students, teachers, and administrators.',
    },
    {
      icon: ClockIcon,
      title: 'Smart Scheduling',
      description: 'Optimized timetable generation considering multiple constraints and preferences.',
    },
    {
      icon: UserGroupIcon,
      title: 'Behavioral Analysis',
      description: 'Advanced pattern recognition for student engagement and behavior tracking.',
    },
  ];

  const capabilities = [
    {
      title: 'Machine Learning Models',
      features: [
        'Student performance prediction',
        'Content recommendation engine',
        'Automated essay scoring',
        'Plagiarism detection',
        'Learning style identification',
        'Resource optimization',
      ],
    },
    {
      title: 'Natural Language Processing',
      features: [
        'Automated feedback generation',
        'Sentiment analysis',
        'Question answering system',
        'Content summarization',
        'Language translation',
        'Speech recognition',
      ],
    },
    {
      title: 'Computer Vision',
      features: [
        'Attendance tracking',
        'Exam proctoring',
        'Classroom monitoring',
        'Document scanning',
        'Handwriting recognition',
        'Visual learning aids',
      ],
    },
  ];

  return (
    <>
      <Helmet>
        <title>AI Integration - School ERP</title>
        <meta
          name="description"
          content="Advanced artificial intelligence integration powering next-generation educational experiences."
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 pt-24">
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
              AI Integration
              <span className="block text-blue-600 mt-2">Powered by Advanced Artificial Intelligence</span>
            </h1>
            <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
              Transform your educational institution with cutting-edge AI technology that
              personalizes learning, automates tasks, and provides actionable insights.
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

          {/* AI Capabilities Section */}
          <div className="mt-24">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Advanced AI Capabilities
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {capabilities.map((capability) => (
                <div key={capability.title} className="bg-white rounded-xl shadow-md p-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">
                    {capability.title}
                  </h3>
                  <ul className="space-y-4">
                    {capability.features.map((feature) => (
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

          {/* Technology Stack Section */}
          <div className="mt-24 bg-white rounded-2xl shadow-xl p-8 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  State-of-the-Art Technology
                </h2>
                <div className="space-y-6">
                  <p className="text-lg text-gray-600">
                    Our AI integration leverages the latest advancements in:
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <SparklesIcon className="h-6 w-6 text-blue-600 mr-2" />
                      <div>
                        <h4 className="font-medium text-gray-900">Deep Learning</h4>
                        <p className="text-gray-600">Neural networks for complex pattern recognition</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <LightBulbIcon className="h-6 w-6 text-blue-600 mr-2" />
                      <div>
                        <h4 className="font-medium text-gray-900">Reinforcement Learning</h4>
                        <p className="text-gray-600">Adaptive systems that improve over time</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <ChartBarIcon className="h-6 w-6 text-blue-600 mr-2" />
                      <div>
                        <h4 className="font-medium text-gray-900">Big Data Analytics</h4>
                        <p className="text-gray-600">Processing large-scale educational data</p>
                      </div>
                    </li>
                  </ul>
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

          {/* CTA Section */}
          <div className="mt-24 bg-blue-600 rounded-2xl shadow-xl p-8 lg:p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Embrace the Future of Education?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Join leading institutions using our AI-powered solutions to revolutionize education.
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

export default AIIntegration; 