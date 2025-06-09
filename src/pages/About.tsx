import React from 'react';
import { Helmet } from 'react-helmet-async';
import {
  AcademicCapIcon,
  LightBulbIcon,
  UserGroupIcon,
  ChartBarIcon,
} from '@heroicons/react/24/outline';

const About: React.FC = () => {
  const stats = [
    { label: 'Schools Using Our Platform', value: '500+' },
    { label: 'Years of Experience', value: '10+' },
    { label: 'Student Success Rate', value: '95%' },
    { label: 'Countries Reached', value: '25+' },
  ];

  const values = [
    {
      icon: AcademicCapIcon,
      title: 'Educational Excellence',
      description: 'We believe in empowering educational institutions with cutting-edge technology.',
    },
    {
      icon: LightBulbIcon,
      title: 'Innovation',
      description: 'Continuously evolving our platform with the latest technological advancements.',
    },
    {
      icon: UserGroupIcon,
      title: 'Student-Centric',
      description: 'Focusing on creating solutions that enhance the learning experience.',
    },
    {
      icon: ChartBarIcon,
      title: 'Data-Driven',
      description: 'Making informed decisions through comprehensive analytics and insights.',
    },
  ];

  const team = [
    {
      name: 'Dr. Sarah Johnson',
      role: 'CEO & Education Technology Expert',
      image: '/team/sarah.jpg',
      bio: '15+ years in EdTech innovation',
    },
    {
      name: 'Michael Chen',
      role: 'Chief Technology Officer',
      image: '/team/michael.jpg',
      bio: 'Former Google Engineer',
    },
    {
      name: 'Prof. Emily Williams',
      role: 'Education Consultant',
      image: '/team/emily.jpg',
      bio: 'PhD in Educational Psychology',
    },
    {
      name: 'David Kumar',
      role: 'Head of Product',
      image: '/team/david.jpg',
      bio: '10+ years in Product Management',
    },
  ];

  return (
    <>
      <Helmet>
        <title>About Us - School ERP</title>
        <meta
          name="description"
          content="Learn about School ERP's mission to transform education through innovative technology solutions."
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
        {/* Hero Section */}
        <div className="relative pt-24 pb-32 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
                Transforming Education Through
                <span className="block text-blue-600">Innovation & Technology</span>
              </h1>
              <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
                We're on a mission to revolutionize educational management by providing 
                cutting-edge solutions that empower schools to focus on what matters most - education.
              </p>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-4xl font-bold text-blue-600">{stat.value}</div>
                  <div className="mt-2 text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900">Our Core Values</h2>
              <p className="mt-4 text-xl text-gray-600">
                The principles that guide our innovation and development
              </p>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
                >
                  <value.icon className="h-12 w-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900">Our Leadership Team</h2>
              <p className="mt-4 text-xl text-gray-600">
                Meet the experts behind School ERP's success
              </p>
            </div>
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
              {team.map((member) => (
                <div
                  key={member.name}
                  className="text-center"
                >
                  <div className="relative">
                    <div className="w-48 h-48 mx-auto rounded-full overflow-hidden bg-gradient-to-r from-blue-100 to-blue-50">
                      <div className="absolute inset-0 bg-blue-600 opacity-10"></div>
                    </div>
                  </div>
                  <div className="mt-4">
                    <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                    <p className="text-blue-600 font-medium">{member.role}</p>
                    <p className="mt-2 text-gray-600">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mission Section */}
        <div className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-8">Our Mission</h2>
            <p className="text-xl max-w-3xl mx-auto">
              To empower educational institutions worldwide with innovative technology 
              solutions that streamline administration, enhance learning experiences, 
              and foster academic excellence.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About; 