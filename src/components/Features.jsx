import React from 'react';
import bgImage from '../assets/bg.jpg'; // Import the background image

const Homepage = () => {
  return (
    <section
      id="home"
      className="relative w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }} // Use imported image
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-16 flex flex-col min-h-screen items-center justify-center text-center text-white">
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4 uppercase">
          It Lives Beneath
        </h1>
        <p className="text-lg md:text-xl mb-6 uppercase">
          A 2D RPG horror game where every step you take could be your last.
        </p>

        {/* Call-to-action */}
        <a
          href="#download"
          className="bg-red-600 text-white px-8 py-4 rounded-lg text-lg md:text-xl hover:bg-red-700 transition"
        >
          Download Now
        </a>

        {/* Footer Banner */}
        <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 bg-red-600 text-white py-2 px-6 rounded-full text-lg font-semibold whitespace-nowrap">
          Available on Windows & Mac
        </div>
      </div>
    </section>
  );
};

export default Homepage;
