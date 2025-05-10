import AboutUs from "@/components/landingPage/AboutUs";
import CTA from "@/components/landingPage/CTA";
import FeaturedProducts from "@/components/landingPage/FeaturedProducts";
import Hero from "@/components/landingPage/Hero";
import WhyUs from "@/components/landingPage/WhyUs";
import SpiceCollection from "@/components/landingPage/SpiceCollection";
import QualityCommitment from "@/components/landingPage/QualityCommitment";
import TraditionalRecipes from "@/components/landingPage/TraditionalRecipes";
import React from "react";

function Page() {
  return (
    <>
      <Hero />
      <AboutUs />
      <FeaturedProducts />
      <SpiceCollection />
      <QualityCommitment />
      <TraditionalRecipes />
      <WhyUs />
      <CTA />
    </>
  );
}

export default Page;