"use client";
import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { Users, Package, Clock, Award } from "lucide-react";

function WhyUs() {
  const stats = [
    {
      title: "Happy Customers",
      value: 15000,
      icon: Users,
      suffix: "+",
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      title: "Products Sold Monthly",
      value: 50000,
      icon: Package,
      suffix: "+",
      color: "text-green-600",
      bgColor: "bg-green-50"
    },
    {
      title: "Years of Excellence",
      value: 35,
      icon: Clock,
      suffix: "+",
      color: "text-amber-600",
      bgColor: "bg-amber-50"
    },
    {
      title: "Quality Awards",
      value: 12,
      icon: Award,
      suffix: "",
      color: "text-purple-600",
      bgColor: "bg-purple-50"
    }
  ];

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div ref={ref} className="globalPadding bg-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Our Impact in Numbers
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Discover why thousands of customers trust us for their culinary needs
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`${stat.bgColor} rounded-xl p-6 text-center transition-all hover:shadow-lg`}
            >
              <div className="flex flex-col items-center gap-4">
                <div className={`p-3 rounded-full ${stat.bgColor}`}>
                  <Icon className={`w-8 h-8 ${stat.color}`} />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold">
                  <CountUp
                    start={0}
                    end={inView ? stat.value : 0}
                    duration={2}
                    separator=","
                  />
                  {stat.suffix}
                </h3>
                <p className="text-gray-600 font-medium">{stat.title}</p>
              </div>
            </motion.div>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="mt-16 text-center"
      >
        <div className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary/10 rounded-full">
          <Award className="w-5 h-5 text-primary" />
          <span className="text-primary font-medium">ISO 9001:2015 Certified Company</span>
        </div>
      </motion.div>
    </div>
  );
}

export default WhyUs;