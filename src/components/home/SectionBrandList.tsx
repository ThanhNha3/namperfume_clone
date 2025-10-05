"use client";

import React from "react";

import "@/styles/components/_sectionList.scss";
import { I_SectionItem, SectionListProps } from "@/types/section";
import { PromoSlider } from "./PromoSlider";

const slidesOnDesktop = [
    { id: 1, src: "/sliders/banner_brand_image_section_01.jpg" },
    { id: 2, src: "/sliders/banner_brand_image_section_02.jpg" },
    { id: 3, src: "/sliders/banner_brand_image_section_03.jpg" },
];

export function SectionBrandList({ title, items, viewMoreLink }: SectionListProps<I_SectionItem>) {
    return (
        <section>
            {/* Header */}
            <div className="section-header flex justify-between items-center mb-4">
                <h2 className="section-header__text text-xl font-semibold">{title}</h2>
                {viewMoreLink && (
                    <a
                        href={viewMoreLink}
                        className="text-sm text-gray-500 hover:underline flex items-center"
                    >
                        Xem thêm <span className="ml-1">&gt;</span>
                    </a>
                )}
            </div>

            {/* Content */}
            <div className="flex gap-4">
                {/* Left Banner */}
                <div className="w-1/2 h-[270px] hidden lg:block">
                    <PromoSlider isShowIndicator={false} slides={slidesOnDesktop} timeTransition={5000} />
                </div>

                {/* Right Grid */}
                <div className="w-full lg:w-1/2 grid grid-cols-4 gap-px bg-gray-200">
                    {items.map((item) => (
                        <div
                            key={item.id}
                            className="bg-white flex items-center justify-center p-2"
                        >
                            <img
                                src={item.image}
                                alt={item.name}
                                className="max-h-12 object-contain"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
