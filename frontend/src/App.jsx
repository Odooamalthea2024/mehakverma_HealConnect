import React from 'react';
import { LanguageProvider } from './LanguageContext';
import Navbar from './components/Navbar';
import MentalHealthSupport from './components/home1';
import StatisticsImage from './components/StatisticsImage';
import Mission from './components/Mission';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Calendar from './components/Calender';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <div style={{ backgroundColor: '#F7F6F2' }}>
          <Navbar />
          <Routes>
            {/* Define routes for components */}
            <Route path="/" element={<>
              <MentalHealthSupport />
              <section className="flex justify-between mt-8">
                <StatisticsImage />
                <Mission />
              </section>
            </>} />
            <Route path="/calendar" element={<Calendar />} />
          </Routes>
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;
