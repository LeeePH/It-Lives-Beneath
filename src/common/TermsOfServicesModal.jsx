import React from 'react';

const TermsOfServiceModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-gray-900 p-8 rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto">
        <h2 className="text-2xl font-bold text-white mb-4">Terms of Service</h2>
        <p className="text-gray-300 mb-4">
          By accessing or using <strong>It Lives Beneath</strong>, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with these terms, please refrain from using the game.
        </p>
        
        <h3 className="text-xl text-white mb-2">1. License Grant</h3>
        <p className="text-gray-300 mb-4">
          We grant you a non-exclusive, non-transferable, and revocable license to access and play the game <strong>It Lives Beneath</strong> for personal use, subject to these terms.
        </p>

        <h3 className="text-xl text-white mb-2">2. Prohibited Conduct</h3>
        <p className="text-gray-300 mb-4">
          You agree not to:
        </p>
        <ul className="list-disc pl-6 text-gray-300 mb-4">
          <li>Modify, reverse engineer, decompile, or disassemble the game.</li>
          <li>Distribute, sell, or lease the game or any part of it.</li>
          <li>Use the game for illegal purposes or violate any laws or regulations.</li>
          <li>Engage in abusive or disruptive behavior towards other players or the community.</li>
        </ul>

        <h3 className="text-xl text-white mb-2">3. User-Generated Content</h3>
        <p className="text-gray-300 mb-4">
          By submitting any user-generated content (e.g., screenshots, feedback, or fan art), you grant us a worldwide, royalty-free, and perpetual license to use, modify, and distribute such content in any manner we choose.
        </p>

        <h3 className="text-xl text-white mb-2">4. Privacy</h3>
        <p className="text-gray-300 mb-4">
          Your use of <strong>It Lives Beneath</strong> is also governed by our Privacy Policy. By using the game, you consent to the collection and use of your personal data as outlined in the Privacy Policy.
        </p>

        <h3 className="text-xl text-white mb-2">5. Termination</h3>
        <p className="text-gray-300 mb-4">
          We reserve the right to suspend or terminate your access to <strong>It Lives Beneath</strong> at our sole discretion, without notice, if you violate any of these terms.
        </p>

        <h3 className="text-xl text-white mb-2">6. Limitation of Liability</h3>
        <p className="text-gray-300 mb-4">
          We are not responsible for any damages, losses, or issues that arise from your use of the game. This includes any indirect, incidental, or consequential damages.
        </p>

        <h3 className="text-xl text-white mb-2">7. Changes to the Terms</h3>
        <p className="text-gray-300 mb-4">
          We reserve the right to update or change these Terms of Service at any time. Any changes will be posted on this page, and your continued use of the game signifies your acceptance of those changes.
        </p>

        <h3 className="text-xl text-white mb-2">8. Governing Law</h3>
        <p className="text-gray-300 mb-4">
          These terms are governed by the laws of your jurisdiction, and any disputes will be resolved in the appropriate courts.
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

export default TermsOfServiceModal;
