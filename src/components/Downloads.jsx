import React from 'react';
import gameLogo from '../assets/It Lives Beneath.png'; // Replace with actual path to your logo
import { FaWindows, FaApple } from 'react-icons/fa';

const Download = () => {
  return (
    <section id="download" className="py-24 bg-gradient-to-b from-[#0B0A0A] to-[#1A1919]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          
          {/* Left Side: Download Section */}
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 text-center lg:text-left leading-tight uppercase">
              Download It Lives Beneath
            </h2>
            <p className="text-xl text-gray-300 mb-8 text-center lg:text-left">
              Dive into a world of horror and adventure. Your journey begins with a single click.
            </p>

            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              {/* Download Buttons */}
              <a
                href="#"
                className="inline-flex items-center justify-center bg-red-600 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-red-700 transition duration-300 text-lg font-semibold"
              >
                <FaWindows className="mr-2" />
                Download for Windows
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center bg-gray-800 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-gray-900 transition duration-300 text-lg font-semibold"
              >
                <FaApple className="mr-2" />
                Download for Mac
              </a>
            </div>
          </div>

          {/* Right Side: Logo and Banner */}
          <div className="lg:w-1/2 text-center">
            <div className="relative inline-block">
              <img
                src={gameLogo}
                alt="Game Logo"
                className="w-full max-w-md mx-auto rounded-full shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Download;

