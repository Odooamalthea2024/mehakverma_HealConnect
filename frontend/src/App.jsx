import { useState } from 'react';
import MentalHealthSupport from './components/home1';
import Navbar from './components/Navbar';
import StatisticsImage from './components/StatisticsImage';
import Mission from './components/Mission';

function App() {
  return (
    <div style={{ backgroundColor: '#F7F6F2' }}>
      <Navbar />
      <MentalHealthSupport />
      <section className="flex justify-between mt-8">
        <StatisticsImage />
        <Mission />
      </section>
    </div>
  );
}

export default App;
