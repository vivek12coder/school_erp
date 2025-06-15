import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import withScrollAnimation from './components/withScrollAnimation';

// Import components
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Solutions from './pages/solutions/Solutions';
import AcademicManagement from './pages/solutions/AcademicManagement';
import StudentPortal from './pages/solutions/StudentPortal';
import StaffPortal from './pages/solutions/StaffPortal';
import FinanceManagement from './pages/solutions/FinanceManagement';
import AIIntegration from './pages/features/AIIntegration';
import Analytics from './pages/features/Analytics';

// Apply scroll animations to pages
const AnimatedHome = withScrollAnimation(Home);
const AnimatedContact = withScrollAnimation(Contact);
const AnimatedAbout = withScrollAnimation(About);
const AnimatedSolutions = withScrollAnimation(Solutions);
const AnimatedAcademicManagement = withScrollAnimation(AcademicManagement);
const AnimatedStudentPortal = withScrollAnimation(StudentPortal);
const AnimatedStaffPortal = withScrollAnimation(StaffPortal);
const AnimatedFinanceManagement = withScrollAnimation(FinanceManagement);
const AnimatedAIIntegration = withScrollAnimation(AIIntegration);
const AnimatedAnalytics = withScrollAnimation(Analytics);

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow pt-16">
            <Routes>
              <Route path="/" element={<AnimatedHome />} />
              <Route path="/contact" element={<AnimatedContact />} />
              <Route path="/about" element={<AnimatedAbout />} />
              <Route path="/solutions" element={<AnimatedSolutions />} />
              <Route path="/solutions/academic" element={<AnimatedAcademicManagement />} />
              <Route path="/solutions/student" element={<AnimatedStudentPortal />} />
              <Route path="/solutions/staff" element={<AnimatedStaffPortal />} />
              <Route path="/solutions/finance" element={<AnimatedFinanceManagement />} />
              <Route path="/features/ai-integration" element={<AnimatedAIIntegration />} />
              <Route path="/features/analytics" element={<AnimatedAnalytics />} />
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
};

export default App;
