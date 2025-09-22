"use client";

import React, { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import "@/styles/components/_sectionList.scss";
import { VideoCard } from "../common/VideoCard";
import { VideoCardSkeleton } from "../common/VideoCardSkeleton";

export interface VideoItem {
  id: number | string;
  thumbnail: string;
  link: string;
  title: string;
  views?: number;
}

interface SectionVideoListProps {
  title: string;
  items: VideoItem[];
  viewMoreLink: string;
}

export function SectionVideoList({
  title,
  items,
  viewMoreLink,
}: SectionVideoListProps) {
  const ITEM_WIDTH = 240; // width chuẩn của 1 VideoCard
  const [currentIndex, setCurrentIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  // drag state
  const pos = useRef({
    startX: 0,
    prevX: 0,
    translate: 0,
    velocity: 0,
    animFrame: 0,
    dragging: false,
  });

  // Bắt đầu drag
  const handleStart = (clientX: number) => {
    cancelAnimationFrame(pos.current.animFrame);
    pos.current.dragging = true;
    pos.current.startX = clientX;
    pos.current.prevX = clientX;
  };

  // Khi drag
  const handleMove = (clientX: number) => {
    if (!pos.current.dragging) return;
    const dx = clientX - pos.current.prevX;
    pos.current.prevX = clientX;
    pos.current.velocity = dx;
    pos.current.translate += dx;

    // Giới hạn: không kéo quá đầu/cuối
    const maxTranslate = 0;
    const minTranslate = -(items.length - 1) * ITEM_WIDTH;
    if (pos.current.translate > maxTranslate) pos.current.translate = maxTranslate;
    if (pos.current.translate < minTranslate) pos.current.translate = minTranslate;

    if (trackRef.current) {
      trackRef.current.style.transition = "none";
      trackRef.current.style.transform = `translateX(${pos.current.translate}px)`;
    }
  };

  // Khi thả
  const handleEnd = () => {
    if (!pos.current.dragging) return;
    pos.current.dragging = false;

    const animate = () => {
      pos.current.velocity *= 0.95; // ma sát
      pos.current.translate += pos.current.velocity;

      // Giới hạn
      const maxTranslate = 0;
      const minTranslate = -(items.length - 1) * ITEM_WIDTH;
      if (pos.current.translate > maxTranslate) pos.current.translate = maxTranslate;
      if (pos.current.translate < minTranslate) pos.current.translate = minTranslate;

      if (trackRef.current) {
        trackRef.current.style.transition = "none";
        trackRef.current.style.transform = `translateX(${pos.current.translate}px)`;
      }

      if (Math.abs(pos.current.velocity) > 0.5) {
        pos.current.animFrame = requestAnimationFrame(animate);
      } else {
        // Snap về item gần nhất
        const nearestIndex = Math.round(-pos.current.translate / ITEM_WIDTH);
        setCurrentIndex(nearestIndex);
      }
    };

    pos.current.animFrame = requestAnimationFrame(animate);
  };

  // Khi currentIndex thay đổi → snap mượt
  useEffect(() => {
    if (trackRef.current) {
      pos.current.translate = -currentIndex * ITEM_WIDTH;
      trackRef.current.style.transition = "transform 0.4s ease";
      trackRef.current.style.transform = `translateX(${pos.current.translate}px)`;
    }
  }, [currentIndex]);

  return (
    <section>
      {/* Header */}
      <div className="section-header flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">{title}</h2>
        {viewMoreLink && (
          <a
            href={viewMoreLink}
            className="text-sm text-gray-500 hover:underline flex items-center"
          >
            Xem thêm <ChevronRight className="ml-1" />
          </a>
        )}
      </div>

      {/* Slider */}
      <div className="relative overflow-hidden">
        {/* Prev */}
        <button
          className="indicator-btn left-0 -translate-x-1/2 hidden md:flex"
          onClick={() => setCurrentIndex((i) => Math.max(0, i - 1))}
          disabled={currentIndex === 0}
        >
          <ChevronLeft />
        </button>

        {/* Track */}
        <div
          ref={trackRef}
          className="flex select-none gap-4 cursor-grab"
          onMouseDown={(e) => handleStart(e.clientX)}
          onMouseMove={(e) => handleMove(e.clientX)}
          onMouseUp={handleEnd}
          onMouseLeave={handleEnd}
          onTouchStart={(e) => handleStart(e.touches[0].clientX)}
          onTouchMove={(e) => handleMove(e.touches[0].clientX)}
          onTouchEnd={handleEnd}
        >
          {items.length === 0
            ? Array.from({ length: 6 }).map((_, i) => (
                <VideoCardSkeleton key={i} />
              ))
            : items.map((item, index) => (
                <div key={item.id} style={{ minWidth: ITEM_WIDTH }}>
                  <VideoCard video={item} />
                </div>
              ))}
        </div>

        {/* Next */}
        <button
          className="indicator-btn right-0 translate-x-1/2 hidden md:flex"
          onClick={() =>
            setCurrentIndex((i) => Math.min(items.length - 1, i + 1))
          }
          disabled={currentIndex === items.length - 1}
        >
          <ChevronRight />
        </button>
      </div>
    </section>
  );
}
