import React from 'react';
import { FaTwitter, FaDiscord, FaYoutube, FaGithub } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#0B0A0A] to-[#1A1919] text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-red-500">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'About', 'Features', 'Download'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="hover:text-red-400 transition duration-300">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-red-500">Legal</h4>
            <ul className="space-y-3">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} className="hover:text-red-400 transition duration-300">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Stay Connected */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-red-500">Stay Connected</h4>
            <p className="mb-4">Follow us for the latest updates and community events.</p>
            <div className="flex space-x-4">
              {[FaTwitter, FaDiscord, FaYoutube, FaGithub].map((Icon, index) => (
                <a key={index} href="#" className="text-gray-400 hover:text-red-400 transition duration-300">
                  <Icon size={24} />
                </a>
              ))}
            </div>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-red-500">Newsletter</h4>
            <p className="mb-4">Subscribe for exclusive content and early access.</p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="bg-gray-800 text-white px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <button
                type="submit"
                className="bg-red-600 px-4 py-2 rounded-r-md hover:bg-red-700 transition duration-300"
              >
                <HiMail size={24} />
              </button>
            </form>
          </div>
        </div>

        {/* Developed By */}
        <div className="border-t border-gray-800 pt-8 mt-8 text-center">
          <p className="text-gray-400">
            Developed with passion by{' '}
            <a
              href="https://leenillar.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-400 hover:underline"
            >
              Lee Nillar
            </a>
          </p>
          <p className="text-sm text-gray-500 mt-4">
            © {new Date().getFullYear()} It Lives Beneath | All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

