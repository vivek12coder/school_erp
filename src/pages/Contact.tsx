import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import ScrollAnimation from '../components/ScrollAnimation';
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  BuildingOfficeIcon,
  ChatBubbleBottomCenterTextIcon,
  ClockIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from '@heroicons/react/24/outline';

const Contact: React.FC = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      school: '',
      message: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Name is required'),
      email: Yup.string().email('Invalid email address').required('Email is required'),
      phone: Yup.string().required('Phone number is required'),
      school: Yup.string().required('School name is required'),
      message: Yup.string().required('Message is required'),
    }),
    onSubmit: (values) => {
      console.log(values);
      // Handle form submission
    },
  });

  return (
    <>
      <Helmet>
        <title>Contact Us - School ERP</title>
        <meta
          name="description"
          content="Get in touch with us for any queries about our School ERP system. We're here to help you transform your educational institution."
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Header Section */}
          <ScrollAnimation direction="up">
            <div className="text-center mb-16">
              <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
                Get in Touch
              </h1>
              <p className="mt-4 text-xl text-gray-600">
                We'd love to hear from you. Let's transform education together.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <ScrollAnimation direction="left">
              <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-600 to-blue-800"></div>
                <form onSubmit={formik.handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                        Name
                      </label>
                      <div className="mt-1 relative">
                        <input
                          id="name"
                          type="text"
                          {...formik.getFieldProps('name')}
                          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 transition-all duration-200"
                        />
                        {formik.touched.name && formik.errors.name && (
                          <p className="mt-1 text-sm text-red-600">{formik.errors.name}</p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Email
                      </label>
                      <div className="mt-1 relative">
                        <input
                          id="email"
                          type="email"
                          {...formik.getFieldProps('email')}
                          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 transition-all duration-200"
                        />
                        {formik.touched.email && formik.errors.email && (
                          <p className="mt-1 text-sm text-red-600">{formik.errors.email}</p>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                        Phone Number
                      </label>
                      <div className="mt-1 relative">
                        <input
                          id="phone"
                          type="tel"
                          {...formik.getFieldProps('phone')}
                          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 transition-all duration-200"
                        />
                        {formik.touched.phone && formik.errors.phone && (
                          <p className="mt-1 text-sm text-red-600">{formik.errors.phone}</p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label htmlFor="school" className="block text-sm font-medium text-gray-700">
                        School Name
                      </label>
                      <div className="mt-1 relative">
                        <input
                          id="school"
                          type="text"
                          {...formik.getFieldProps('school')}
                          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 transition-all duration-200"
                        />
                        {formik.touched.school && formik.errors.school && (
                          <p className="mt-1 text-sm text-red-600">{formik.errors.school}</p>
                        )}
                      </div>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                      Message
                    </label>
                    <div className="mt-1 relative">
                      <textarea
                        id="message"
                        rows={4}
                        {...formik.getFieldProps('message')}
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 transition-all duration-200"
                      />
                      {formik.touched.message && formik.errors.message && (
                        <p className="mt-1 text-sm text-red-600">{formik.errors.message}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 transform hover:scale-105 transition-all duration-200 hover:shadow-lg"
                    >
                      <ChatBubbleBottomCenterTextIcon className="w-5 h-5 mr-2" />
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </ScrollAnimation>

            {/* Contact Information */}
            <div className="lg:pl-8">
              <ScrollAnimation direction="right">
                <h2 className="text-2xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
                  Contact Information
                </h2>
              </ScrollAnimation>
              
              <div className="space-y-6">
                <ScrollAnimation direction="right" delay={0.1}>
                  <div className="flex items-start p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-1">
                    <BuildingOfficeIcon className="h-6 w-6 text-blue-600 mt-1" />
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900">Office Address</h3>
                      <p className="mt-1 text-gray-600">
                        123 Education Street<br />
                        Tech Park, Suite 101<br />
                        Knowledge City, 12345
                      </p>
                    </div>
                  </div>
                </ScrollAnimation>

                <ScrollAnimation direction="right" delay={0.2}>
                  <div className="flex items-start p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-1">
                    <PhoneIcon className="h-6 w-6 text-blue-600 mt-1" />
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900">Phone</h3>
                      <p className="mt-1 text-gray-600">+1 (555) 123-4567</p>
                    </div>
                  </div>
                </ScrollAnimation>

                <ScrollAnimation direction="right" delay={0.3}>
                  <div className="flex items-start p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-1">
                    <EnvelopeIcon className="h-6 w-6 text-blue-600 mt-1" />
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900">Email</h3>
                      <p className="mt-1 text-gray-600">contact@schoolerp.com</p>
                    </div>
                  </div>
                </ScrollAnimation>

                <ScrollAnimation direction="right" delay={0.4}>
                  <div className="flex items-start p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-1">
                    <ClockIcon className="h-6 w-6 text-blue-600 mt-1" />
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900">Working Hours</h3>
                      <div className="mt-1 text-gray-600">
                        <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                        <p>Saturday: 9:00 AM - 1:00 PM</p>
                        <p>Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                </ScrollAnimation>

                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact; 