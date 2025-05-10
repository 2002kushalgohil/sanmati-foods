"use client";
import React, { useState, useEffect } from "react";
import { Button } from "../ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

function Testimonials() {
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
    },
    {
      name: "Vikram Singh",
      role: "Home Chef",
      quote: "The quality of these spices is exceptional. Every dish I make with Gurudev Masala gets rave reviews from my family. The packaging keeps the spices fresh for months.",
      image: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg",
      rating: 5
    },
    {
      name: "Meera Shah",
      role: "Culinary Instructor",
      quote: "I recommend Gurudev Masala to all my students. The authentic flavors and consistent quality make it perfect for learning Indian cooking. Their customer service is excellent too.",
      image: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg",
      rating: 5
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const itemsPerPage = isMobile ? 1 : 3;
  const totalPages = Math.ceil(testimonials.length / itemsPerPage);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [totalPages]);

  const getCurrentSlides = () => {
    const start = currentIndex * itemsPerPage;
    return testimonials.slice(start, start + itemsPerPage);
  };

  return (
    <div className="globalPadding bg-white">
      <div className="text-center mb-16">
        <span className="text-primary text-sm font-medium uppercase tracking-wider">Testimonials</span>
        <h2 className="text-3xl md:text-5xl font-bold mb-4 mt-2">What Our Customers Say</h2>
        <p className="text-sm md:text-lg text-gray-600 max-w-2xl mx-auto">
          Join thousands of satisfied customers who trust Gurudev Masala for their culinary adventures
        </p>
      </div>

      <div className="relative max-w-7xl mx-auto px-4">
        <div className="overflow-hidden">
          <motion.div
            className="flex gap-6"
            animate={{ x: `${-currentIndex * 100}%` }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <div className="flex gap-6 min-w-full">
              {getCurrentSlides().map((testimonial, index) => (
                <div
                  key={index}
                  className="flex-1 bg-white rounded-xl shadow-lg p-8 transform transition-all duration-300 hover:scale-105"
                >
                  <div className="flex flex-col items-center text-center gap-6">
                    <div className="relative">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-24 h-24 rounded-full object-cover border-4 border-primary/10"
                      />
                      <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm">
                        {Array.from({ length: testimonial.rating }).map((_, i) => (
                          <Star key={i} className="w-4 h-4 inline-block" fill="currentColor" />
                        ))}
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <p className="text-lg italic text-gray-700 leading-relaxed">
                        "{testimonial.quote}"
                      </p>
                      
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{testimonial.name}</h3>
                        <p className="text-primary">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-white transition-all z-10"
        >
          <ChevronLeft className="w-6 h-6 text-primary" />
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-white transition-all z-10"
        >
          <ChevronRight className="w-6 h-6 text-primary" />
        </button>

        <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 flex gap-2">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
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