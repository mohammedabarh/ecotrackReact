import React from "react";
import ThemeToggle from "./ThemeToggle";
import { useAuth } from "../context/AuthContext";

export default function Navbar({ onSignup }) {
  const { user, login, logout } = useAuth();
  return (
    <nav className="fixed w-full z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-green-100 dark:border-green-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <a href="#" className="flex items-center space-x-2">
              <i className="fas fa-leaf text-2xl text-green-500"></i>
              <span className="text-xl font-bold text-green-600 dark:text-green-400">EcoTrack</span>
            </a>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#dashboard" className="nav-link text-gray-600 dark:text-gray-300 hover:text-green-500">Dashboard</a>
            <a href="#activities" className="nav-link text-gray-600 dark:text-gray-300 hover:text-green-500">Activities</a>
            <a href="#community" className="nav-link text-gray-600 dark:text-gray-300 hover:text-green-500">Community</a>
            <a href="#goals" className="nav-link text-gray-600 dark:text-gray-300 hover:text-green-500">Goals</a>
            {user ? (
              <>
                <div className="flex items-center space-x-2">
                  <img src={user.picture} alt={user.name} className="w-8 h-8 rounded-full" />
                  <span className="hidden md:inline text-gray-900 dark:text-gray-200">{user.name}</span>
                </div>
                <button onClick={logout} className="nav-link text-gray-600 dark:text-gray-300 hover:text-green-500">Logout</button>
              </>
            ) : (
              <>
                <button onClick={login} className="nav-link text-gray-600 dark:text-gray-300 hover:text-green-500">Login</button>
                <button onClick={onSignup} className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full transition-colors">Sign Up</button>
              </>
            )}
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}