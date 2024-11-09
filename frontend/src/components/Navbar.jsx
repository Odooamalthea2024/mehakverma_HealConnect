import React, { useContext } from 'react';
import { LanguageContext } from '../LanguageContext';

const Navbar = () => {
  const { language, setLanguage } = useContext(LanguageContext);

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  return (
    <nav className="bg-[#FFFFFF] p-4 shadow-md flex justify-between items-center">
      <div className="text-2xl font-semibold">
        <span className="text-[#006953] font-bold">H</span>eal
        <span className="text-[#006953] font-bold">C</span>onnect
      </div>
      <div className="hidden md:flex space-x-8 text-black">
        <a href="/symptom-checker" className="hover:text-[#006953]">StressTrack</a>
        <a href="/chatbot" className="hover:text-[#006953]">Chatbot</a>
        <a href="/planner" className="hover:text-[#006953]">Planner</a>
        <a href="/community" className="hover:text-[#006953]">Community</a>
        <a href="/virtual-health-camp" className="hover:text-[#006953]">DocDial</a>
        <a href="/interactive-healing" className="hover:text-[#006953]">Comfort Cloud</a>
        <a href="/login-signup" className="hover:text-[#006953]">Login / Signup</a>
      </div>
      <div className="flex items-center space-x-4">
        <a href="/join-now" className="bg-[#006953] text-white py-2 px-4 rounded hover:bg-[#3ea494]">
          Join Now
        </a>
        <select
          value={language}
          onChange={handleLanguageChange}
          className="border border-gray-300 rounded p-2"
        >
          <option value="en">English</option>
          <option value="hi">Hindi</option>
          <option value="mr">Marathi</option>
        </select>
      </div>
    </nav>
  );
};

export default Navbar;
