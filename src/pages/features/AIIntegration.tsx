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
import IconBox from '../../components/IconBox';

const AIIntegration: React.FC = () => {
  const features = [
    {
      icon: SparklesIcon,
      title: 'Smart Learning Paths',
      description: 'Personalized learning recommendations based on student performance and learning style.',
      color: 'purple' as const,
    },
    {
      icon: LightBulbIcon,
      title: 'Intelligent Assessment',
      description: 'Automated grading and performance evaluation with detailed feedback generation.',
      color: 'yellow' as const,
    },
    {
      icon: ChartBarIcon,
      title: 'Predictive Analytics',
      description: 'Early warning systems and performance predictions to prevent academic challenges.',
      color: 'blue' as const,
    },
    {
      icon: ChatBubbleLeftRightIcon,
      title: 'AI-Powered Support',
      description: '24/7 intelligent chatbot assistance for students, teachers, and administrators.',
      color: 'green' as const,
    },
    {
      icon: ClockIcon,
      title: 'Smart Scheduling',
      description: 'Optimized timetable generation considering multiple constraints and preferences.',
      color: 'pink' as const,
    },
    {
      icon: UserGroupIcon,
      title: 'Behavioral Analysis',
      description: 'Advanced pattern recognition for student engagement and behavior tracking.',
      color: 'orange' as const,
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
        <title>AI Integration</title>
        <meta
          name="description"
          content="Advanced artificial intelligence integration powering next-generation educational experiences."
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 pt-28">
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 sm:py-20">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              AI Integration
              <span className="block text-blue-600 mt-4">Powered by Advanced Artificial Intelligence</span>
            </h1>
            <p className="mt-8 text-xl text-gray-600 max-w-3xl mx-auto">
              Transform your educational institution with cutting-edge AI technology that
              personalizes learning, automates tasks, and provides actionable insights.
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

          {/* AI Capabilities Section */}
          <div className="mt-28">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-16">
              Advanced AI Capabilities
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {capabilities.map((capability) => (
                <div key={capability.title} className="bg-white rounded-2xl shadow-md p-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-8">
                    {capability.title}
                  </h3>
                  <ul className="space-y-5">
                    {capability.features.map((feature) => (
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

          {/* Technology Stack Section */}
          <div className="mt-28 bg-white rounded-2xl shadow-xl p-10 lg:p-14">
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
                  src="/ai.png"
                  alt="AI Dashboard"
                  className="relative w-full h-auto max-h-[300px] object-contain rounded-2xl shadow-lg transform -rotate-2 hover:rotate-0 transition-transform duration-300"
                />
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-28 bg-blue-600 rounded-2xl shadow-xl p-10 lg:p-14 text-center">
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