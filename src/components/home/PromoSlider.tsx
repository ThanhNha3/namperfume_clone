"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

import { PromoSliderProps } from "@/types/PromoSlider";

export default function PromoSlider({ isShowIndicator = true, slides = [], timeTransition = 10000 }: PromoSliderProps) {

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, timeTransition);
    return () => clearInterval(timer);
  }, [slides.length, timeTransition]);

  return (
    <div className="relative w-full h-full overflow-hidden">
      <AnimatePresence initial={false}>
        <motion.div
          key={slides[index].id}
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "-100%" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute top-0 left-0 w-full h-full"
        >
          <Image
            src={slides[index].src}
            alt={`Slide ${slides[index].id}`}
            fill
            className="object-cover"
            priority
          />
        </motion.div>
      </AnimatePresence>

      {/* Indicator */}
      {isShowIndicator && <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-[3px] sm:h-[4px] rounded-full transition-all duration-300 ${i === index ? "w-8 bg-white" : "w-4 bg-white/60"
              }`}
          />
        ))}
      </div>}
    </div>
  );
}
