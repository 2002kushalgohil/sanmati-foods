import React from "react";
import { Button } from "../ui/button";

function TraditionalRecipes() {
  const recipes = [
    {
      name: "Paneer Butter Masala",
      difficulty: "Medium",
      time: "35 mins",
      image: "https://images.pexels.com/photos/9797029/pexels-photo-9797029.jpeg"
    },
    {
      name: "Vegetable Biryani",
      difficulty: "Advanced",
      time: "50 mins",
      image: "https://images.pexels.com/photos/7625318/pexels-photo-7625318.jpeg"
    },
    {
      name: "Dal Tadka",
      difficulty: "Easy",
      time: "30 mins",
      image: "https://images.pexels.com/photos/674574/pexels-photo-674574.jpeg"
    }
  ];

  return (
    <div className="globalPadding bg-white">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Traditional Vegetarian Recipes</h2>
        <p className="text-sm md:text-lg text-gray-600 max-w-2xl mx-auto">
          Discover authentic Indian vegetarian recipes using Gurudev Masala spices. Create 
          restaurant-style dishes in your own kitchen with our expert blends.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {recipes.map((recipe, index) => (
          <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all">
            <div className="relative">
              <img
                src={recipe.image}
                alt={recipe.name}
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm">
                {recipe.time}
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{recipe.name}</h3>
              <p className="text-gray-600 mb-4">Difficulty: {recipe.difficulty}</p>
              <Button variant="outline" className="w-full">
                View Recipe
              </Button>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-10">
        <Button size="lg">
          View All Recipes
        </Button>
      </div>
    </div>
  );
}

export default TraditionalRecipes