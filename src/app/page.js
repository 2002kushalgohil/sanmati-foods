import AboutUs from "@/components/landingPage/AboutUs";
import CTA from "@/components/landingPage/CTA";
import Hero from "@/components/landingPage/Hero";
import QualityCommitment from "@/components/landingPage/QualityCommitment";
import SpiceCollection from "@/components/landingPage/SpiceCollection";
import Testimonials from "@/components/landingPage/Testimonials";
import TraditionalRecipes from "@/components/landingPage/TraditionalRecipes";
import WhyUs from "@/components/landingPage/WhyUs";
import React from "react";

function Page() {
  return (
    <>
      <Hero />
      <AboutUs />
      <SpiceCollection />
      <QualityCommitment />
      <TraditionalRecipes />
      <Testimonials />
      <WhyUs />
      <CTA />
    </>
  );
}

export default Page;