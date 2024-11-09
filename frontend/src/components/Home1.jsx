import React from 'react';

function MentalHealthSupport() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F7F6F2] p-10 space-y-10">
      
      <div className="flex flex-col md:flex-row items-center justify-center space-y-10 md:space-y-0 md:space-x-10">
        <div className="md:w-1/2 p-10 flex flex-col justify-center text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Mental health support for everyone.
          </h1>
          <p className="text-gray-600 mb-8 mt-4 leading-relaxed">
            Empowering your journey to mental well-being with accessible tools, supportive communities, expert guidance, and personalized resources that help you navigate life's challenges, build resilience, and foster a sense of hope and strength.
          </p>
          <button className="bg-[#006953] hover:bg-[#004c43] text-white font-semibold py-3 px-6 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105 mb-16 mt-4">
            Get started
          </button>
        </div>
        
        <div className="md:w-1/2 h-80 md:h-auto">
          <img 
            src="https://images.squarespace-cdn.com/content/v1/5f3b3b1a9b02081fa4eff770/c39cd82f-8e62-4268-a4b3-a06710b98593/iStock-1189088293.jpg?format=2500w" 
            alt="Family Mental Health Support" 
            className="object-cover h-full w-full rounded-3xl shadow-lg transition-shadow duration-300 hover:shadow-xl"
          />
        </div>
      </div>

      {/* Dark strip with a mental health quote at the bottom */}
      <div className="w-full bg-[#004c43] py-6 text-center mt-auto">
        <p className="text-white text-xl font-semibold">
          "Taking care of your mental health is not a luxury, it's a necessity. Prioritize your well-being."
        </p>
      </div>

    </div>
  );
}

export default MentalHealthSupport;
