"use client";
import React from "react";
import { motion } from "framer-motion";
import { Shield, Award, Leaf, Star, CheckCircle } from "lucide-react";

function QualityCommitment() {
  const commitments = [
    {
      title: "Premium Sourcing",
      description: "Carefully selected spices from India's finest farms, ensuring superior quality in every batch",
      icon: Leaf,
      color: "bg-green-50",
      iconColor: "text-green-600"
    },
    {
      title: "Traditional Processing",
      description: "Ground fresh using time-honored methods that preserve authentic flavors and aromas",
      icon: Star,
      color: "bg-amber-50",
      iconColor: "text-amber-600"
    },
    {
      title: "Quality Testing",
      description: "Rigorous quality checks at every stage, from sourcing to packaging",
      icon: Shield,
      color: "bg-blue-50",
      iconColor: "text-blue-600"
    },
    {
      title: "Certified Excellence",
      description: "Meeting international quality standards with ISO and FSSAI certifications",
      icon: Award,
      color: "bg-purple-50",
      iconColor: "text-purple-600"
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
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Our Quality Commitment</h2>
            <div className="flex items-center justify-center gap-2 mb-6">
              <CheckCircle className="text-primary w-6 h-6" />
              <span className="text-lg text-gray-600">ISO 9001:2015 Certified</span>
            </div>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-lg">
              At Gurudev Masala, we maintain the highest standards throughout our process,
              from careful sourcing to meticulous packaging, ensuring you get the finest spices.
            </p>
          </motion.div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {commitments.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`${item.color} rounded-xl p-6 transition-all hover:shadow-lg`}
              >
                <div className="flex flex-col items-center text-center gap-4">
                  <div className={`p-3 rounded-full ${item.color}`}>
                    <Icon className={`w-8 h-8 ${item.iconColor}`} />
                  </div>
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
            <Shield className="w-5 h-5 text-primary" />
            <span className="text-primary font-medium">100% Quality Guaranteed</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default QualityCommitment;