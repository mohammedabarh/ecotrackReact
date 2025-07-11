import React from "react";

export default function Community() {
  const leaderboard = [
    {
      rank: 1,
      name: "Sarah Johnson",
      points: "1,250",
      icon: <i className="fas fa-crown text-yellow-400 text-2xl"></i>,
    },
    { rank: 2, name: "Alex Chen", points: "1,100" },
    { rank: 3, name: "Maria Garcia", points: "980" },
  ];

  return (
    <section id="community" className="py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">Community Leaderboard</h2>
        <div className="grid gap-4">
          {leaderboard.map((item) => (
            <div key={item.rank} className="leaderboard-item glass-card p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <span className="text-2xl font-bold text-green-500">{item.rank}</span>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{item.name}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{item.points} points</p>
                  </div>
                </div>
                {item.icon && item.icon}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}