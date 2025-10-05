"use client";

import Image from "next/image";
import { memo, useCallback, useTransition } from "react";
import { useAppDispatch } from "@/store/hooks";
import { I_Product } from "@/types/product";
import { Heart } from "lucide-react";
import { setProductSelected } from "@/features/product/productSelectedSlice";

export const ProductCard = memo(function ProductCard({ item }: { item: I_Product }) {
  const dispatch = useAppDispatch();
  const [isPending, startTransition] = useTransition();

  const handleSelectProduct = useCallback(() => {
    // Dùng React transition để tránh block UI (giảm INP)
    startTransition(() => {
      dispatch(setProductSelected(item));
    });
  }, [dispatch, item]);

  return (
    <article
      key={`${item.id}_${item.name}`}
      className="group min-w-[160px] max-w-[200px] h-[320px] flex-shrink-0 relative px-2 select-none will-change-transform"
    >
      {/* Icon Heart */}
      <button
        className="absolute top-2 right-2 z-10 cursor-pointer hover:scale-110 active:scale-95 transition-transform"
        aria-label="Yêu thích sản phẩm"
      >
        <Heart size={16} className="text-[var(--color-text)]" />
      </button>
      {/* Badges */}
      {item.badges && item.badges.length > 0 && (
        <div className="absolute top-2 left-2 flex flex-col gap-1 z-10">
          {item.badges.map((badge, i) => (
            <span
              key={i}
              className="bg-[var(--color-badge)] text-white text-[10px] px-1 py-0.5 rounded shadow-sm"
            >
              {badge}
            </span>
          ))}
        </div>
      )}

      {/* Product image */}
      <div className="relative w-full h-48 flex items-center justify-center overflow-hidden rounded-md">
        <Image
          src={item.thumbnail || "/placeholder.png"}
          alt={item.name || "Product Image"}
          fill
          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 200px"
          className="object-contain transition-transform duration-500 ease-in-out group-hover:scale-105"
          priority={false}
          loading="lazy"
          placeholder="blur"
          blurDataURL="/placeholder.png"
        />

        {/* Nút Xem ngay */}
        <button
          onClick={handleSelectProduct}
          disabled={isPending}
          className="absolute bottom-0 left-0 right-0 bg-[var(--color-primary)] text-white text-xs font-semibold py-1 opacity-0 group-hover:opacity-100 cursor-pointer transition-all duration-300 rounded-sm"
        >
          {isPending ? "..." : "XEM NGAY"}
        </button>
      </div>

      {/* Info */}
      <div className="mt-2 text-left">
        {item?.brand && (
          <h4 className="font-bold text-sm text-[var(--color-text)] uppercase truncate">
            {item.brand}
          </h4>
        )}
        <p className="text-sm text-[var(--color-text)] line-clamp-2 h-[35px]">
          {item.name}
        </p>
        <p className="text-[var(--color-primary)] font-semibold text-sm pt-2">
          {item.priceRange}
        </p>
        <p className="text-sm text-[var(--color-text)] pt-2">
          {`${item.sizes?.length} size${item.sizes?.length !== 1 ? "s" : ""}`}
        </p>
      </div>
    </article>
  );
});
