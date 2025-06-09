import React from 'react';
import { Helmet } from 'react-helmet-async';
import {
  BanknotesIcon,
  ChartBarIcon,
  DocumentTextIcon,
  CreditCardIcon,
  CalculatorIcon,
  ClockIcon,
  CogIcon,
  ArrowTrendingUpIcon,
} from '@heroicons/react/24/outline';

const FinanceManagement: React.FC = () => {
  const features = [
    {
      icon: BanknotesIcon,
      title: 'Fee Management',
      description: 'Automated fee collection, tracking, and reconciliation with multiple payment options.',
    },
    {
      icon: ChartBarIcon,
      title: 'Financial Analytics',
      description: 'Real-time financial reporting, budgeting, and forecasting with AI-powered insights.',
    },
    {
      icon: DocumentTextIcon,
      title: 'Payroll System',
      description: 'Comprehensive payroll management with tax calculations and compliance.',
    },
    {
      icon: CreditCardIcon,
      title: 'Online Payments',
      description: 'Secure payment gateway integration for fees, donations, and other transactions.',
    },
    {
      icon: CalculatorIcon,
      title: 'Expense Tracking',
      description: 'Detailed expense monitoring and budget allocation across departments.',
    },
    {
      icon: ClockIcon,
      title: 'Automated Billing',
      description: 'Scheduled invoicing and payment reminders for various fee types.',
    },
  ];

  const modules = [
    {
      title: 'Fee Management',
      features: [
        'Multiple fee structure support',
        'Flexible payment schedules',
        'Late fee automation',
        'Fee concession management',
        'Receipt generation',
        'Payment history tracking',
      ],
    },
    {
      title: 'Financial Reporting',
      features: [
        'Balance sheet generation',
        'Profit & loss statements',
        'Cash flow analysis',
        'Budget vs. actual reports',
        'Tax compliance reports',
        'Custom report builder',
      ],
    },
    {
      title: 'Accounting Tools',
      features: [
        'Double-entry accounting',
        'Bank reconciliation',
        'Journal entries',
        'Chart of accounts',
        'Asset management',
        'Multi-currency support',
      ],
    },
  ];

  return (
    <>
      <Helmet>
        <title>Finance Management - School ERP</title>
        <meta
          name="description"
          content="Comprehensive financial management solution for educational institutions with automated billing, reporting, and analytics."
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 pt-24">
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
              Finance Management
              <span className="block text-blue-600 mt-2">Automated Financial Operations</span>
            </h1>
            <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
              Streamline your institution's financial operations with our comprehensive
              finance management system. From fee collection to financial reporting,
              manage everything in one place.
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

          {/* Modules Section */}
          <div className="mt-24">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Comprehensive Financial Modules
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {modules.map((module) => (
                <div key={module.title} className="bg-white rounded-xl shadow-md p-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">
                    {module.title}
                  </h3>
                  <ul className="space-y-4">
                    {module.features.map((feature) => (
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

          {/* Analytics Section */}
          <div className="mt-24 bg-white rounded-2xl shadow-xl p-8 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  AI-Powered Financial Analytics
                </h2>
                <div className="space-y-6">
                  <p className="text-lg text-gray-600">
                    Make data-driven financial decisions with our advanced analytics:
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <ArrowTrendingUpIcon className="h-6 w-6 text-blue-600 mr-2" />
                      <div>
                        <h4 className="font-medium text-gray-900">Predictive Analysis</h4>
                        <p className="text-gray-600">Forecast future financial trends and requirements</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <ChartBarIcon className="h-6 w-6 text-blue-600 mr-2" />
                      <div>
                        <h4 className="font-medium text-gray-900">Budget Optimization</h4>
                        <p className="text-gray-600">AI-driven suggestions for budget allocation</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <CogIcon className="h-6 w-6 text-blue-600 mr-2" />
                      <div>
                        <h4 className="font-medium text-gray-900">Automated Reporting</h4>
                        <p className="text-gray-600">Generate comprehensive financial reports automatically</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-blue-50 rounded-2xl transform rotate-3"></div>
                <img
                  src="/finance-dashboard.png"
                  alt="Finance Dashboard"
                  className="relative rounded-2xl shadow-lg transform -rotate-2 hover:rotate-0 transition-transform duration-300"
                />
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-24 bg-blue-600 rounded-2xl shadow-xl p-8 lg:p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Transform Your Financial Management
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Join educational institutions worldwide using our finance management system
              to streamline their operations and make informed decisions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 transition-colors duration-200">
                Schedule Demo
              </button>
              <button className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-base font-medium rounded-md text-white hover:bg-blue-700 transition-colors duration-200">
                View Pricing
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FinanceManagement; 