import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  BuildingOfficeIcon,
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
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
              Get in Touch
            </h1>
            <p className="mt-4 text-xl text-gray-600">
              We'd love to hear from you. Please fill out this form or shoot us an email.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <form onSubmit={formik.handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    {...formik.getFieldProps('name')}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                  {formik.touched.name && formik.errors.name && (
                    <p className="mt-1 text-sm text-red-600">{formik.errors.name}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    {...formik.getFieldProps('email')}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                  {formik.touched.email && formik.errors.email && (
                    <p className="mt-1 text-sm text-red-600">{formik.errors.email}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    {...formik.getFieldProps('phone')}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                  {formik.touched.phone && formik.errors.phone && (
                    <p className="mt-1 text-sm text-red-600">{formik.errors.phone}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="school" className="block text-sm font-medium text-gray-700">
                    School Name
                  </label>
                  <input
                    id="school"
                    type="text"
                    {...formik.getFieldProps('school')}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                  {formik.touched.school && formik.errors.school && (
                    <p className="mt-1 text-sm text-red-600">{formik.errors.school}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    {...formik.getFieldProps('message')}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                  {formik.touched.message && formik.errors.message && (
                    <p className="mt-1 text-sm text-red-600">{formik.errors.message}</p>
                  )}
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 transform hover:scale-105 transition-all duration-200"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>

            {/* Contact Information */}
            <div className="lg:pl-8">
              <div className="space-y-8">
                <h2 className="text-2xl font-bold text-gray-900">Contact Information</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
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

                  <div className="flex items-start">
                    <PhoneIcon className="h-6 w-6 text-blue-600 mt-1" />
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900">Phone</h3>
                      <p className="mt-1 text-gray-600">+1 (555) 123-4567</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <EnvelopeIcon className="h-6 w-6 text-blue-600 mt-1" />
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900">Email</h3>
                      <p className="mt-1 text-gray-600">contact@schoolerp.com</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <MapPinIcon className="h-6 w-6 text-blue-600 mt-1" />
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900">Working Hours</h3>
                      <div className="mt-1 text-gray-600">
                        <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                        <p>Saturday: 9:00 AM - 1:00 PM</p>
                        <p>Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Map or Additional Information */}
                <div className="mt-12 bg-blue-50 rounded-2xl p-8">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Why Choose School ERP?</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <span className="flex-shrink-0 h-1.5 w-1.5 rounded-full bg-blue-600 mt-2 mr-2"></span>
                      <span>Comprehensive school management solution</span>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 h-1.5 w-1.5 rounded-full bg-blue-600 mt-2 mr-2"></span>
                      <span>24/7 dedicated support team</span>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 h-1.5 w-1.5 rounded-full bg-blue-600 mt-2 mr-2"></span>
                      <span>Easy integration with existing systems</span>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 h-1.5 w-1.5 rounded-full bg-blue-600 mt-2 mr-2"></span>
                      <span>Regular updates and new features</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact; 