"use client";
import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

function WhyUs() {
  const stats = [
    {
      title: "Happy Customers",
      value: 1005,
    },
    {
      title: "Hours spent on craft",
      value: 5000,
    },
    {
      title: "Packs of sanmati products sold each year",
      value: 170,
    },
    {
      title: "Some random text",
      value: 15,
    },
    {
      title: "Some random text long",
      value: 50,
    },
    {
      title: "Some random text long sold each year",
      value: 17,
    },
  ];

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <div
      ref={ref}
      className="globalPadding flex items-center justify-center flex-col gap-12 md:gap-20"
    >
      <div className="z-20 relative text-center w-full flex flex-col items-center justify-center gap-3 md:gap-5">
        <h2 className="agent-types-item text-3xl md:text-5xl font-bold">
          Impact we brought
        </h2>
        <p className="agent-types-item text-sm md:text-lg">
          Top use cases that give your business the competitive advantage
        </p>
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-20">
        {stats.map((data, index) => (
          <div
            key={index}
            className="text-center flex flex-col items-center justify-center gap-2"
          >
            <h2 className="text-4xl md:text-6xl !z-20">
              <CountUp
                start={inView ? 0 : undefined}
                end={data.value}
                duration={2}
                redraw={true}
              />
              +
            </h2>
            <p className="!z-20">{data.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WhyUs;
