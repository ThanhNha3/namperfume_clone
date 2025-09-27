"use client";
import { useState } from "react";
import { ArrowUpDown, Check } from "lucide-react";

type SortOption = {
    value: string;
    label: string;
};

const sortOptions: SortOption[] = [
    { value: "price-asc", label: "Giá tăng dần" },
    { value: "price-desc", label: "Giá giảm dần" },
    { value: "name-asc", label: "Tên A-Z" },
    { value: "name-desc", label: "Tên Z-A" },
];

export default function SortDropdown({ onChange }: { onChange: (value: string) => void }) {
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState(sortOptions[0]);

    const handleSelect = (option: SortOption) => {
        setSelected(option);
        setOpen(false);
        if (onChange) onChange(option.value);
    };

    return (
        <div className="relative inline-block text-left">
            {/* Nút toggle */}
            <button
                onClick={() => setOpen(!open)}
                className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none"
            >
                <ArrowUpDown className="h-4 w-4" />
                {selected.label}
            </button>

            {/* Menu dropdown */}
            {open && (
                <div className="absolute right-0 z-100 mt-2 w-44 origin-top-right rounded-xl bg-white shadow-lg ring-1 ring-black/5 overflow-hidden">
                    <div>
                        {sortOptions.map((option) => (
                            <button
                                key={option.value}
                                onClick={() => handleSelect(option)}
                                className={`flex w-full items-center justify-between px-4 py-2 text-sm ${option.value === selected.value
                                    ? "bg-gray-100 font-semibold text-gray-900"
                                    : "text-[var(--subtext-color)] hover:bg-gray-50"
                                    }`}
                            >
                                {option.label}
                                {option.value === selected.value && (
                                    <Check className="h-4 w-4 text-[var(--subtext-color)]" />
                                )}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
