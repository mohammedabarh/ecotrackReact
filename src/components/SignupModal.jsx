import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";

export default function SignupModal({ open, onClose }) {
  const { login } = useAuth();
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.password) {
      alert("Please fill in all fields");
      return;
    }
    if (form.password.length < 8) {
      alert("Password must be at least 8 characters");
      return;
    }
    login({
      name: form.name,
      email: form.email,
      picture: "https://randomuser.me/api/portraits/men/55.jpg",
    });
    onClose();
  };

  if (!open) return null;
  return (
    <div
      id="signup-modal"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 modal-fade"
      onClick={(e) => {
        if (e.target.id === "signup-modal") onClose();
      }}
    >
      <div className="glass-card p-8 max-w-md w-full mx-4 relative">
        <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
          Create Your Account
        </h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-600 dark:text-gray-300 mb-2">
              Full Name
            </label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 bg-white dark:bg-gray-800"
            />
          </div>
          <div>
            <label className="block text-gray-600 dark:text-gray-300 mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 bg-white dark:bg-gray-800"
            />
          </div>
          <div>
            <label className="block text-gray-600 dark:text-gray-300 mb-2">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 bg-white dark:bg-gray-800"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg transition-colors"
          >
            Sign Up
          </button>
        </form>
        <div className="mt-4 text-center">
          <p className="text-gray-600 dark:text-gray-300">
            Already have an account?{" "}
            <button
              className="text-green-500 hover:underline"
              onClick={() => {
                onClose();
              }}
            >
              Log in
            </button>
          </p>
        </div>
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
          onClick={onClose}
        >
          <i className="fas fa-times"></i>
        </button>
      </div>
    </div>
  );
}