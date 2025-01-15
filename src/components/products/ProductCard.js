import React from "react";
import { Button } from "../ui/button";

function ProductCard({ data }) {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all flex flex-col overflow-hidden">
      <div className="overflow-hidden w-full">
        <img
          src={data.imageSrc}
          alt="product"
          className="h-48 md:h-52 w-full object-cover"
        />
      </div>
      <div className="space-y-2 w-full flex-grow p-3 md:p-5">
        <h3 className="text-xl md:text-2xl font-medium text-primary">
          {data.label}
        </h3>
        <p className="text-sm md:text-base">{data.description}</p>
      </div>
      <div className="mt-auto p-3 md:p-5">
        <Button variant="link" className="pl-0">
          Explore more
        </Button>
      </div>
    </div>
  );
}

export default ProductCard;
