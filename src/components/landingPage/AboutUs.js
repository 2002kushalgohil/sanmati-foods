"use client";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import ImageAnimation from "../common/ImageAnimation/workflow/ImageAnimation";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

function AboutUs() {
  return (
    <div className="min-h-[90vh] bg-[var(--secondary-bg-color)]">
      <div className="globalPadding h-full w-full grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-start h-full w-full justify-center"
        >
          <ImageAnimation
            imageLinks={[
              "https://images.pexels.com/photos/2802527/pexels-photo-2802527.jpeg",
              "https://images.pexels.com/photos/4226896/pexels-photo-4226896.jpeg",
              "https://images.pexels.com/photos/6937455/pexels-photo-6937455.jpeg",
            ]}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-start h-full w-full justify-center gap-6 md:gap-8"
        >
          <span className="text-primary font-medium">Our Heritage</span>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            Crafting Premium Spices Since 1985
          </h2>

          <div className="space-y-4 text-gray-600">
            <p>
              For over three decades, we've been dedicated to preserving the authentic
              flavors of Indian cuisine through our carefully crafted spice blends.
              Our journey began in the heart of Shrirampur, where traditional
              spice-making techniques meet modern quality standards.
            </p>

            <p>
              Every blend tells a story of heritage, expertise, and passion for
              authentic Indian flavors. Our spices are more than ingredients;
              they're a bridge connecting generations through taste.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 my-8">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-primary">35+</h3>
              <p className="text-sm text-gray-600">Years of Excellence</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-primary">50+</h3>
              <p className="text-sm text-gray-600">Signature Blends</p>
            </div>
          </div>

          <Link href="/about">
            <Button className="group">
              Read Our Story
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

export default AboutUs;