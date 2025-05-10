"use client";
import React from "react";
import { Button } from "../ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

function SpiceCollection() {
  const spices = [
    {
      name: "Garam Masala",
      description: "A perfect blend of aromatic spices for authentic Indian curries",
      image: "https://images.pexels.com/photos/2802527/pexels-photo-2802527.jpeg",
      price: "₹199"
    },
    {
      name: "Chaat Masala",
      description: "Tangy and spicy blend perfect for street food and snacks",
      image: "https://images.pexels.com/photos/4226896/pexels-photo-4226896.jpeg",
      price: "₹149"
    },
    {
      name: "Biryani Masala",
      description: "Special blend of spices for perfect biryani every time",
      image: "https://images.pexels.com/photos/6937455/pexels-photo-6937455.jpeg",
      price: "₹249"
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
    <div className="globalPadding bg-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Premium Spice Collection</h2>
        <p className="text-sm md:text-lg text-gray-600 max-w-2xl mx-auto">
          Discover our handcrafted spice blends, made with tradition and expertise
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        {spices.map((spice, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all"
          >
            <div className="aspect-w-16 aspect-h-9">
              <img
                src={spice.image}
                alt={spice.name}
                className="w-full h-[300px] object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6 text-white">
              <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform">
                <h3 className="text-xl font-bold mb-2">{spice.name}</h3>
                <p className="text-sm opacity-90 mb-3">{spice.description}</p>
                <p className="text-2xl font-bold mb-4">{spice.price}</p>
                <Button className="bg-white text-primary hover:bg-white/90">
                  View Details <ArrowRight className="ml-2 w-4 h-4" />
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
        <Button size="lg" className="px-8">
          Explore All Spices <ArrowRight className="ml-2 w-4 h-4" />
        </Button>
      </motion.div>
    </div>
  );
}

export default SpiceCollection;