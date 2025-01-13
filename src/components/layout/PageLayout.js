"use client";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import React from "react";

function PageLayout({ children }) {
  useEffect(() => {
    const lenis = new Lenis();

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);
  }, []);
  return (
    <div className="flex items-center justify-center">
      <div className="w-full max-w-[2000px]">{children}</div>
    </div>
  );
}

export default PageLayout;
