"use client";

import React from "react";
import { MoveRight } from "lucide-react";

interface BannerCategoryItem {
    id: number | string;
    name: string;
    url: string;
}

interface CategoryListProps {
    items: BannerCategoryItem[];
}

export const CategoryList: React.FC<CategoryListProps> = ({ items }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((item) => (
                <div key={item.id} className="relative group cursor-pointer">
                    {/* Image */}
                    <div className="w-full h-[500px] overflow-hidden">
                        <img
                            src={item.url}
                            alt={item.name}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Text overlay */}
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center">
                        <div className="flex align-center gap-2 text-xs sm:text-base font-semibold">
                            <span>
                                {item.name.toUpperCase()}
                            </span>
                            <MoveRight />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};
