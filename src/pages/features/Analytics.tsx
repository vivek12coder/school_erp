import React from 'react';
import { Helmet } from 'react-helmet-async';
import {
  ChartBarIcon,
  PresentationChartLineIcon,
  DocumentChartBarIcon,
  ArrowTrendingUpIcon,
  UserGroupIcon,
  CurrencyDollarIcon,
} from '@heroicons/react/24/outline';

const Analytics: React.FC = () => {
  const features = [
    {
      icon: ChartBarIcon,
      title: 'Performance Analytics',
      description: 'Track and analyze student performance across multiple parameters and timeframes.',
    },
    {
      icon: PresentationChartLineIcon,
      title: 'Trend Analysis',
      description: 'Identify patterns and trends in academic performance, attendance, and behavior.',
    },
    {
      icon: DocumentChartBarIcon,
      title: 'Custom Reports',
      description: 'Generate customized reports with interactive visualizations and insights.',
    },
    {
      icon: ArrowTrendingUpIcon,
      title: 'Predictive Insights',
      description: 'Forecast academic outcomes and identify areas needing intervention.',
    },
    {
      icon: UserGroupIcon,
      title: 'Behavioral Analytics',
      description: 'Monitor and analyze student engagement and classroom dynamics.',
    },
    {
      icon: CurrencyDollarIcon,
      title: 'Financial Analytics',
      description: 'Track financial metrics, budget utilization, and resource allocation.',
    },
  ];

  const dashboards = [
    {
      title: 'Academic Analytics',
      features: [
        'Grade distribution analysis',
        'Subject-wise performance',
        'Assessment analytics',
        'Learning progress tracking',
        'Skill gap analysis',
        'Course completion rates',
      ],
    },
    {
      title: 'Administrative Analytics',
      features: [
        'Attendance patterns',
        'Resource utilization',
        'Staff performance metrics',
        'Enrollment trends',
        'Facility usage analysis',
        'Schedule optimization',
      ],
    },
    {
      title: 'Financial Analytics',
      features: [
        'Revenue analysis',
        'Expense tracking',
        'Budget forecasting',
        'Fee collection insights',
        'Cost optimization',
        'ROI measurements',
      ],
    },
  ];

  return (
    <>
      <Helmet>
        <title>Analytics - School ERP</title>
        <meta
          name="description"
          content="Comprehensive data analysis and insights for educational institutions."
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 pt-24">
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
              Analytics
              <span className="block text-blue-600 mt-2">Data-Driven Decision Making</span>
            </h1>
            <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
              Transform raw data into actionable insights with our comprehensive
              analytics platform designed specifically for educational institutions.
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

          {/* Dashboard Section */}
          <div className="mt-24">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Interactive Dashboards
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {dashboards.map((dashboard) => (
                <div key={dashboard.title} className="bg-white rounded-xl shadow-md p-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">
                    {dashboard.title}
                  </h3>
                  <ul className="space-y-4">
                    {dashboard.features.map((feature) => (
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

          {/* Visualization Section */}
          <div className="mt-24 bg-white rounded-2xl shadow-xl p-8 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Advanced Visualization Tools
                </h2>
                <div className="space-y-6">
                  <p className="text-lg text-gray-600">
                    Present your data in meaningful and actionable ways:
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <ChartBarIcon className="h-6 w-6 text-blue-600 mr-2" />
                      <div>
                        <h4 className="font-medium text-gray-900">Interactive Charts</h4>
                        <p className="text-gray-600">Dynamic visualizations with drill-down capabilities</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <PresentationChartLineIcon className="h-6 w-6 text-blue-600 mr-2" />
                      <div>
                        <h4 className="font-medium text-gray-900">Real-time Dashboards</h4>
                        <p className="text-gray-600">Live updates and monitoring of key metrics</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <DocumentChartBarIcon className="h-6 w-6 text-blue-600 mr-2" />
                      <div>
                        <h4 className="font-medium text-gray-900">Custom Reports</h4>
                        <p className="text-gray-600">Tailored reports with export capabilities</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-blue-50 rounded-2xl transform rotate-3"></div>
                <img
                  src="/analytics-dashboard.png"
                  alt="Analytics Dashboard"
                  className="relative rounded-2xl shadow-lg transform -rotate-2 hover:rotate-0 transition-transform duration-300"
                />
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-24 bg-blue-600 rounded-2xl shadow-xl p-8 lg:p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Make Data-Driven Decisions Today
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Join institutions that use our analytics platform to improve educational outcomes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 transition-colors duration-200">
                Request Demo
              </button>
              <button className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-base font-medium rounded-md text-white hover:bg-blue-700 transition-colors duration-200">
                View Documentation
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Analytics; 