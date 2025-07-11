import React from "react";

export default function Activities() {
  const activities = [
    {
      title: "Recycling",
      desc: "Recycled 5kg of plastic materials",
      points: "+25 points",
    },
    {
      title: "Energy Saving",
      desc: "Used energy-efficient appliances",
      points: "+15 points",
    },
    {
      title: "Water Conservation",
      desc: "Installed water-saving fixtures",
      points: "+20 points",
    },
  ];

  return (
    <section id="activities" className="py-12 px-4 bg-green-50/50 dark:bg-gray-800/50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">Recent Activities</h2>
        <div className="grid gap-6">
          {activities.map((a) => (
            <div key={a.title} className="activity-item glass-card p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{a.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{a.desc}</p>
                </div>
                <span className="text-green-500 text-lg font-semibold">{a.points}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}