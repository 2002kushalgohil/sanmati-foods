import React from "react";
import { Button } from "../ui/button";

function Blog() {
  const posts = [
    {
      title: "The Art of Blending Spices",
      excerpt: "Learn the secrets of creating perfect spice blends for your dishes",
      date: "March 15, 2024",
      image: "https://images.pexels.com/photos/2802527/pexels-photo-2802527.jpeg"
    },
    {
      title: "Health Benefits of Traditional Indian Spices",
      excerpt: "Discover how Indian spices can boost your health and immunity",
      date: "March 10, 2024",
      image: "https://images.pexels.com/photos/4226896/pexels-photo-4226896.jpeg"
    },
    {
      title: "Mastering Indian Curry Base",
      excerpt: "A step-by-step guide to creating the perfect curry base",
      date: "March 5, 2024",
      image: "https://images.pexels.com/photos/6937455/pexels-photo-6937455.jpeg"
    }
  ];

  return (
    <div className="globalPadding bg-[var(--secondary-bg-color)]">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Spice Chronicles</h2>
        <p className="text-sm md:text-lg text-gray-600 max-w-2xl mx-auto">
          Explore our blog for recipes, tips, and stories about the world of spices
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {posts.map((post, index) => (
          <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <p className="text-primary text-sm mb-2">{post.date}</p>
              <h3 className="text-xl font-bold mb-2">{post.title}</h3>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <Button variant="link" className="p-0">
                Read More →
              </Button>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-10">
        <Button size="lg">
          View All Posts
        </Button>
      </div>
    </div>
  );
}

export default Blog;