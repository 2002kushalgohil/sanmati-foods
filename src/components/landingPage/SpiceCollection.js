import React from "react";
import { Button } from "../ui/button";

function SpiceCollection() {
  const spices = [
    {
      name: "Garam Masala",
      description: "A perfect blend of aromatic spices for authentic Indian curries",
      image: "https://images.pexels.com/photos/2802527/pexels-photo-2802527.jpeg"
    },
    {
      name: "Chaat Masala",
      description: "Tangy and spicy blend perfect for street food and snacks",
      image: "https://images.pexels.com/photos/4226896/pexels-photo-4226896.jpeg"
    },
    {
      name: "Biryani Masala",
      description: "Special blend of spices for perfect biryani every time",
      image: "https://images.pexels.com/photos/6937455/pexels-photo-6937455.jpeg"
    }
  ];

  return (
    <div className="globalPadding bg-white">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Premium Spice Collection</h2>
        <p className="text-sm md:text-lg text-gray-600">
          Discover our handcrafted spice blends, made with tradition and expertise
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {spices.map((spice, index) => (
          <div key={index} className="group relative overflow-hidden rounded-lg">
            <div className="aspect-w-16 aspect-h-9">
              <img
                src={spice.image}
                alt={spice.name}
                className="w-full h-[300px] object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6 text-white">
              <h3 className="text-xl font-bold mb-2">{spice.name}</h3>
              <p className="text-sm opacity-90">{spice.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-10">
        <Button size="lg">
          Explore All Spices
        </Button>
      </div>
    </div>
  );
}