"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

type FilterSectionProps = {
    title: string;
    options?: string[];
    showMore?: boolean;
};

const FilterSection = ({ title, options = [], showMore = false }: FilterSectionProps) => {
    const [open, setOpen] = useState(true);
    const [expanded, setExpanded] = useState(false);

    const visibleOptions = expanded ? options : options.slice(0, 5);

    return (
        <div className="border-b border-gray-200 py-3">
            {/* Header */}
            <button
                className="flex items-center justify-between w-full text-left font-medium text-gray-800"
                onClick={() => setOpen(!open)}
            >
                {title}
                {open ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
            </button>

            {/* Options */}
            {open && (
                <div className="mt-2 space-y-2">
                    {visibleOptions.map((option, idx) => (
                        <label key={idx} className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
                            <input type="radio" name={title} className="w-4 h-4 border-gray-300" />
                            {option}
                        </label>
                    ))}

                    {showMore && options.length > 5 && (
                        <button
                            onClick={() => setExpanded(!expanded)}
                            className="text-sm text-blue-600 hover:underline"
                        >
                            {expanded ? "Thu gọn" : "Xem thêm"}
                        </button>
                    )}
                </div>
            )}
        </div>
    );
};

export function FilterSidebar() {
    return (
        <aside className="w-64 bg-white border border-gray-200 rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-4">Bộ lọc</h2>

            <FilterSection
                title="Thương hiệu"
                options={[
                    "Paris Hilton",
                    "Serge Lutens",
                    "Dolce & Gabbana",
                    "Anna Sui",
                    "Ariana Grande",
                    "Montale",
                    "Gucci",
                    "Chanel",
                    "Dior",
                ]}
                showMore
            />

            <FilterSection title="Mức giá" options={["Dưới 1 triệu", "1 - 2 triệu", "2 - 3 triệu", "Trên 3 triệu"]} />
            <FilterSection title="Size" options={["10ml", "30ml", "50ml", "100ml"]} />
            <FilterSection title="Đánh giá" options={["5 sao", "4 sao trở lên", "3 sao trở lên"]} />
        </aside>
    );
}
