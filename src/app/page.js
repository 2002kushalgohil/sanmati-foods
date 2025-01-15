import AboutUs from "@/components/landingPage/AboutUs";
import CTA from "@/components/landingPage/CTA";
import FeaturedProducts from "@/components/landingPage/FeaturedProducts";
import Hero from "@/components/landingPage/Hero";
import WhyUs from "@/components/landingPage/WhyUs";
import React from "react";

function Page() {
  return (
    <>
      <Hero />
      <AboutUs />
      <FeaturedProducts />
      <WhyUs />
      <CTA />
    </>
  );
}

export default Page;
