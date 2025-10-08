"use client";

import { useState } from "react";
import Image from "next/image";
import { Heart, Trash2, Clock } from "lucide-react";
import Link from "next/link";
import { ProductCard, ProductSkeleton } from "@/components/common";
import { SectionDataList } from "@/components/home/SectionDataList";

const DEAL_THOM_PRODUCTS = [
    {
        id: 6,
        thumbnail: "/products/p1.jpg",
        name: "Nước hoa Dior Sauvage EDP",
        brand: "Dior",
        code: "110100204074",
        reviewsCount: 55,
        rating: 5,
        shortDescription: "Nước hoa Dior Sauvage EDP - Phiên bản Eau de Parfum",
        title: "Nước hoa Dior Sauvage EDP",
        subtitle: "100ml - Eau de Parfum",
        priceRange: "3.200.000₫",
        badges: ["Yêu thích", "Bán chạy"],
        sizes: [
            {
                id: 1,
                label: "50ml",
                price: 2200000,
                oldPrice: 2500000,
                percentSale: 10,
                tags: ["Yêu thích"],
            },
            {
                id: 2,
                label: "100ml",
                price: 3200000,
                oldPrice: 3500000,
                percentSale: 10,
                tags: ["Bán chạy"],
            },
        ],
    },
];

interface WishlistItem {
    id: number;
    name: string;
    brand: string;
    price: number;
    image: string;
    link: string;
}

export default function WishlistPage() {
    const [wishlist, setWishlist] = useState<WishlistItem[]>([
        {
            id: 1,
            name: "Bleu de Chanel",
            brand: "Chanel",
            price: 3450000,
            image: "/images/perfumes/bleu.jpg",
            link: "/products/bleu-de-chanel",
        },
        {
            id: 2,
            name: "Dior Sauvage",
            brand: "Dior",
            price: 3290000,
            image: "/images/perfumes/sauvage.jpg",
            link: "/products/dior-sauvage",
        },
    ]);

    const handleRemove = (id: number) => {
        setWishlist((prev) => prev.filter((item) => item.id !== id));
    };

    // Mock data sản phẩm vừa xem
    const RECENTLY_VIEWED = [
        {
            id: 10,
            thumbnail: "/products/p2.jpg",
            name: "YSL Libre EDP",
            brand: "Yves Saint Laurent",
            title: "YSL Libre Eau de Parfum",
            subtitle: "90ml - Eau de Parfum",
            priceRange: "3.150.000₫",
            badges: ["Hot"],
            sizes: [],
        },
        {
            id: 11,
            thumbnail: "/products/p3.jpg",
            name: "Gucci Bloom EDP",
            brand: "Gucci",
            title: "Gucci Bloom Eau de Parfum",
            subtitle: "100ml - Eau de Parfum",
            priceRange: "3.450.000₫",
            badges: ["Bán chạy"],
            sizes: [],
        },
    ];

    return (
        <div className="container mx-auto p-4 text-[var(--color-text)] space-y-10">
            {/* Wishlist Section */}
            <section>
                {wishlist.length === 0 ? (
                    <div className="text-center text-gray-500 mt-10">
                        <p>Bạn chưa thêm sản phẩm nào vào danh sách yêu thích.</p>
                        <Link
                            href="/collections/all"
                            className="text-blue-600 hover:underline"
                        >
                            Khám phá sản phẩm →
                        </Link>
                    </div>
                ) : (
                    <SectionDataList
                        title={
                            <div className="flex items-center gap-2 mb-6">
                                <Heart className="text-red-500" />
                                <h1 className="text-2xl font-semibold">Danh sách yêu thích</h1>
                            </div>
                        }
                        items={RECENTLY_VIEWED}
                        SkeletonComponentUI={ProductSkeleton}
                        ItemComponentUI={ProductCard}
                        canScroll={false}
                        viewMoreLink="/wishlist"
                    />
                )}
            </section>

            {/* Recently Viewed Section */}
            <section>
                <SectionDataList
                    title={
                        <div className="flex items-center gap-2">
                            <Clock className="text-[var(--color-primary)]" />
                            <h2 className="text-xl font-semibold">Sản phẩm vừa xem</h2></div>
                    }
                    items={RECENTLY_VIEWED}
                    SkeletonComponentUI={ProductSkeleton}
                    ItemComponentUI={ProductCard}
                    canScroll={false}
                    viewMoreLink="/history"
                />
            </section>
        </div>
    );
}
