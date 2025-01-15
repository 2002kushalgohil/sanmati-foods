import React from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

function CTA() {
  return (
    <div className="globalPadding">
      <div className="bg-primary p-5 md:p-8 rounded-md md:rounded-lg flex flex-col md:flex-row items-center justify-center gap-5 md:gap-8">
        <div className="flex flex-col items-start justify-center gap-0 md:gap-3 text-white w-full">
          <h2 className="agent-types-item text-2xl md:text-4xl font-bold">
            Stay Updated
          </h2>
          <p className="agent-types-item text-sm md:text-lg">
            Stay Updated with New Recipes & Special Offers!
          </p>
        </div>

        <div className="flex items-center justify-center gap-3 md:gap-5 w-full md:w-1/2">
          <Input
            className="bg-white text-black w-full"
            type="email"
            placeholder="Enter your email"
          />
          <Button variant="outline">Submit</Button>
        </div>
      </div>
    </div>
  );
}

export default CTA;
