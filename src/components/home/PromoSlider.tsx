"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { PromoSliderProps } from "@/types/PromoSlider";

export function PromoSlider({ 
  isShowIndicator = true, 
  slides = [], 
  timeTransition = 10000 
}: PromoSliderProps) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 = prev, 1 = next

  // Auto next
  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setIndex((prev) => (prev + 1) % slides.length);
    }, timeTransition);
    return () => clearInterval(timer);
  }, [slides.length, timeTransition]);

  const handleDragEnd = (_: any, info: { offset: { x: number } }) => {
    if (info.offset.x < -50) {
      // vuốt trái → next
      setDirection(1);
      setIndex((prev) => (prev + 1) % slides.length);
    } else if (info.offset.x > 50) {
      // vuốt phải → prev
      setDirection(-1);
      setIndex((prev) => (prev - 1 + slides.length) % slides.length);
    }
  };

  const variants = {
    enter: (dir: number) => ({
      x: dir === 1 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({
      x: dir === 1 ? "-100%" : "100%",
      opacity: 0,
    }),
  };

  return (
    <div className="relative w-full h-full overflow-hidden">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={slides[index].id}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.6, ease: "easeInOut" }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={handleDragEnd}
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
      {isShowIndicator && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDirection(i > index ? 1 : -1);
                setIndex(i);
              }}
              className={`h-[3px] sm:h-[4px] rounded-full transition-all duration-300 ${
                i === index ? "w-8 bg-white" : "w-4 bg-white/60"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
