"use client";
import React from "react";
import { motion } from "framer-motion";
import { Calendar, Users, Target, Heart, ArrowRight } from "lucide-react";

const milestones = [
  {
    year: "१९८५",
    yearEn: "1985",
    title: "Our Journey Begins",
    description: "Started as a small family business in Shrirampur, Maharashtra",
    image: "https://images.pexels.com/photos/2802527/pexels-photo-2802527.jpeg"
  },
  {
    year: "१९९५",
    yearEn: "1995",
    title: "First Retail Store",
    description: "Opened our first dedicated spice store in Mumbai",
    image: "https://images.pexels.com/photos/4226896/pexels-photo-4226896.jpeg"
  },
  {
    year: "२००५",
    yearEn: "2005",
    title: "ISO Certification",
    description: "Achieved ISO 9001:2015 certification for quality management",
    image: "https://images.pexels.com/photos/6937455/pexels-photo-6937455.jpeg"
  },
  {
    year: "२०१५",
    yearEn: "2015",
    title: "National Expansion",
    description: "Expanded operations across major Indian cities",
    image: "https://images.pexels.com/photos/2632292/pexels-photo-2632292.jpeg"
  },
  {
    year: "२०२३",
    yearEn: "2023",
    title: "Digital Innovation",
    description: "Launched our e-commerce platform for global reach",
    image: "https://images.pexels.com/photos/4207909/pexels-photo-4207909.jpeg"
  }
];

const values = [
  {
    icon: Heart,
    title: "Tradition",
    description: "Preserving authentic Indian flavors through generations of expertise"
  },
  {
    icon: Target,
    title: "Quality",
    description: "Uncompromising standards in every blend we create"
  },
  {
    icon: Users,
    title: "Community",
    description: "Supporting local farmers and enriching communities"
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
          <h1 className="mb-6">Crafting Authentic Indian Flavors Since 1985</h1>
          <p className="max-w-2xl text-white/90">
            A journey of passion, tradition, and excellence in bringing the finest spices
            from India's heartland to kitchens across the world.
          </p>
        </motion.div>
      </div>

      {/* Timeline Section */}
      <div className="globalPadding bg-white overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto text-center mb-16"
        >
          <h2 className="mb-6">Our Journey Through Time</h2>
          <p className="text-gray-600">
            From humble beginnings to becoming one of India's most trusted spice brands,
            our story is flavored with dedication, innovation, and a deep respect for tradition.
          </p>
        </motion.div>

        <div className="relative max-w-6xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-primary/20" />

          <div className="flex flex-nowrap gap-8 overflow-x-auto pb-8 px-4 snap-x snap-mandatory">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative flex-none w-80 snap-center"
              >
                {/* Timeline Node */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-4 h-4 bg-primary rounded-full shadow-lg z-10" />
                
                {/* Arrow */}
                {index < milestones.length - 1 && (
                  <div className="absolute top-1/2 -translate-y-1/2 left-[calc(100%-2rem)]">
                    <ArrowRight className="w-8 h-8 text-primary/40" />
                  </div>
                )}

                <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                  <div className="w-full h-40 rounded-lg overflow-hidden mb-4">
                    <img
                      src={milestone.image}
                      alt={milestone.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-2xl font-bold text-primary font-serif">
                      {milestone.year}
                    </span>
                    <span className="text-sm text-gray-500">({milestone.yearEn})</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                  <p className="text-gray-600 text-sm">{milestone.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
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
          <h2 className="mb-6">Our Core Values</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            These principles guide our every decision and every blend we create.
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
                className="text-center p-8 rounded-lg bg-white hover:shadow-lg transition-all"
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
          <h2 className="mb-6">Meet Our Team</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            The passionate individuals behind our commitment to quality and tradition.
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
              className="text-center group"
            >
              <div className="relative mb-6 mx-auto w-48 h-48 rounded-full overflow-hidden border-4 border-primary/10 transition-all group-hover:border-primary/30">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
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