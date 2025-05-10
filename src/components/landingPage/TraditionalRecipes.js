"use client";
import React from "react";
import { Button } from "../ui/button";
import { motion } from "framer-motion";
import { Clock, ChefHat, ArrowRight } from "lucide-react";

function TraditionalRecipes() {
  const recipes = [
    {
      name: "Paneer Butter Masala",
      difficulty: "Medium",
      time: "35 mins",
      image: "https://images.pexels.com/photos/9797029/pexels-photo-9797029.jpeg",
      chef: "Chef Priya Sharma"
    },
    {
      name: "Vegetable Biryani",
      difficulty: "Advanced",
      time: "50 mins",
      image: "https://images.pexels.com/photos/7625318/pexels-photo-7625318.jpeg",
      chef: "Chef Rajesh Kumar"
    },
    {
      name: "Dal Tadka",
      difficulty: "Easy",
      time: "30 mins",
      image: "https://images.pexels.com/photos/674574/pexels-photo-674574.jpeg",
      chef: "Chef Anita Desai"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="globalPadding bg-[var(--secondary-bg-color)]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Traditional Vegetarian Recipes</h2>
        <p className="text-sm md:text-lg text-gray-600 max-w-2xl mx-auto">
          Discover authentic Indian vegetarian recipes using our premium spices. Create 
          restaurant-style dishes in your own kitchen.
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        {recipes.map((recipe, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all"
          >
            <div className="relative">
              <img
                src={recipe.image}
                alt={recipe.name}
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-primary px-3 py-1 rounded-full text-sm flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {recipe.time}
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{recipe.name}</h3>
              <div className="flex items-center gap-2 mb-4 text-gray-600">
                <ChefHat className="w-4 h-4" />
                <span className="text-sm">{recipe.chef}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className={`text-sm px-3 py-1 rounded-full ${
                  recipe.difficulty === "Easy" ? "bg-green-100 text-green-700" :
                  recipe.difficulty === "Medium" ? "bg-yellow-100 text-yellow-700" :
                  "bg-red-100 text-red-700"
                }`}>
                  {recipe.difficulty}
                </span>
                <Button variant="ghost" className="text-primary hover:text-primary/90">
                  View Recipe <ArrowRight className="ml-1 w-4 h-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="text-center mt-12"
      >
        <Button size="lg">
          View All Recipes <ArrowRight className="ml-2 w-4 h-4" />
        </Button>
      </motion.div>
    </div>
  );
}

export default TraditionalRecipes;