import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import ImageAnimation from "../common/ImageAnimation/workflow/ImageAnimation";

function AboutUs() {
  return (
    <div className=" h-full min-h-[90vh]">
      <div className="globalPadding h-full w-full grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-7">
        <div className="flex flex-col items-start h-full w-full justify-center gap-5 md:gap-7">
          <ImageAnimation
            imageLinks={[
              "https://images.pexels.com/photos/2632292/pexels-photo-2632292.jpeg?cs=srgb&dl=pexels-aditya-moses-1360843-2632292.jpg&fm=jpg",
              "https://t3.ftcdn.net/jpg/00/59/95/36/360_F_59953612_Hcc1UyOKPvLRB22tU3kaPR7SE0haNc8V.jpg",
              "https://www.shutterstock.com/image-photo/landscape-traditional-spices-natural-background-600nw-2477064735.jpg",
            ]}
          />
        </div>
        <div className="flex flex-col items-start h-full w-full justify-center gap-5 md:gap-7">
          <h1 className="hero-item text-3xl md:text-5xl font-bold !leading-10 md:!leading-[3.8rem]">
            About us
          </h1>

          <p className="hero-item text-sm md:text-base">
            Discover the essence of authentic <b>Indian flavors</b> with our
            premium range of <b>spices.</b> Sourced directly from trusted
            farmers and crafted with care in <b>Shrirampur</b>, every pinch
            guarantees purity and freshness. Bring magic to your meals with
            spices that inspire!
          </p>

          <p className="hero-item text-sm md:text-base">
            Discover the essence of authentic <b>Indian flavors</b> with our
            premium range of <b>spices.</b> Sourced directly from trusted
            farmers and crafted with care in
          </p>

          <Link
            href="/"
            target="_blank"
            rel="noreferrer"
          >
            <Button className="hero-item px-8 shadow-md hover:shadow-lg transition-all">
              Read More
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
