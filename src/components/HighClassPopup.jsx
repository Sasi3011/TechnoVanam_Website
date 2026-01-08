import React from 'react';

const HighClassPopup = ({ open, onClose, title, description, icon }) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-30 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-xs flex flex-col items-center animate-fadeIn">
        <div className="mb-4">{icon}</div>
        <h2 className="text-lg font-semibold text-gray-900 mb-2 text-center">{title}</h2>
        <p className="text-gray-500 text-sm mb-6 text-center">{description}</p>
        <button
          className="w-full py-2 rounded-xl bg-brand-600 text-white font-semibold text-base shadow hover:bg-brand-700 transition"
          onClick={onClose}
        >
          Got it
        </button>
      </div>
    </div>
  );
};

export default HighClassPopup; 