"use client";

import React, { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Product } from "../common/Product";
import { ProductSkeleton } from "../common/ProductSkeleton";
import { SectionListProductProps } from "@/types/section";

export function SectionProductList({
  title,
  items,
  viewMoreLink,
}: SectionListProductProps) {
  const itemWidth = 200;
  const doubledItems = [...items, ...items]; // gấp đôi list
  const [currentIndex, setCurrentIndex] = useState(items.length); // bắt đầu ở "nửa sau"
  const trackRef = useRef<HTMLDivElement>(null);

  // drag state
  const pos = useRef({
    startX: 0,
    prevX: 0,
    translate: -(items.length * itemWidth), // khởi tạo ở giữa
    velocity: 0,
    animFrame: 0,
    dragging: false,
  });

  // ===== Drag logic =====
  const handleStart = (clientX: number) => {
    cancelAnimationFrame(pos.current.animFrame);
    pos.current.dragging = true;
    pos.current.startX = clientX;
    pos.current.prevX = clientX;
  };

  const handleMove = (clientX: number) => {
    if (!pos.current.dragging) return;
    const dx = clientX - pos.current.prevX;
    pos.current.prevX = clientX;
    pos.current.velocity = dx;
    pos.current.translate += dx;

    if (trackRef.current) {
      trackRef.current.style.transition = "none";
      trackRef.current.style.transform = `translateX(${pos.current.translate}px)`;
    }
  };

  const handleEnd = () => {
    if (!pos.current.dragging) return;
    pos.current.dragging = false;

    const animate = () => {
      pos.current.velocity *= 0.95;
      pos.current.translate += pos.current.velocity;

      if (trackRef.current) {
        trackRef.current.style.transition = "none";
        trackRef.current.style.transform = `translateX(${pos.current.translate}px)`;
      }

      if (Math.abs(pos.current.velocity) > 0.5) {
        pos.current.animFrame = requestAnimationFrame(animate);
      } else {
        const nearestIndex = Math.round(-pos.current.translate / itemWidth);
        setCurrentIndex(nearestIndex);
      }
    };

    pos.current.animFrame = requestAnimationFrame(animate);
  };

  // ===== Snap + reset =====
  useEffect(() => {
    if (!trackRef.current || doubledItems.length === 0) return;

    const total = doubledItems.length;

    // reset sớm khi gần đầu
    if (currentIndex <= 1) {
      const newIndex = currentIndex + items.length;
      pos.current.translate = -newIndex * itemWidth;

      // reset ngay lập tức (không transition)
      trackRef.current.style.transition = "none";
      trackRef.current.style.transform = `translateX(${pos.current.translate}px)`;

      // bắt buộc sync lại index nhưng delay 1 frame → tránh khựng
      requestAnimationFrame(() => {
        setCurrentIndex(newIndex);
      });
      return;
    }

    // reset sớm khi gần cuối
    if (currentIndex >= total - 2) {
      const newIndex = currentIndex - items.length;
      pos.current.translate = -newIndex * itemWidth;

      trackRef.current.style.transition = "none";
      trackRef.current.style.transform = `translateX(${pos.current.translate}px)`;

      requestAnimationFrame(() => {
        setCurrentIndex(newIndex);
      });
      return;
    }

    // bình thường → animate
    pos.current.translate = -currentIndex * itemWidth;
    trackRef.current.style.transition = "transform 0.4s ease";
    trackRef.current.style.transform = `translateX(${pos.current.translate}px)`;
  }, [currentIndex, items.length, doubledItems.length]);

  return (
    <section>
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

      <div className="relative overflow-hidden">
        {/* Nút trái */}
        <button
          className="indicator-btn left-0 -translate-x-1/2 hidden xl:flex"
          onClick={() => setCurrentIndex((i) => i - 1)}
        >
          <ChevronLeft />
        </button>

        {/* Track */}
        <div
          ref={trackRef}
          className="flex select-none"
          onMouseDown={(e) => handleStart(e.clientX)}
          onMouseMove={(e) => handleMove(e.clientX)}
          onMouseUp={handleEnd}
          onMouseLeave={handleEnd}
          onTouchStart={(e) => handleStart(e.touches[0].clientX)}
          onTouchMove={(e) => handleMove(e.touches[0].clientX)}
          onTouchEnd={handleEnd}
        >
          {doubledItems.length === 0
            ? Array.from({ length: 6 }).map((_, i) => (
              <ProductSkeleton key={i} />
            ))
            : doubledItems.map((item, index) => (
              <div key={`${item.id}-${index}`} style={{ minWidth: itemWidth }}>
                <Product product={item} />
              </div>
            ))}
        </div>

        {/* Nút phải */}
        <button
          className="indicator-btn right-0 translate-x-1/2 hidden xl:flex"
          onClick={() => setCurrentIndex((i) => i + 1)}
        >
          <ChevronRight />
        </button>
      </div>
    </section>
  );
}
