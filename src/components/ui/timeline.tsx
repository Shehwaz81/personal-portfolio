"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  // Track container height dynamically
  useEffect(() => {
    if (!containerRef.current) return;
    const observer = new ResizeObserver(([entry]) => {
      setHeight(entry.contentRect.height);
    });
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  // Scroll progress for the whole container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.05], [0, 1]);

  return (
    <div
      className="w-full dark:bg-neutral-950 font-sans md:px-5"
      ref={containerRef}
    >
      <div className="flex justify-center max-w-7xl mx-auto px-4 md:px-8 lg:px-10">
        <div className="max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Experiences
          </h2>
          <p className="text-slate-400 text-sm md:text-base leading-relaxed max-w-2xl mb-10">
            Two years of continuous learning, building, and solving problems.
          </p>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-40 md:gap-10"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-slate-900 border-2 border-cyan-500/30 flex items-center justify-center">
                <div className="h-3 w-3 rounded-full bg-cyan-400" />
              </div>
              <h3 className="hidden md:block text-xl md:pl-20 md:text-3xl font-bold text-white">
                {item.title}
              </h3>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-white">
                {item.title}
              </h3>
              {item.content}
            </div>
          </div>
        ))}

        {/* Timeline line */}
        <div
          style={{ height }}
          className="absolute left-8 top-0 overflow-hidden w-[2px] bg-gradient-to-b from-transparent via-slate-700 to-transparent"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-b from-cyan-400 via-blue-500 to-cyan-400 rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
