"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Heart, Search, ShoppingCart, Store, User } from "lucide-react";

import "@/styles/layout/_header.scss";

import { HeaderCategory } from "@/types/category";

const categories: HeaderCategory[] = [
    {
        key: "favorites",
        title: "namperfume Favorites",
        type: "highlight"
    },
    {
        key: "deal_thom",
        title: "Deal Thơm",
    },
    {
        key: "nuoc_hoa_nam", title: "Nước Hoa Nam", mega: {
            categories: [
                {
                    key: "new",
                    label: "Mới nhất"
                },
                {
                    key: "favorite",
                    label: "Yêu thích nhất"
                },
                {
                    key: "niche",
                    label: "Nước hoa Niche"
                },
                {
                    key: "giftset",
                    label: "Giftset"
                },
                {
                    key: "unisex",
                    label: "Nước Hoa Unisex"
                },
                {
                    key: "mini",
                    label: "Nước Hoa Mini"
                }
            ],
            brands: ["GUCCI", "CALVIN KLEIN", "CHANEL", "BVLGARI", "VERSACE", "VALENTINO", "HUGO BOSS", "YSL", "DIOR", "TOM FORD", "BURBERRY", "PRADA", "LANCOME", "ARMANI", "FERRAGAMO", "MONTBLANC", "RALPH LAUREN", "HERMES", "CREED", "JO MALONE", "DOLCE & GABBANA"],
            banners: ["/menu/menu_hover_nam_1.jpg", "/menu/menu_hover_nam_2.jpg", "/menu/menu_hover_nam_3.jpg"],
        },
    },
    { key: "nuoc_hoa_nu", title: "Nước Hoa Nữ" },
    { key: "nuoc_hoa_mini", title: "Nước Hoa Mini" },
    { key: "giftset", title: "Giftset" },
    { key: "nuoc_hoa_niche", title: "Nước Hoa Niche" },
    { key: "thuong_hieu", title: "Thương Hiệu" },
    { key: "bodycare_homecare", title: "Bodycare & Homecare" },
    { key: "son_moi", title: "Son Môi" },
];

export default function HeaderDesktop() {
    const [activeMenu, setActiveMenu] = useState<string | null>(null);

    return (
        <div className="header">
            <div className="header__topbar">
                <span>Thương hiệu nước hoa được feedback nhiều nhất Việt Nam</span>
            </div>
            <div className="header__middlebar border-b">
                <div className="container mx-auto flex justify-between">
                    <span>Freeship mọi đơn hàng</span>
                    <span>Theo dõi đơn hàng</span>
                </div>
            </div>
            <div className="header__bottombar">
                <div className="container mx-auto flex items-center justify-between py-4 px-4 lg:px-0">
                    <Link href="/" className="header__logo">
                        <Image src="/common/logo.svg" alt="NamPerfume Logo" width={150} height={40} priority />
                    </Link>
                    <div className="header__search flex-1 px-6">
                        <div className="relative flex items-center border border-[var(--color-border)] rounded px-4">
                            <span className="text-gray-400 flex items-center">
                                <Search size={24} />
                            </span>
                            <input
                                type="text"
                                placeholder="Tìm kiếm"
                                className="w-full py-2 px-2 text-sm focus:outline-none border-none"
                            />
                        </div>
                    </div>
                    <div className="header__actions flex items-center gap-6 text-sm">
                        {/* Item 1 */}
                        <Link href="#" className="header__actions__item">
                            <Store size={20} />
                            <span>8 cửa hàng toàn quốc</span>
                        </Link>

                        {/* Item 2 */}
                        <Link href="#" className="header__actions__item">
                            Nmagazine
                        </Link>

                        {/* Item 3 */}
                        <Link href="#" className="header__actions__item">
                            <User size={20} />
                            <span>Đăng nhập</span>
                        </Link>

                        {/* Item 4: Heart */}
                        <Link href="#" className="header__actions__item relative">
                            <Heart size={20} />
                            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full px-1">0</span>
                        </Link>

                        {/* Item 5: Shopping Cart */}
                        <Link href="#" className="header__actions__item relative">
                            <ShoppingCart className="header__actions__item__icon" size={20} />
                            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full px-1">0</span>
                        </Link>
                    </div>

                </div>
            </div>
            <nav className="header__nav">
                <div className="container mx-auto px-4 lg:px-0">
                    <ul className="header__nav__list">
                        {categories.map((category) => (
                            <li
                                key={category.title}
                                onMouseEnter={() => setActiveMenu(category.key)}
                                onMouseLeave={() => setActiveMenu(null)}
                                className={category.type === "highlight" ? "highlight" : ""}
                            >
                                <Link href="#">{category.title}</Link>

                                {/* Mega menu */}
                                {category.mega && category.key === activeMenu && (
                                    <div className="mega-menu">
                                        <div className="mega-menu__content">
                                            {/* Phân loại */}
                                            {category.mega.categories && (
                                                <div className="mega-menu__categories">
                                                    <h4 className="mega-menu__title">Phân loại</h4>
                                                    <ul className="mega-menu__categories-list mb-2">
                                                        {category.mega.categories.slice(0, 12).map((item) => (
                                                            <li key={item.key}>{item.label}</li>
                                                        ))}
                                                    </ul>
                                                    {category.mega.categories.length > 12 && (
                                                        <Link href="/categories" className="mega-menu__view-all">
                                                            Xem tất cả
                                                        </Link>
                                                    )}
                                                </div>
                                            )}

                                            {/* Thương hiệu */}
                                            {category.mega.brands && (
                                                <div className="mega-menu__brands">
                                                    <h4 className="mega-menu__title">Thương hiệu</h4>
                                                    <ul className="mega-menu__brands-list grid-cols-2">
                                                        {category.mega.brands.slice(0, 12).map((brand) => (
                                                            <li key={brand}>{brand}</li>
                                                        ))}
                                                    </ul>
                                                    {category.mega.brands.length > 12 && (
                                                        <Link href="/brands" className="mega-menu__view-all">
                                                            Xem tất cả
                                                        </Link>
                                                    )}
                                                </div>
                                            )}

                                            {/* Banner */}
                                            <div className="mega-menu__images">
                                                {category?.mega?.banners?.map((img, i) => (
                                                    <Image key={i} src={img} alt="brand" width={200} height={170} />
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            </nav >
        </div >
    );
}
