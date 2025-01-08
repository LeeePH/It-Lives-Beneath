import React from 'react';

const Homepage = () => {
  return (
    <section
      id="home"
      className="relative w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('./src/assets/bg.jpg')", backgroundPosition: "center" }}
    >

      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white z-10 px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 uppercase">It Lives Beneath</h1>
        <p className="text-lg md:text-xl mb-6 uppercase">
          A 2D RPG horror game where every step you take could be your last.
        </p>
        <a 
          href="#download" 
          className="bg-red-600 text-white px-8 py-4 rounded-lg text-lg md:text-xl hover:bg-red-700 transition"
        >
          Download Now
        </a>

        <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 bg-red-600 text-white py-2 px-6 rounded-full text-lg font-semibold whitespace-nowrap">
            Available on Windows & Mac
        </div>
      </div>
    </section>
  );
};

export default Homepage;
