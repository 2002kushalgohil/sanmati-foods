"use client";
import React from "react";
import { motion } from "framer-motion";
import { Calendar, Users, Target, Heart } from "lucide-react";

const milestones = [
  {
    year: "१९८५",
    yearEn: "1985",
    title: "Our Journey Begins",
    description: "Started as a small family business in Shrirampur, Maharashtra"
  },
  {
    year: "१९९५",
    yearEn: "1995",
    title: "First Retail Store",
    description: "Opened our first dedicated spice store in Mumbai"
  },
  {
    year: "२००५",
    yearEn: "2005",
    title: "ISO Certification",
    description: "Achieved ISO 9001:2015 certification for quality management"
  },
  {
    year: "२०१५",
    yearEn: "2015",
    title: "National Expansion",
    description: "Expanded operations across major Indian cities"
  },
  {
    year: "२०२३",
    yearEn: "2023",
    title: "Digital Innovation",
    description: "Launched our e-commerce platform for global reach"
  }
];

const values = [
  {
    icon: Heart,
    title: "Tradition",
    description: "Preserving authentic Indian flavors"
  },
  {
    icon: Target,
    title: "Quality",
    description: "Uncompromising standards in every blend"
  },
  {
    icon: Users,
    title: "Community",
    description: "Supporting local farmers and communities"
  }
];

const teamMembers = [
  {
    name: "Rajesh Patel",
    role: "Founder & CEO",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
  },
  {
    name: "Priya Sharma",
    role: "Master Blender",
    image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg"
  },
  {
    name: "Amit Kumar",
    role: "Quality Director",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
  }
];

function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden spice-pattern">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative h-full globalPadding flex flex-col items-center justify-center text-center text-white"
        >
          <h1 className="mb-6">Crafting Authentic Indian Flavors</h1>
          <p className="max-w-2xl text-white/90">
            Since 1985, we've been dedicated to preserving the rich heritage of Indian spices,
            blending tradition with innovation to create exceptional flavors.
          </p>
        </motion.div>
      </div>

      {/* Our Story Section */}
      <div className="globalPadding bg-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="mb-6">Our Story</h2>
          <p className="text-gray-600">
            From humble beginnings in a small town to becoming one of India's most trusted spice brands,
            our journey has been guided by a singular passion: bringing authentic Indian flavors to kitchens worldwide.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {milestones.map((milestone, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-8 mb-12"
            >
              <div className="hidden md:flex items-center justify-center w-24 h-24 rounded-full bg-primary/10">
                <span className="text-2xl font-bold text-primary font-serif">{milestone.year}</span>
              </div>
              <div className="flex-1 p-6 rounded-lg bg-secondary">
                <div className="md:hidden mb-2 text-xl font-bold text-primary">{milestone.yearEn}</div>
                <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                <p className="text-gray-600">{milestone.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Values Section */}
      <div className="globalPadding bg-[var(--secondary-bg-color)]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="mb-6">Our Values</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our core values guide every decision we make and every blend we create.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="text-center p-8 rounded-lg bg-white"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Team Section */}
      <div className="globalPadding bg-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="mb-6">Our Leadership</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Meet the team behind our commitment to quality and tradition.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="text-center"
            >
              <div className="relative mb-6 mx-auto w-48 h-48 rounded-full overflow-hidden border-4 border-primary/10">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AboutPage;