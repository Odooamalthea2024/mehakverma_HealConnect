import React from 'react';

const Mission = () => {
  return (
    <div
      className="w-3/5 p-20 ml-5 mt-50 rounded-none mb-12"
      style={{ backgroundColor: '#F7F6F2' }}
    >
      <h2 className="text-3xl text-black font-serif font-playfair">
        At <span className="text-green-800 font-playfair">HealConnect</span>, We believe mental wellness should be accessible to everyone, anytime.
      </h2>
      <p className="mt-5 mb-5 text-gray-700 w-3/4">
        Our mission is to empower individuals to take control of their mental health with a range of tools designed to provide support, guidance, and personalized care.
      </p>
      <button className="bg-green-800 text-white px-4 py-2 rounded-full text-lg cursor-pointer">
        Get Started
      </button>
    </div>
  );
};

export default Mission;
