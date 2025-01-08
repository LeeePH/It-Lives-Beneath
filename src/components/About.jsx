import React from 'react';
import gameScreenshot from '../assets/sample2.png';
import { ArrowRight } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-[#0B0A0A] to-[#1A1919]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
            <div className="relative">
              <img
                src={gameScreenshot}
                alt="Game Screenshot"
                className="w-full h-auto rounded-lg shadow-2xl"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 rounded-lg"></div>
              <p className="absolute bottom-4 lg:left-48 text-sm text-gray-200 italic">
                A remains of the ones who tried
              </p>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-50 uppercase tracking-wide text-center">
              Do You Have What It Takes?
            </h2>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              It Lives Beneath is a 2D RPG horror game that plunges you into a dark, chilling world
              where danger lurks around every corner. Every step could be your last as you explore eerie
              environments, battle horrifying enemies, and uncover the secrets of a forgotten realm.
            </p>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              The game focuses on survival, mystery, and exploration, challenging players to think strategically
              while managing limited resources. Will you survive, or will the horrors beneath swallow you whole?
            </p>
            <div className="flex justify-start">
              <a
                href="#features"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 transition duration-150 ease-in-out"
              >
                Explore Features
                <ArrowRight className="ml-2 -mr-1 h-5 w-5" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

