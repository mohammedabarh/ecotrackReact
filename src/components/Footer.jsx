import React from "react";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-green-100 dark:border-green-900 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">About EcoTrack</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Empowering sustainable living through data-driven insights
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#dashboard" className="text-gray-600 dark:text-gray-300 hover:text-green-500">
                  Dashboard
                </a>
              </li>
              <li>
                <a href="#activities" className="text-gray-600 dark:text-gray-300 hover:text-green-500">
                  Activities
                </a>
              </li>
              <li>
                <a href="#community" className="text-gray-600 dark:text-gray-300 hover:text-green-500">
                  Community
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-green-500">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-green-500">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-green-500">
                  Support
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-green-500">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-green-500">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-green-500">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}