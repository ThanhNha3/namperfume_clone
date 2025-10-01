import { I_Product } from "@/types/product";
import { Heart } from "lucide-react";

export const ProductCard = ({ item }: { item: I_Product }) => {
    return (
        <div
            key={`${item.id}_${item.name}`}
            className="group min-w-[160px] max-w-[200px] h-[300px] flex-shrink-0 relative px-2"
        >
            {/* Icon Heart */}
            <button className="absolute top-2 right-2 z-10 cursor-pointer">
                <Heart size={16} className="text-[var(--color-text)]" />
            </button>

            {/* Badge */}
            <div className="absolute top-2 left-2 flex flex-col gap-1 z-10">
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
            <div className="relative w-full h-48 flex items-center justify-center">
                <img
                    src={item.thumbnail}
                    alt={item.name}
                    className="max-h-full object-contain"
                />

                {/* Nút Xem ngay - hiện khi hover */}
                <button className="absolute bottom-0 left-0 right-0 bg-[var(--color-primary)] text-white text-xs font-semibold py-1 opacity-0 group-hover:opacity-100 cursor-pointer transition-opacity duration-300 rounded-sm">
                    XEM NGAY
                </button>
            </div>

            {/* Info */}
            <div className="mt-2 text-left">
                {item?.brand && (<h4 className="font-bold text-xs text-[var(--color-text)] uppercase truncate">
                    {item?.brand}
                </h4>)}
                <p className="text-xs text-[var(--color-text)] line-clamp-2 h-[32px]">{item.name}</p>
                <p className="text-[var(--color-primary)] font-semibold text-xs pt-2">
                    {item.priceRange}
                </p>
                <p className="text-xs text-[var(--color-text)] pt-2">
                    {`${item.sizes?.length} size${item.sizes?.length !== 1 ? "s" : ""}`}
                </p>
            </div>
        </div>
    );
};
