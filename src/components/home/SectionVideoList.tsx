"use client";

import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import "@/styles/components/_sectionList.scss";
import { VideoCard } from "../common/VideoCard";
import { VideoCardSkeleton } from "../common/VideoCardSkeleton";

export interface VideoItem {
  id: number | string;
  thumbnail: string;
  link: string;
  title: string;
  views: number;
}

interface SectionVideoListProps {
  title: string;
  items: VideoItem[];
  viewMoreLink: string;
}

export function SectionVideoList({ title, items, viewMoreLink }: SectionVideoListProps) {
  const [visibleItems, setVisibleItems] = useState<VideoItem[]>([]);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // drag state
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  // Khởi tạo visible items (clone để loop vô hạn)
  useEffect(() => {
    if (items.length > 0) {
      setVisibleItems([...items, ...items, ...items]); // clone 3 lần cho infinite loop
    }
  }, [items]);

  // Khi scroll ngang gần cuối thì reset về đầu
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
    isDragging.current = true;
    startX.current = posX - containerRef.current.offsetLeft;
    scrollLeft.current = containerRef.current.scrollLeft;
  };

  const stopDrag = () => {
    isDragging.current = false;
  };

  const onDrag = (posX: number) => {
    if (!isDragging.current || !containerRef.current) return;
    const x = posX - containerRef.current.offsetLeft;
    const walk = (x - startX.current) * 1;
    containerRef.current.scrollLeft = scrollLeft.current - walk;
  };

  return (
    <section>
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

      <div className="relative">
        <button className="indicator-btn left-0 translate-x-[-80%] hidden md:block" onClick={() => scrollByOne("left")}>
          <ChevronLeft />
        </button>

        <div
          ref={containerRef}
          className="flex flex-nowrap gap-4 overflow-x-auto scrollbar-hide cursor-grab"
          onMouseDown={(e) => startDrag(e.pageX)}
          onMouseUp={stopDrag}
          onMouseLeave={stopDrag}
          onMouseMove={(e) => onDrag(e.pageX)}
          onTouchStart={(e) => startDrag(e.touches[0].pageX)}
          onTouchEnd={stopDrag}
          onTouchMove={(e) => onDrag(e.touches[0].pageX)}
        >
          {items.length === 0
            ? Array.from({ length: 7 }).map((_, i) => <VideoCardSkeleton key={i} />)
            : visibleItems.map((item, index) => (
              <VideoCard key={`${item.id}-${index}`} video={item} />
            ))}
        </div>
        <button className="indicator-btn right-0 translate-x-[80%] hidden md:block" onClick={() => scrollByOne("right")}>
          <ChevronRight />
        </button>
      </div>
    </section>
  );
}
