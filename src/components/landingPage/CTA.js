"use client";
import React from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { motion } from "framer-motion";
import { Send, Mail } from "lucide-react";

function CTA() {
  return (
    <div className="globalPadding">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-primary rounded-2xl overflow-hidden relative"
      >
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/6937455/pexels-photo-6937455.jpeg')] opacity-10 bg-cover bg-center" />
        
        <div className="relative p-8 md:p-12">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex-1 text-white">
                <motion.h2
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="text-2xl md:text-4xl font-bold mb-4"
                >
                  Stay Updated with New Recipes
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="text-white/90"
                >
                  Subscribe to our newsletter for exclusive recipes, cooking tips, and special offers!
                </motion.p>
              </div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="flex-1 w-full md:w-auto"
              >
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="flex flex-col gap-4">
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <Input
                        className="pl-10"
                        type="email"
                        placeholder="Enter your email"
                      />
                    </div>
                    <Button className="w-full">
                      Subscribe Now <Send className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                  <p className="text-xs text-gray-500 mt-4 text-center">
                    By subscribing, you agree to our Privacy Policy
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default CTA;