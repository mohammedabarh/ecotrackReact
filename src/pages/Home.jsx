import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Dashboard from "../components/Dashboard";
import Activities from "../components/Activities";
import Community from "../components/Community";
import Goals from "../components/Goals";
import Footer from "../components/Footer";
import SignupModal from "../components/SignupModal";
import ParticlesBG from "../components/ParticlesBG";

export default function Home() {
  const [showSignup, setShowSignup] = useState(false);
  return (
    <div className="relative bg-green-50 dark:bg-gray-900 transition-colors duration-300">
      <ParticlesBG />
      <Navbar onSignup={() => setShowSignup(true)} />
      <Hero onSignup={() => setShowSignup(true)} />
      <Dashboard />
      <Activities />
      <Community />
      <Goals />
      <Footer />
      <SignupModal open={showSignup} onClose={() => setShowSignup(false)} />
    </div>
  );
}