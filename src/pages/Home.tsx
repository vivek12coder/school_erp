import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/Hero';
import Features from '../components/Features';
import ContactForm from '../components/ContactForm';
import Solutions from './solutions/Solutions';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>SchoolERP - All-in-One School Management Solution</title>
        <meta
          name="description"
          content="Transform your educational institution with our comprehensive ERP system. Streamline administrative tasks and enhance communication."
        />
        
      </Helmet>
      
      <Hero />
      <ContactForm />
      <Features />
      <Solutions />
      {/* Additional sections will be added here */}
    </div>
  );
};

export default Home; 