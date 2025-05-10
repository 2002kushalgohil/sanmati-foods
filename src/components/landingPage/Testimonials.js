import React from "react";
import { Button } from "../ui/button";

function Testimonials() {
  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Home Chef",
      quote: "Gurudev Masala's spices have transformed my cooking. The authenticity and freshness are unmatched!",
      image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg"
    },
    {
      name: "Rajesh Patel",
      role: "Restaurant Owner",
      quote: "We've been using Gurudev Masala for our restaurant for years. The consistency and quality are exceptional.",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
    },
    {
      name: "Anita Desai",
      role: "Food Blogger",
      quote: "These spices bring out the true flavors of Indian cuisine. My readers love the recipes made with Gurudev Masala.",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg"
    }
  ];

  return (
    <div className="globalPadding bg-white">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">What Our Customers Say</h2>
        <p className="text-sm md:text-lg text-gray-600 max-w-2xl mx-auto">
          Join thousands of satisfied customers who trust Gurudev Masala for their culinary adventures
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all">
            <div className="flex items-center gap-4 mb-4">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <h3 className="font-bold">{testimonial.name}</h3>
                <p className="text-gray-600 text-sm">{testimonial.role}</p>
              </div>
            </div>
            <p className="text-gray-700 italic">"{testimonial.quote}"</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;