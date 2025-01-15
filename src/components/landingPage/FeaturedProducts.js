import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import ProductCard from "../products/ProductCard";

function FeaturedProducts() {
  const allCategories = [
    {
      label: "Garam Masale",
      description:
        "Pure spices play an integral part in Indian cuisine irrespective of the zone, state, community or the cooking method and hence occupies a very special place of honor.",
      imageSrc:
        "https://images.pexels.com/photos/2632292/pexels-photo-2632292.jpeg?cs=srgb&dl=pexels-aditya-moses-1360843-2632292.jpg&fm=jpg",
    },
    {
      label: "Upwas products",
      description:
        "Pure spices play an integral part in Indian cuisine irrespective of the zone, state, community or the cooking method ",
      imageSrc:
        "https://images.pexels.com/photos/2632292/pexels-photo-2632292.jpeg?cs=srgb&dl=pexels-aditya-moses-1360843-2632292.jpg&fm=jpg",
    },
    {
      label: "Diwali snacks",
      description:
        "Pure spices play an integral part in Indian cuisine irrespective of the zone, state, community or the cooking method and hence occupies a very special place of honor. We, at Sanmati Spices, believe in offering spices that are rich & authentic.",
      imageSrc:
        "https://images.pexels.com/photos/2632292/pexels-photo-2632292.jpeg?cs=srgb&dl=pexels-aditya-moses-1360843-2632292.jpg&fm=jpg",
    },
  ];

  return (
    <div className="globalPadding flex items-center justify-center flex-col gap-8 md:gap-10 bg-[var(--secondary-bg-color)]">
      <div className="z-20 relative text-center w-full flex flex-col items-center justify-center gap-3 md:gap-5">
        <h2 className="agent-types-item text-3xl md:text-5xl font-bold">
          Our Top Categories
        </h2>
        <p className="agent-types-item text-sm md:text-lg">
          Top use cases that give your business the competitive advantage
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8 w-full">
        {allCategories.map((data, index) => {
          return <ProductCard key={index} data={data} />;
        })}
      </div>

      <Button className="px-8">View all products</Button>
    </div>
  );
}

export default FeaturedProducts;
