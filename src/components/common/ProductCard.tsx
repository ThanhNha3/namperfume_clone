import { SectionProductItem } from "@/types/product";
import { Heart } from "lucide-react";

export const ProductCard = ({ item }: { item: SectionProductItem }) => {
    return (
        <div
            key={`${item.id}_${item.name}`}
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
                <img src={item.image} alt={item.name} className="max-h-full object-contain" />
            </div>

            {/* Info */}
            <div className="mt-2 text-center">
                <h4 className="font-bold text-xs uppercase truncate">{item.subtitle}</h4>
                <p className="text-xs text-gray-700 line-clamp-2">{item.name}</p>
                <p className="text-red-600 font-semibold text-xs pt-2">{item.price}</p>
                <p className="text-xs text-gray-500 pt-2">
                    {`${item.sizes?.length} size${item.sizes?.length !== 1 ? "s" : ""}`}
                </p>
            </div>
        </div>
    );
}