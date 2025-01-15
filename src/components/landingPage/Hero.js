import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

function Hero() {
  return (
    <div className="h-[90vh]">
      <div className="globalPadding h-full w-full grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-7">
        <div className="flex flex-col items-start h-full w-full justify-center gap-5 md:gap-7 order-2 md:order-1">
          <h1 className="hero-item text-3xl md:text-5xl font-bold !leading-10 md:!leading-[3.8rem]">
            <span className="bg-primary text-white p-1 px-2">Unlock</span> the
            Flavors of Authentic Indian Spices
          </h1>

          <p className="hero-item text-sm md:text-base">
            Discover the essence of authentic <b>Indian flavors</b> with our
            premium range of <b>spices.</b> Sourced directly from trusted
            farmers and crafted with care in <b>Shrirampur</b>, every pinch
            guarantees purity and freshness. Bring magic to your meals with
            spices that inspire!
          </p>

          <Link
            href="/"
            target="_blank"
            rel="noreferrer"
          >
            <Button className="hero-item px-8 shadow-md hover:shadow-lg transition-all">
              Contact us
            </Button>
          </Link>
        </div>
        <div className="flex flex-col items-end h-full w-full justify-center gap-5 md:gap-7 order-1 md:order-2">
          <img src="/landingPage/hero.png" className="w-full" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
