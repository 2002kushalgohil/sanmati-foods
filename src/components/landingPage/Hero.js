"use client";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { motion } from "framer-motion";

function Hero() {
  return (
    <div className="min-h-[90vh] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent" />
      <div className="globalPadding h-full w-full grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-7 relative">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-start h-full w-full justify-center gap-5 md:gap-7 order-2 md:order-1"
        >
          <h1 className="hero-item text-3xl md:text-5xl font-bold !leading-10 md:!leading-[3.8rem]">
            <span className="bg-primary text-white p-1 px-2">Unlock</span> the
            Flavors of Authentic Indian Spices
          </h1>

          <p className="hero-item text-sm md:text-base max-w-xl">
            Discover the essence of authentic <b>Indian flavors</b> with our
            premium range of <b>spices.</b> Sourced directly from trusted
            farmers and crafted with care in <b>Shrirampur</b>, every pinch
            guarantees purity and freshness.
          </p>

          <div className="flex items-center gap-4">
            <Link href="/products">
              <Button className="hero-item px-8 shadow-md hover:shadow-lg transition-all">
                View products
              </Button>
            </Link>
            <Link href="/about">
              <Button variant="outline" className="hero-item px-8">
                Learn more
              </Button>
            </Link>
          </div>

          <div className="flex items-center gap-4 mt-4">
            <div className="flex -space-x-4">
              {[1, 2, 3, 4].map((i) => (
                <img
                  key={i}
                  className="w-10 h-10 rounded-full border-2 border-white"
                  src={`https://i.pravatar.cc/150?img=${i}`}
                  alt="User"
                />
              ))}
            </div>
            <div className="text-sm">
              <p className="font-semibold">Trusted by 1000+ customers</p>
              <div className="flex items-center">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    className="w-4 h-4 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="ml-2 text-gray-600">4.9/5</span>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col items-end h-full w-full justify-center gap-5 md:gap-7 order-1 md:order-2"
        >
          <img 
            src="/landingPage/hero.png" 
            className="w-full object-cover"
            alt="Collection of premium Indian spices"
          />
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;