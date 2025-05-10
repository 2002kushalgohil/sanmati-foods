"use client";
import React, { useState, useEffect } from "react";
import { Button } from "../ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Professional Chef",
      quote: "Gurudev Masala's spices have transformed my restaurant's dishes. The authenticity and freshness are unmatched! Our customers specifically praise the rich flavors in our curries.",
      image: "https://images.pexels.com/photos/3771120/pexels-photo-3771120.jpeg",
      rating: 5
    },
    {
      name: "Rajesh Patel",
      role: "Restaurant Owner",
      quote: "We've been using Gurudev Masala for our restaurant chain for over 5 years. The consistency and quality are exceptional. Their garam masala blend is particularly outstanding.",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
      rating: 5
    },
    {
      name: "Anita Desai",
      role: "Food Blogger",
      quote: "These spices bring out the true flavors of Indian cuisine. My readers love the recipes made with Gurudev Masala. The freshness and aroma are exactly what authentic Indian cooking needs.",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
      rating: 5
    }
  ];

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => (prevIndex + newDirection + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="globalPadding bg-white relative overflow-hidden">
      <div className="text-center mb-16">
        <span className="text-primary text-sm font-medium uppercase tracking-wider">Testimonials</span>
        <h2 className="text-3xl md:text-5xl font-bold mb-4 mt-2">What Our Customers Say</h2>
        <p className="text-sm md:text-lg text-gray-600 max-w-2xl mx-auto">
          Join thousands of satisfied customers who trust Gurudev Masala for their culinary adventures
        </p>
      </div>

      <div className="relative h-[500px] max-w-4xl mx-auto px-4">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);

              if (swipe < -swipeConfidenceThreshold) {
                paginate(1);
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1);
              }
            }}
            className="absolute w-full"
          >
            <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
              <div className="flex flex-col items-center text-center gap-6">
                <div className="relative">
                  <img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-24 h-24 rounded-full object-cover border-4 border-primary/10"
                  />
                  <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm">
                    {Array.from({ length: testimonials[currentIndex].rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 inline-block" fill="currentColor" />
                    ))}
                  </div>
                </div>
                
                <div className="space-y-4">
                  <p className="text-lg md:text-xl italic text-gray-700 leading-relaxed">
                    "{testimonials[currentIndex].quote}"
                  </p>
                  
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{testimonials[currentIndex].name}</h3>
                    <p className="text-primary">{testimonials[currentIndex].role}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <button
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-white transition-all"
          onClick={() => paginate(-1)}
        >
          <ChevronLeft className="w-6 h-6 text-primary" />
        </button>
        
        <button
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-white transition-all"
          onClick={() => paginate(1)}
        >
          <ChevronRight className="w-6 h-6 text-primary" />
        </button>

        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex ? "bg-primary w-6" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Testimonials;