"use client";

import React from "react";
// import "@/styles/components/_sectionlist.scss";
import "@/styles/components/_sectionList.scss";
import "@/styles/layout/_header.scss";
import { SectionItem, SectionListProps } from "@/types/section";

export const SectionList: React.FC<SectionListProps> = ({
    title,
    items,
    viewMoreLink,
    renderItem,
}) => {
    return (
        <section className="my-8">
            <div className="section-header flex justify-between items-center mb-4">
                <h2 className="section-header__text">{title}</h2>
                {viewMoreLink && (
                    <a href={viewMoreLink} className="text-sm text-gray-500 hover:underline">
                        Xem thêm &gt;
                    </a>
                )}
            </div>
            <div className="flex gap-4 overflow-x-auto">
                {items.map((item) =>
                    renderItem ? renderItem(item) : (
                        <div key={item.id} className="flex-shrink-0 w-40">
                            <img src={item.image} alt={item.title} className="w-full h-40 object-cover" />
                            {item.title && <h3 className="mt-2 text-sm font-medium">{item.title}</h3>}
                            {item.subtitle && <p className="text-xs text-gray-500">{item.subtitle}</p>}
                            {item.price && <p className="text-red-500 text-sm">{item.price}</p>}
                            {item?.badges?.length > 0 && (
                                <div className="flex gap-1 mt-1">
                                    {item?.badges?.map((b, idx) => (
                                        <span key={idx} className="text-xs bg-red-500 text-white px-1 rounded">
                                            {b}
                                        </span>
                                    ))}
                                </div>
                            )}
                        </div>
                    )
                )}
            </div>
        </section>
    );
};
