"use client";

import React from "react";
import { MoveRight } from "lucide-react";
import Link from "next/link";

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
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {items.map((item) => (
                <div key={item.id} className="relative group cursor-pointer">
                    {/* Image */}
                    <div className="w-full xsh-[300px] lg:h-[500px] overflow-hidden">
                        <img
                            src={item.url}
                            alt={item.name}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Text overlay */}
                    <Link href={"/"} className="w-full flex align-center absolute bottom-6 justify-center">
                        <div className="flex align-center gap-2 text-xs sm:text-sm font-semibold">
                            <span>
                                {item.name.toUpperCase()}
                            </span>
                            <MoveRight />
                        </div>
                    </Link>
                </div>
            ))}
        </div>
    );
};
