import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/Hero';
import Features from '../components/Features';

const Home: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>SchoolERP - All-in-One School Management Solution</title>
        <meta
          name="description"
          content="Transform your educational institution with our comprehensive ERP system. Streamline administrative tasks and enhance communication."
        />
      </Helmet>
      <Hero />
      <Features />
      {/* Additional sections will be added here */}
    </>
  );
};

export default Home; 