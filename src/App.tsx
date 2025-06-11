import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import AcademicManagement from './pages/solutions/AcademicManagement';
import StudentPortal from './pages/solutions/StudentPortal';
import StaffPortal from './pages/solutions/StaffPortal';
import FinanceManagement from './pages/solutions/FinanceManagement';
import AIIntegration from './pages/features/AIIntegration';
import Analytics from './pages/features/Analytics';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen bg-gray-50 flex flex-col">
          <Header />
          <main className="pt-16 flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<About />} />
              <Route path="/solutions/academic" element={<AcademicManagement />} />
              <Route path="/solutions/student" element={<StudentPortal />} />
              <Route path="/solutions/staff" element={<StaffPortal />} />
              <Route path="/solutions/finance" element={<FinanceManagement />} />
              <Route path="/features/ai-integration" element={<AIIntegration />} />
              <Route path="/features/analytics" element={<Analytics />} />
              <Route path="/features" element={<div>Features Page (Coming Soon)</div>} />
              <Route path="/pricing" element={<div>Pricing Page (Coming Soon)</div>} />
              <Route path="/testimonials" element={<div>Testimonials Page (Coming Soon)</div>} />
              <Route path="/login" element={<div>Login Page (Coming Soon)</div>} />
              <Route path="/request-demo" element={<div>Request Demo Page (Coming Soon)</div>} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
