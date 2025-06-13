import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const ContactFormSchema = Yup.object().shape({
  fullName: Yup.string().required('Full name is required'),
  emailId: Yup.string().email('Invalid email').required('Email is required'),
  mobileNumber: Yup.string().required('Mobile number is required'),
  schoolOrganization: Yup.string().required('School/Organization is required'),
  website: Yup.string().url('Invalid URL'),
  city: Yup.string().required('City is required'),
  address: Yup.string().required('Address is required'),
  message: Yup.string().required('Message is required'),
});

const ContactForm: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-white to-blue-50 py-12 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-600 mb-6 sm:mb-8 text-center">
          Get School ERP for your school
        </h2>
        
        <Formik
          initialValues={{
            fullName: '',
            emailId: '',
            mobileNumber: '',
            schoolOrganization: '',
            website: '',
            city: '',
            address: '',
            message: '',
          }}
          validationSchema={ContactFormSchema}
          onSubmit={(values, { setSubmitting }) => {
            console.log(values);
            setSubmitting(false);
          }}
        >
          {({ errors, touched }) => (
            <Form className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              <div className="space-y-1">
                <Field
                  name="fullName"
                  type="text"
                  placeholder="Full Name"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
                />
                {errors.fullName && touched.fullName && (
                  <div className="text-red-500 text-xs">{errors.fullName}</div>
                )}
              </div>

              <div className="space-y-1">
                <Field
                  name="emailId"
                  type="email"
                  placeholder="Email ID"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
                />
                {errors.emailId && touched.emailId && (
                  <div className="text-red-500 text-xs">{errors.emailId}</div>
                )}
              </div>

              <div className="space-y-1">
                <Field
                  name="mobileNumber"
                  type="tel"
                  placeholder="Mobile Number"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
                />
                {errors.mobileNumber && touched.mobileNumber && (
                  <div className="text-red-500 text-xs">{errors.mobileNumber}</div>
                )}
              </div>

              <div className="space-y-1">
                <Field
                  name="schoolOrganization"
                  type="text"
                  placeholder="School/Organization"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
                />
                {errors.schoolOrganization && touched.schoolOrganization && (
                  <div className="text-red-500 text-xs">{errors.schoolOrganization}</div>
                )}
              </div>

              <div className="space-y-1">
                <Field
                  name="website"
                  type="url"
                  placeholder="Website"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
                />
                {errors.website && touched.website && (
                  <div className="text-red-500 text-xs">{errors.website}</div>
                )}
              </div>

              <div className="space-y-1">
                <Field
                  name="address"
                  type="text"
                  placeholder="Address"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
                />
                {errors.address && touched.address && (
                  <div className="text-red-500 text-xs">{errors.address}</div>
                )}
              </div>

              <div className="space-y-1">
                <Field
                  name="city"
                  type="text"
                  placeholder="City"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
                />
                {errors.city && touched.city && (
                  <div className="text-red-500 text-xs">{errors.city}</div>
                )}
              </div>

              <div className="sm:col-span-2 space-y-1">
                <Field
                  name="message"
                  as="textarea"
                  placeholder="Your Message"
                  rows={4}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
                />
                {errors.message && touched.message && (
                  <div className="text-red-500 text-xs">{errors.message}</div>
                )}
              </div>

              <div className="sm:col-span-2 lg:col-span-3">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="w-full sm:w-auto">
                    <div className="g-recaptcha" data-sitekey="your-recaptcha-site-key"></div>
                  </div>
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-5 sm:px-7 py-2 sm:py-2.5 text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-colors font-medium text-sm sm:text-base"
                  >
                    SUBMIT
                  </button>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default ContactForm; 