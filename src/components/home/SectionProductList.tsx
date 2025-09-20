"use client";

import React from "react";
import "@/styles/components/_sectionList.scss";
import { SectionListProps } from "@/types/section";

export const SectionList: React.FC<SectionListProps> = ({
    title,
    items,
    viewMoreLink,
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
            </div>
        </section>
    );
};
