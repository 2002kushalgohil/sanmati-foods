export const companyLinks = [
  {
    label: "About us",
    href: "/aboutus",
    isDropdown: false,
    changeFrequency: "yearly",
    priority: 0.6,
  },
  {
    label: "Gallery",
    href: "/gallery",
    isDropdown: false,
    changeFrequency: "monthly",
    priority: 0.7,
  },
  {
    label: "FAQs",
    href: "/faqs",
    isDropdown: false,
    changeFrequency: "yearly",
    priority: 0.5,
  },
];

export const resourcesLinks = [
  {
    label: "Products",
    isDropdown: true,
    children: [
      {
        label: "Masala Blends",
        description: "Authentic masala blends",
        href: "/products/masala-blends",
        changeFrequency: "monthly",
        priority: 0.9,
      },
      {
        label: "Whole Spices",
        description: "Premium quality whole spices",
        href: "/products/whole-spices",
        changeFrequency: "monthly",
        priority: 0.9,
      },
    ],
  },
  {
    label: "Recipes",
    isDropdown: true,
    children: [
      {
        label: "Vegetarian",
        description: "Healthy and flavorful vegetarian dishes",
        href: "/recipes/vegetarian",
        changeFrequency: "weekly",
        priority: 0.8,
      },
      {
        label: "Quick Meals",
        description: "Recipes for meals in minutes",
        href: "/recipes/quick-meals",
        changeFrequency: "weekly",
        priority: 0.8,
      },
    ],
  },
];
