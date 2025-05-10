"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

function Testimonials() {
  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Professional Chef",
      quote: "Gurudev Masala's spices have transformed my restaurant's dishes. The authenticity and freshness are unmatched!",
      image: "https://images.pexels.com/photos/3771120/pexels-photo-3771120.jpeg"
    },
    {
      name: "Rajesh Patel",
      role: "Restaurant Owner",
      quote: "We've been using Gurudev Masala for our restaurant chain for over 5 years. The consistency and quality are exceptional.",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
    },
    {
      name: "Anita Desai",
      role: "Food Blogger",
      quote: "These spices bring out the true flavors of Indian cuisine. My readers love the recipes made with Gurudev Masala.",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="globalPadding bg-white overflow-hidden">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Join thousands of satisfied customers who trust our spices
        </p>
      </div>

      <div className="max-w-3xl mx-auto relative px-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center text-center"
          >
            <img
              src={testimonials[currentIndex].image}
              alt={testimonials[currentIndex].name}
              className="w-20 h-20 rounded-full object-cover mb-6"
            />
            <p className="text-lg md:text-xl text-gray-700 italic mb-6">
              "{testimonials[currentIndex].quote}"
            </p>
            <h3 className="font-bold text-lg">{testimonials[currentIndex].name}</h3>
            <p className="text-primary">{testimonials[currentIndex].role}</p>
          </motion.div>
        </AnimatePresence>

        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 p-2 text-gray-600 hover:text-primary transition-colors"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 p-2 text-gray-600 hover:text-primary transition-colors"
          aria-label="Next testimonial"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex ? "bg-primary w-6" : "bg-gray-300"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Testimonials;