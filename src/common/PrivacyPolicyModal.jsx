import React from 'react';

const PrivacyPolicyModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-gray-900 p-8 rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto">
        <h2 className="text-2xl font-bold text-white mb-4">Privacy Policy</h2>
        <p className="text-gray-300 mb-4">
          This Privacy Policy describes how your personal information is collected, used, and shared when you visit or download from <strong>It Lives Beneath</strong>.
        </p>
        
        <h3 className="text-xl text-white mb-2">1. Information We Collect</h3>
        <p className="text-gray-300 mb-4">
          We may collect the following types of information when you interact with It Lives Beneath:
        </p>
        <ul className="list-disc pl-6 text-gray-300 mb-4">
          <li>Personal identification information (name, email address, etc.)</li>
          <li>Device information (IP address, operating system, browser type)</li>
          <li>Usage data (how you interact with the game, settings, preferences)</li>
        </ul>

        <h3 className="text-xl text-white mb-2">2. How We Use Your Information</h3>
        <p className="text-gray-300 mb-4">
          The information we collect may be used in the following ways:
        </p>
        <ul className="list-disc pl-6 text-gray-300 mb-4">
          <li>To improve the game and provide better user experiences</li>
          <li>To respond to customer service requests and support needs</li>
          <li>For marketing and promotional purposes (if applicable)</li>
        </ul>

        <h3 className="text-xl text-white mb-2">3. Data Security</h3>
        <p className="text-gray-300 mb-4">
          We take reasonable precautions to protect your personal information. However, no method of electronic storage is 100% secure, and we cannot guarantee absolute security.
        </p>

        <h3 className="text-xl text-white mb-2">4. Sharing Your Information</h3>
        <p className="text-gray-300 mb-4">
          We do not sell or rent your personal information to third parties. However, we may share information with trusted third-party service providers for operational purposes, such as analytics or marketing.
        </p>

        <h3 className="text-xl text-white mb-2">5. Your Rights</h3>
        <p className="text-gray-300 mb-4">
          You have the right to access, update, or delete your personal information. If you wish to exercise these rights, please contact us at <strong>nillarbernardlee@gmail.com</strong>.
        </p>

        <h3 className="text-xl text-white mb-2">6. Changes to This Privacy Policy</h3>
        <p className="text-gray-300 mb-4">
          We reserve the right to update this privacy policy. Any changes will be posted on this page, and the date of the most recent update will be indicated at the top of the page.
        </p>

        <button
          onClick={onClose}
          className="mt-6 bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition duration-300"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default PrivacyPolicyModal;
