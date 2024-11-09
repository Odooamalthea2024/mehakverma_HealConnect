import React from 'react';
// import { LanguageProvider } from './LanguageContext';
import { LanguageProvider  } from './LanguageContext';
import Navbar from './components/Navbar';
import MentalHealthSupport from './components/home1';
import StatisticsImage from './components/StatisticsImage';
import Mission from './components/Mission';

function App() {
  return (
    <LanguageProvider>
      <div style={{ backgroundColor: '#F7F6F2' }}>
        <Navbar />
        <MentalHealthSupport />
        <section className="flex justify-between mt-8">
          <StatisticsImage />
          <Mission />
        </section>
      </div>
    </LanguageProvider>
  );
}

export default App;
