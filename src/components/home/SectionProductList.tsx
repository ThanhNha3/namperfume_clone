"use client";

import React, { useState, useEffect, useRef } from "react";
import "@/styles/components/_sectionList.scss";
import { SectionListProductProps, SectionProductItem } from "@/types/section";
import { ChevronLeft, ChevronRight, Heart } from "lucide-react";

export function SectionProductList({ title, items, viewMoreLink }: SectionListProductProps) {
  const [visibleItems, setVisibleItems] = useState<SectionProductItem[]>([]);
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

    // nếu scroll gần cuối thì quay lại giữa
    if (scrollLeft + clientWidth >= scrollWidth - 10) {
      containerRef.current.scrollLeft = scrollWidth / 3; // quay về giữa list
    }
    // nếu scroll về đầu thì cũng quay về giữa
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
        <button className="indicator-btn left-0 translate-x-[-80%] d-none md:d-block" onClick={() => scrollByOne("left")}>
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
          {visibleItems.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="min-w-[160px] max-w-[200px] flex-shrink-0 relative px-2"
            >
              {/* Icon Heart */}
              <button className="absolute top-2 right-2 bg-white rounded-full p-1 shadow">
                <Heart size={16} className="text-gray-600" />
              </button>

              {/* Badge */}
              <div className="absolute top-2 left-2 flex flex-col gap-1">
                {item.badges?.map((badge, i) => (
                  <span
                    key={i}
                    className="bg-[var(--color-badge)] text-white text-[10px] px-1 py-0.5 rounded"
                  >
                    {badge}
                  </span>
                ))}
              </div>

              {/* Product image */}
              <div className="w-full h-48 flex items-center justify-center">
                <img src={item.image} alt={item.name} className="max-                                                                                                                                                                                                                                                                 h-full object-contain" />
              </div>

              {/* Info */}
              <div className="mt-2 text-center">
                <h4 className="font-bold text-xs uppercase truncate">{item.subtitle}</h4>
                <p className="text-xs text-gray-700 line-clamp-2">{item.name}</p>
                <p className="text-red-600 font-semibold text-xs">{item.price}</p>
                <p className="text-xs text-gray-500">
                  {`${item.sizes?.length} size${item.sizes?.length !== 1 ? "s" : ""}`}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Nút phải */}
        <button className="indicator-btn right-0 translate-x-[80%] d-none md:d-block" onClick={() => scrollByOne("right")}>
          <ChevronRight />
        </button>
      </div>
    </section>
  );
}
