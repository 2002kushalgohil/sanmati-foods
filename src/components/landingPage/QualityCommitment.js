import React from "react";

function QualityCommitment() {
  const commitments = [
    {
      title: "Premium Sourcing",
      description: "Direct from India's finest spice farms",
      icon: "🌿"
    },
    {
      title: "Traditional Processing",
      description: "Ground fresh using time-honored methods",
      icon: "⚡"
    },
    {
      title: "Quality Testing",
      description: "Rigorous quality checks at every stage",
      icon: "✨"
    },
    {
      title: "Pure & Natural",
      description: "No artificial additives or preservatives",
      icon: "🌱"
    }
  ];

  return (
    <div className="globalPadding bg-[var(--secondary-bg-color)]">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Quality Commitment</h2>
        <p className="text-sm md:text-lg text-gray-600 max-w-2xl mx-auto">
          At Gurudev Masala, we maintain the highest standards of quality in every step,
          from sourcing to packaging, ensuring you get the finest spices for your kitchen.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {commitments.map((item, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all">
            <div className="text-4xl mb-4">{item.icon}</div>
            <h3 className="text-xl font-bold mb-2">{item.title}</h3>
            <p className="text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default QualityCommitment