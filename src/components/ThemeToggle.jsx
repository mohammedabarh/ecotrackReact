import React from "react";
import { useTheme } from "../context/ThemeContext";
export default function ThemeToggle() {
  const { dark, setDark } = useTheme();
  return (
    <button
      id="theme-toggle"
      className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 ml-3"
      aria-label="Toggle dark mode"
      onClick={() => setDark((d) => !d)}
    >
      {dark ? (
        <i className="fas fa-sun text-gray-300"></i>
      ) : (
        <i className="fas fa-moon text-gray-600"></i>
      )}
    </button>
  );
}