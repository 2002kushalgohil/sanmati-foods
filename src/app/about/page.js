"use client";
import React from "react";
import { motion } from "framer-motion";
import { Calendar, Users, Target, Heart, ArrowRight, Award, MapPin, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

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
    description: "Preserving authentic Indian flavors through generations of expertise",
    color: "bg-amber-50",
    iconColor: "text-amber-600"
  },
  {
    icon: Target,
    title: "Quality",
    description: "Uncompromising standards in every blend we create",
    color: "bg-red-50",
    iconColor: "text-red-600"
  },
  {
    icon: Users,
    title: "Community",
    description: "Supporting local farmers and enriching communities",
    color: "bg-emerald-50",
    iconColor: "text-emerald-600"
  }
];

const teamMembers = [
  {
    name: "Rajesh Patel",
    role: "Founder & CEO",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
    quote: "Our mission is to bring authentic Indian flavors to every kitchen."
  },
  {
    name: "Priya Sharma",
    role: "Master Blender",
    image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
    quote: "Every spice blend tells a story of tradition and innovation."
  },
  {
    name: "Amit Kumar",
    role: "Quality Director",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
    quote: "Quality is not just a standard, it's our heritage."
  }
];

const awards = [
  {
    year: "2023",
    title: "Best Spice Brand",
    organization: "Food & Beverage Excellence Awards"
  },
  {
    year: "2022",
    title: "Quality Excellence",
    organization: "Indian Spice Board"
  },
  {
    year: "2021",
    title: "Business Innovation",
    organization: "Maharashtra Chamber of Commerce"
  }
];

function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[70vh] overflow-hidden bg-[url('https://images.pexels.com/photos/2802527/pexels-photo-2802527.jpeg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/60" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative h-full globalPadding flex flex-col items-center justify-center text-center text-white"
        >
          <span className="text-primary font-medium mb-4">Est. 1985</span>
          <h1 className="mb-6 max-w-4xl">Crafting Authentic Indian Flavors for Generations</h1>
          <p className="max-w-2xl text-white/90 mb-8">
            A journey of passion, tradition, and excellence in bringing the finest spices
            from India's heartland to kitchens across the world.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            Our Story
          </Button>
        </motion.div>
      </div>

      {/* Values Section */}
      <div className="globalPadding bg-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto text-center mb-16"
        >
          <span className="text-primary font-medium mb-4 block">Our Core Values</span>
          <h2 className="mb-6">Guided by Tradition, Driven by Excellence</h2>
          <p className="text-gray-600">
            Our values are deeply rooted in Indian culture and traditions,
            guiding every decision we make and every product we create.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`${value.color} rounded-xl p-8 text-center transition-all hover:shadow-lg`}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white mb-6">
                  <Icon className={`w-8 h-8 ${value.iconColor}`} />
                </div>
                <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Timeline Section */}
      <div className="globalPadding bg-[var(--secondary-bg-color)]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto text-center mb-16"
        >
          <span className="text-primary font-medium mb-4 block">Our Journey</span>
          <h2 className="mb-6">Growing Through the Years</h2>
          <p className="text-gray-600">
            From humble beginnings to becoming one of India's most trusted spice brands,
            our story is flavored with dedication and innovation.
          </p>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 -translate-x-1/2" />

          {milestones.map((milestone, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={`relative flex items-center gap-8 mb-16 ${
                index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
              }`}
            >
              <div className="w-1/2">
                <div className="bg-white rounded-xl shadow-md p-6 transition-all hover:shadow-xl">
                  <div className="w-full h-40 rounded-lg overflow-hidden mb-4">
                    <img
                      src={milestone.image}
                      alt={milestone.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
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
              </div>

              <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-primary rounded-full shadow-lg z-10" />

              <div className="w-1/2" />
            </motion.div>
          ))}
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
          <span className="text-primary font-medium mb-4 block">Our Leadership</span>
          <h2 className="mb-6">Meet the Team Behind Our Success</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our team brings together decades of experience in spice crafting,
            quality control, and business excellence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="text-center group"
            >
              <div className="relative mb-6 mx-auto w-48 h-48 rounded-full overflow-hidden">
                <div className="absolute inset-0 border-4 border-primary/20 rounded-full group-hover:border-primary/40 transition-all" />
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">{member.name}</h3>
              <p className="text-primary mb-4">{member.role}</p>
              <p className="text-gray-600 italic">&ldquo;{member.quote}&rdquo;</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Awards Section */}
      <div className="globalPadding bg-[var(--secondary-bg-color)]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium mb-4 block">Recognition</span>
          <h2 className="mb-6">Our Achievements</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Recognition that reflects our commitment to quality and excellence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {awards.map((award, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-all"
            >
              <Award className="w-12 h-12 text-primary mx-auto mb-4" />
              <p className="text-primary font-medium mb-2">{award.year}</p>
              <h3 className="text-xl font-bold mb-2">{award.title}</h3>
              <p className="text-gray-600 text-sm">{award.organization}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div className="globalPadding bg-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <span className="text-primary font-medium mb-4 block">Get in Touch</span>
          <h2 className="mb-6">Connect With Us</h2>
          <p className="text-gray-600 mb-12">
            We'd love to hear from you. Reach out to us for any queries or collaborations.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold">Visit Us</h3>
              <p className="text-gray-600">123 Spice Market, Mumbai, Maharashtra, India</p>
            </div>
            <div className="flex flex-col items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold">Call Us</h3>
              <p className="text-gray-600">+91 123 456 7890</p>
            </div>
            <div className="flex flex-col items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold">Email Us</h3>
              <p className="text-gray-600">contact@gurudevmasala.com</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default AboutPage;