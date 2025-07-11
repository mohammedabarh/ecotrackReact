import React from "react";
export default function Hero({ onSignup }) {
  return (
    <section className="pt-24 pb-12 px-4 relative z-10">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-green-600 dark:text-green-400 mb-6">
          Track Your Environmental Impact
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
          Make sustainable choices and contribute to a greener future
        </p>
        <div className="flex justify-center space-x-4">
          <button
            className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full transition-colors"
            onClick={onSignup}
          >
            Get Started
          </button>
          <a
            href="#features"
            className="border border-green-500 text-green-500 hover:bg-green-50 dark:hover:bg-green-900/30 px-8 py-3 rounded-full transition-colors"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}