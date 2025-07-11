import React from "react";
import { useAuth } from "../context/AuthContext";
import { Line, Doughnut } from "react-chartjs-2";
import Chart from "chart.js/auto";

export default function Dashboard() {
  const { user } = useAuth();
  return (
    <section id="dashboard" className="py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">
          Your Impact Dashboard
        </h2>

        {/* Profile */}
        {user && (
          <div className="glass-card p-6 mb-8 flex items-center space-x-4">
            <img
              src={user.picture}
              alt="User Avatar"
              className="w-16 h-16 rounded-full"
            />
            <div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                {user.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">{user.email}</p>
            </div>
          </div>
        )}

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="glass-card p-6 text-center hover:bg-green-50/50 dark:hover:bg-gray-800/50 cursor-pointer">
            <i className="fas fa-recycle text-4xl text-green-500 mb-4"></i>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Recycle Now</h3>
            <p className="text-gray-600 dark:text-gray-300">Start recycling and earn points</p>
          </div>
          <div className="glass-card p-6 text-center hover:bg-green-50/50 dark:hover:bg-gray-800/50 cursor-pointer">
            <i className="fas fa-bolt text-4xl text-green-500 mb-4"></i>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Save Energy</h3>
            <p className="text-gray-600 dark:text-gray-300">Track your energy usage</p>
          </div>
          <div className="glass-card p-6 text-center hover:bg-green-50/50 dark:hover:bg-gray-800/50 cursor-pointer">
            <i className="fas fa-tint text-4xl text-green-500 mb-4"></i>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Conserve Water</h3>
            <p className="text-gray-600 dark:text-gray-300">Monitor water usage</p>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {[
            { label: "Carbon Footprint", value: "2.5 tons", width: "65%" },
            { label: "Energy Saved", value: "487 kWh", width: "75%" },
            { label: "Water Saved", value: "1,250 L", width: "85%" },
            { label: "Trees Planted", value: "12", width: "45%" },
          ].map(({ label, value, width }) => (
            <div key={label} className="glass-card p-6 stat-card">
              <h3 className="text-lg font-semibold text-gray-600 dark:text-gray-300">{label}</h3>
              <p className="text-3xl font-bold text-green-500">{value}</p>
              <div className="eco-progress mt-4">
                <div className="eco-progress-bar" style={{ width }} />
              </div>
            </div>
          ))}
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="glass-card p-6">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Monthly Impact Trends</h3>
            <div className="chart-container">
              <Line
                data={{
                  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
                  datasets: [
                    {
                      label: "Carbon Footprint",
                      data: [2.8, 2.6, 2.5, 2.3, 2.1, 2.0],
                      borderColor: "#22c55e",
                      backgroundColor: "rgba(34,197,94,0.1)",
                      fill: true,
                      tension: 0.4,
                    },
                  ],
                }}
                options={{
                  responsive: true,
                  plugins: { legend: { display: false } },
                  scales: {
                    y: { beginAtZero: false, grid: { color: "rgba(0,0,0,0.05)" } },
                    x: { grid: { display: false } },
                  },
                }}
              />
            </div>
          </div>
          <div className="glass-card p-6">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Activity Distribution</h3>
            <div className="chart-container">
              <Doughnut
                data={{
                  labels: ["Recycling", "Energy Saving", "Water Conservation", "Transportation"],
                  datasets: [
                    {
                      data: [30, 25, 20, 25],
                      backgroundColor: ["#22c55e", "#16a34a", "#15803d", "#166534"],
                      borderWidth: 0,
                    },
                  ],
                }}
                options={{
                  responsive: true,
                  plugins: {
                    legend: {
                      position: "bottom",
                      labels: { boxWidth: 12, padding: 20 },
                    },
                  },
                  cutout: "70%",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}