import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-[#FFFFF] p-4 shadow-md flex justify-between items-center">
      {/* Logo */}
      <div className="text-2xl font-semibold">
        <span className="text-[#006953] font-bold">H</span>eal
        <span className="text-[#006953] font-bold">C</span>onnect
      </div>

      {/* Navbar Links */}
      <div className="hidden md:flex space-x-8 text-black">
        <a href="/symptom-checker" className="hover:text-[#006953]">Symptom Checker</a>
        <a href="/chatbot" className="hover:text-[#006953]">Chatbot</a>
        <a href="/planner" className="hover:text-[#006953]">Planner</a>
        <a href="/community" className="hover:text-[#006953]">Community</a>
        <a href="/virtual-health-camp" className="hover:text-[#006953]">DocDial</a>
        <a href="/interactive-healing" className="hover:text-[#006953]">Comfort Cloud</a>
        <a href="/login-signup" className="hover:text-[#006953]">Login / Signup</a>
      </div>

      {/* Join Now Button */}
      <a href="/join-now" className="bg-[#006953] text-white py-2 px-4 rounded hover:bg-[#3ea494]">
        Join Now
      </a>
    </nav>
  );
};

export default Navbar;