"use client";

import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import "@/styles/components/_sectionList.scss";
import { SectionListDataProps, SectionProductItem, SectionMediaItem } from "@/types/section";

export function SectionDataList<T extends SectionProductItem | SectionMediaItem>({
  title,
  items,
  viewMoreLink,
  SkeletonComponentUI,
  ItemComponentUI,
}: SectionListDataProps<T>) {
  const [visibleItems, setVisibleItems] = useState<T[]>([]);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // drag state
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  // velocity state
  const lastX = useRef(0);
  const lastTime = useRef(0);
  const velocity = useRef(0);
  const momentumId = useRef<number | null>(null);

  // Khởi tạo visible items (clone để loop vô hạn)
  useEffect(() => {
    if (items.length > 0) {
      setVisibleItems([...items, ...items, ...items] as T[]); // clone 3 lần cho infinite loop
    }
  }, [items]);

  // Infinite scroll loop
  const handleScroll = () => {
    if (!containerRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;

    if (scrollLeft + clientWidth >= scrollWidth - 10) {
      containerRef.current.scrollLeft = scrollWidth / 3;
    }
    if (scrollLeft <= 0) {
      containerRef.current.scrollLeft = scrollWidth / 3;
    }
  };

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    el.addEventListener("scroll", handleScroll);
    return () => el.removeEventListener("scroll", handleScroll);
  }, []);

  // click scroll
  const scrollByOne = (direction: "left" | "right") => {
    if (!containerRef.current) return;
    const itemWidth = containerRef.current.querySelector("div")?.clientWidth || 200;
    containerRef.current.scrollBy({
      left: direction === "right" ? itemWidth : -itemWidth,
      behavior: "smooth",
    });
  };

  // drag logic
  const startDrag = (posX: number) => {
    if (!containerRef.current) return;
    if (momentumId.current) cancelAnimationFrame(momentumId.current);
    isDragging.current = true;
    startX.current = posX - containerRef.current.offsetLeft;
    scrollLeft.current = containerRef.current.scrollLeft;

    lastX.current = posX;
    lastTime.current = Date.now();
    velocity.current = 0;
  };

  const stopDrag = () => {
    if (!isDragging.current) return;
    isDragging.current = false;

    // apply momentum
    const momentumScroll = () => {
      if (!containerRef.current) return;
      containerRef.current.scrollLeft -= velocity.current;

      velocity.current *= 0.97; // thay vì 0.95
      if (Math.abs(velocity.current) > 0.5) {
        momentumId.current = requestAnimationFrame(momentumScroll);
      } else {
        snapToNearest();
      }
    };

    momentumId.current = requestAnimationFrame(momentumScroll);
  };

  const onDrag = (posX: number) => {
    if (!isDragging.current || !containerRef.current) return;
    const x = posX - containerRef.current.offsetLeft;
    const walk = (x - startX.current);
    containerRef.current.scrollLeft = scrollLeft.current - walk;

    // tính velocity
    const now = Date.now();
    const dx = posX - lastX.current;
    const dt = now - lastTime.current;
    velocity.current = (dx / (dt || 1)) * 10; // scale lên

    lastX.current = posX;
    lastTime.current = now;
  };

  // snap về item gần nhất
  const snapToNearest = () => {
    if (!containerRef.current) return;
    const el = containerRef.current;
    const item = el.querySelector("div") as HTMLElement;
    if (!item) return;
    const itemWidth = item.clientWidth + 16; // gap-4 = 16px
    const index = Math.round(el.scrollLeft / itemWidth);
    const target = index * itemWidth;

    el.scrollTo({
      left: target,
      behavior: "smooth",
    });
  };

  return (
    <section>
      {/* Header */}
      <div className="section-header flex justify-between items-center mb-4">
        <h2 className="section-header__text text-xl font-semibold">{title}</h2>
        {viewMoreLink && (
          <a
            href={viewMoreLink}
            className="text-sm text-gray-500 hover:underline flex items-center section-header__view-more"
          >
            Xem thêm <span className="ml-1"><ChevronRight /></span>
          </a>
        )}
      </div>

      {/* Wrapper để nút dính sát slider */}
      <div className="relative">
        {/* Nút trái */}
        <button className="indicator-btn left-0 translate-x-[-80%] hidden md:block" onClick={() => scrollByOne("left")}>
          <ChevronLeft />
        </button>

        {/* Scroll container */}
        <div
          ref={containerRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide cursor-grab"
          onMouseDown={(e) => startDrag(e.pageX)}
          onMouseUp={stopDrag}
          onMouseLeave={stopDrag}
          onMouseMove={(e) => onDrag(e.pageX)}
          onTouchStart={(e) => startDrag(e.touches[0].pageX)}
          onTouchEnd={stopDrag}
          onTouchMove={(e) => onDrag(e.touches[0].pageX)}
        >
          {items.length === 0
            ? Array.from({ length: 6 }).map((_, i) => <SkeletonComponentUI key={i} />)
            : visibleItems.map((item, index) => (
              <ItemComponentUI key={`${item.id}-${index}`} item={item} />
            ))}
        </div>

        {/* Nút phải */}
        <button className="indicator-btn right-0 translate-x-[80%] hidden md:block" onClick={() => scrollByOne("right")}>
          <ChevronRight />
        </button>
      </div>
    </section>
  );
}
