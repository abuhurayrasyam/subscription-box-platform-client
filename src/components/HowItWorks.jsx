import React from 'react';
import { FaBoxOpen, FaCheckCircle, FaSmileBeam } from 'react-icons/fa';

const HowItWorks = () => {
  return (
    <div className="w-11/12 mx-auto py-12">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-10">How It Works</h2>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto">
        <div className="text-center">
          <FaBoxOpen className="text-5xl text-indigo-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Choose a Box</h3>
          <p className="text-gray-600">Pick a subscription that matches your interests.</p>
        </div>
        <div className="text-center">
          <FaCheckCircle className="text-5xl text-indigo-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Subscribe</h3>
          <p className="text-gray-600">Confirm your plan with secure checkout.</p>
        </div>
        <div className="text-center">
          <FaSmileBeam className="text-5xl text-indigo-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Enjoy</h3>
          <p className="text-gray-600">Get monthly surprises delivered to your door!</p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
