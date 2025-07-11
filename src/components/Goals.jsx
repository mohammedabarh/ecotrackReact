import React from "react";

export default function Goals() {
  const goals = [
    {
      title: "Reduce Carbon Footprint",
      desc: "Goal: 2 tons per year",
      width: "75%",
    },
    {
      title: "Increase Recycling",
      desc: "Goal: 10kg per month",
      width: "60%",
    },
    {
      title: "Plant More Trees",
      desc: "Goal: 20 trees this year",
      width: "45%",
    },
  ];
  return (
    <section id="goals" className="py-12 px-4 bg-green-50/50 dark:bg-gray-800/50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">Environmental Goals</h2>
        <div className="grid gap-6">
          {goals.map((g) => (
            <div key={g.title} className="goal-progress glass-card p-6">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{g.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{g.desc}</p>
              <div className="eco-progress">
                <div className="eco-progress-bar" style={{ width: g.width }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}