import React from 'react';
import fight from '../assets/fight.png';
import trade from '../assets/trade.png';
import win from '../assets/win.png';
import bgImage from '../assets/bg2.jpg'; // Import the background image

const Features = () => {
  return (
    <section id="features" className="py-16 bg-[#0B0A0A]">
      <div
        className="relative w-full min-h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage})` }} // Use the imported image here
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        
        <div className="relative z-10 container mx-auto px-4 py-16 flex flex-col min-h-screen">
        
          <div className="flex-grow grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <FeatureCard
              title="FIGHT"
              image={fight}
              description="Engage in fierce battles where every decision counts in order to survive."
            />
            <FeatureCard
              title="TRADE"
              image={trade}
              description="Exchange goods and resources with NPC's to stay ahead in the game."
            />
            <FeatureCard
              title="WIN"
              image={win}
              description="From small enemies to bosses, overcome the dangers beneath to claim victory and save the town."
            />
          </div>

          <div className="mt-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 text-center uppercase">
              Planned Features
            </h2>
            <ul className="list-none text-xl text-gray-100 mx-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <li className="mb-4 flex items-start">
                <span className="text-red-500 mr-2">•</span>
                Enhanced combat mechanics and more enemy variety
              </li>
              <li className="mb-4 flex items-start">
                <span className="text-red-500 mr-2">•</span>
                Expanded trade system with new NPCs and rare items
              </li>
              <li className="mb-4 flex items-start">
                <span className="text-red-500 mr-2">•</span>
                New areas to explore, such as the overworld with more exciting entities and beautiful towns
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({ title, image, description }) => (
  <div className="text-center mb-8">
    <h3 className="text-2xl sm:text-3xl font-bold text-white uppercase mb-4">{title}</h3>
    <img
      src={image}
      alt={`${title} Feature`}
      className="w-full h-auto rounded-lg shadow-lg mb-4"
    />
    <p className="text-center text-sm sm:text-base text-gray-100">{description}</p>
  </div>
);

export default Features;
