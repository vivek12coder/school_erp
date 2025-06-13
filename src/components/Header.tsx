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
import AnnouncementBar from './AnnouncementBar';

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
    <div className="fixed w-full top-0 z-50">
      <AnnouncementBar />
      <header className="bg-white/90 backdrop-blur-md border-b border-gray-100">
        <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
          <div className="w-full py-3 sm:py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Link to="/" className="flex items-center space-x-2 sm:space-x-3">
                  <div className="relative w-9 h-9 sm:w-10 sm:h-10">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg transform rotate-3"></div>
                    <img
                      className="relative w-full h-full object-cover rounded-lg transform -rotate-2 hover:rotate-0 transition-transform duration-300"
                      src="/edusphere_logo-removebg-preview.png"
                      alt="AI Education"
                    />
                  </div>
                  <span className="text-lg sm:text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent animate-gradient">
                    Edusphere
                  </span>
                </Link>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex lg:items-center lg:space-x-6">
                {navigation.map((item) => (
                  <div
                    key={item.name}
                    className="relative group"
                  >
                    {item.dropdown ? (
                      <button
                        onClick={() => handleDropdownClick(item.name)}
                        className="group inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md transition-colors"
                        onMouseEnter={() => setActiveDropdown(item.name)}
                      >
                        {item.name}
                        <ChevronDownIcon
                          className={`ml-1 h-4 w-4 transition-transform duration-200 group-hover:rotate-180`}
                        />
                      </button>
                    ) : (
                      <Link
                        to={item.href || '#'}
                        className="text-sm font-medium text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md transition-colors"
                      >
                        {item.name}
                      </Link>
                    )}

                    {item.dropdown && (
                      <div 
                        className={`absolute left-0 mt-2 w-64 rounded-xl shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 transition-all duration-200 transform origin-top-left
                          ${activeDropdown === item.name ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'}
                        `}
                        onMouseLeave={() => setActiveDropdown(null)}
                      >
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.href}
                            className="group flex items-start px-4 py-3 hover:bg-blue-50 transition-colors duration-200"
                            onClick={() => setActiveDropdown(null)}
                          >
                            <div className="flex-shrink-0">
                              <subItem.icon className="h-5 w-5 text-blue-600 group-hover:scale-110 transition-transform duration-200" />
                            </div>
                            <div className="ml-3">
                              <p className="text-sm font-medium text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                                {subItem.name}
                              </p>
                              <p className="mt-1 text-xs text-gray-500 group-hover:text-blue-500 transition-colors duration-200">
                                {subItem.description}
                              </p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}

                {/* CTA Button */}
                <Link
                  to="/demo"
                  className="ml-6 inline-flex items-center justify-center px-5 py-2 border border-transparent rounded-full text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 transform hover:scale-105 transition-all duration-200 shadow-md hover:shadow-xl"
                >
                  <SparklesIcon className="w-4 h-4 mr-2" />
                  Request Demo
                </Link>
              </div>

              {/* Mobile menu button */}
              <div className="flex lg:hidden">
                <button
                  type="button"
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-200"
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
            <div className="pt-2 pb-4 space-y-1 bg-white">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.dropdown ? (
                    <div>
                      <button
                        onClick={() => handleDropdownClick(item.name)}
                        className="w-full flex items-center justify-between px-4 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                      >
                        {item.name}
                        <ChevronDownIcon
                          className={`ml-2 h-5 w-5 transform transition-transform duration-200 ${
                            activeDropdown === item.name ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      {activeDropdown === item.name && (
                        <div className="space-y-1 px-4 py-2">
                          {item.dropdown.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.href}
                              className="flex items-center px-4 py-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg"
                              onClick={() => {
                                setActiveDropdown(null);
                                setIsOpen(false);
                              }}
                            >
                              <subItem.icon className="h-5 w-5 mr-3 text-blue-600" />
                              <div>
                                <div className="font-medium">{subItem.name}</div>
                                <div className="text-xs text-gray-500">{subItem.description}</div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
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
              <div className="px-4 py-3">
                <Link
                  to="/demo"
                  className="flex items-center justify-center w-full px-4 py-2 text-base font-medium text-white bg-gradient-to-r from-blue-600 to-blue-800 rounded-full hover:from-blue-700 hover:to-blue-900 transition-all duration-200"
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
    </div>
  );
};

export default Header; 