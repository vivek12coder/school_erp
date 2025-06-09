import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
  SparklesIcon,
  AcademicCapIcon,
  UserGroupIcon,
  UsersIcon,
  BanknotesIcon,
  ChartBarIcon,
} from '@heroicons/react/24/outline';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isFeaturesOpen, setIsFeaturesOpen] = useState(false);
  const solutionsRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);

  // Handle clicking outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
      if (solutionsRef.current && !solutionsRef.current.contains(event.target as Node)) {
        setIsSolutionsOpen(false);
      }
      if (featuresRef.current && !featuresRef.current.contains(event.target as Node)) {
        setIsFeaturesOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleDropdownClick = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  const solutions = [
    {
      name: 'Academic Management',
      description: 'AI-powered academic planning and analytics',
      href: '/solutions/academic',
      icon: AcademicCapIcon,
    },
    {
      name: 'Student Portal',
      description: 'Personalized learning experience',
      href: '/solutions/student',
      icon: UsersIcon,
    },
    {
      name: 'Staff Portal',
      description: 'Streamlined staff management',
      href: '/solutions/staff',
      icon: UserGroupIcon,
    },
    {
      name: 'Finance Management',
      description: 'Automated financial operations',
      href: '/solutions/finance',
      icon: BanknotesIcon,
    },
  ];

  const features = [
    {
      name: 'AI Integration',
      description: 'Powered by advanced artificial intelligence',
      href: '/features/ai-integration',
      icon: AcademicCapIcon,
    },
    {
      name: 'Analytics',
      description: 'Comprehensive data analysis and insights',
      href: '/features/analytics',
      icon: ChartBarIcon,
    },
  ];

  const navigation = [
    {
      name: 'Solutions',
      dropdown: solutions,
    },
    {
      name: 'Features',
      dropdown: features,
    },
    { name: 'Pricing', href: '/pricing' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="fixed w-full top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="w-full py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Link to="/" className="flex items-center space-x-3">
                <div className="relative w-12 h-12">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg transform rotate-3"></div>
                  <img
                    className="relative w-full h-full object-cover rounded-lg transform -rotate-2 hover:rotate-0 transition-transform duration-300"
                    src="/ai-education.png"
                    alt="AI Education"
                  />
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  School ERP
                </span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex lg:items-center lg:space-x-6" ref={dropdownRef}>
              {navigation.map((item) => (
                <div
                  key={item.name}
                  className="relative"
                >
                  {item.dropdown ? (
                    <button
                      onClick={() => handleDropdownClick(item.name)}
                      className="group inline-flex items-center text-base font-medium text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md transition-colors"
                    >
                      {item.name}
                      <ChevronDownIcon
                        className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                          activeDropdown === item.name ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                  ) : (
                    <Link
                      to={item.href || '#'}
                      className="text-base font-medium text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md transition-colors"
                    >
                      {item.name}
                    </Link>
                  )}

                  {item.dropdown && activeDropdown === item.name && (
                    <div className="absolute left-0 mt-2 w-72 rounded-xl shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 transform transition-all duration-300">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.href}
                          className="group flex items-start px-4 py-3 hover:bg-blue-50"
                          onClick={() => setActiveDropdown(null)}
                        >
                          <div className="flex-shrink-0">
                            <subItem.icon className="h-6 w-6 text-blue-600" />
                          </div>
                          <div className="ml-4">
                            <p className="text-sm font-medium text-gray-900 group-hover:text-blue-600">
                              {subItem.name}
                            </p>
                            <p className="mt-1 text-xs text-gray-500">
                              {subItem.description}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:flex lg:items-center">
              <Link
                to="/demo"
                className="ml-8 inline-flex items-center justify-center px-6 py-2.5 border border-transparent rounded-full text-base font-medium text-white bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 transform hover:scale-105 transition-all duration-200 shadow-md hover:shadow-xl"
              >
                <SparklesIcon className="w-5 h-5 mr-2" />
                Request Demo
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="flex lg:hidden">
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                onClick={() => setIsOpen(!isOpen)}
              >
                <span className="sr-only">Open main menu</span>
                {isOpen ? (
                  <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`lg:hidden ${isOpen ? 'block' : 'hidden'}`}>
          <div className="pt-2 pb-4 space-y-1">
            {navigation.map((item) => (
              <div key={item.name}>
                {item.dropdown ? (
                  <>
                    <button
                      onClick={() => handleDropdownClick(item.name)}
                      className="w-full flex items-center justify-between px-4 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                    >
                      {item.name}
                      <ChevronDownIcon
                        className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                          activeDropdown === item.name ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {activeDropdown === item.name && (
                      <div className="pl-4">
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.href}
                            className="flex items-center px-4 py-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                            onClick={() => {
                              setActiveDropdown(null);
                              setIsOpen(false);
                            }}
                          >
                            <subItem.icon className="h-5 w-5 mr-2 text-blue-600" />
                            <div>
                              <div className="font-medium">{subItem.name}</div>
                              <div className="text-xs text-gray-500">{subItem.description}</div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={item.href || '#'}
                    className="block px-4 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            <div className="px-4 pt-4">
              <Link
                to="/demo"
                className="w-full flex items-center justify-center px-6 py-2.5 border border-transparent rounded-full text-base font-medium text-white bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 shadow-md"
                onClick={() => setIsOpen(false)}
              >
                <SparklesIcon className="w-5 h-5 mr-2" />
                Request Demo
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header; 