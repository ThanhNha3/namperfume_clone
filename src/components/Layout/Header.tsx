"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import "@/styles/layout/_header.scss";

import { Heart, Search, ShoppingCart, Store, User } from "lucide-react";

const categories = [
    {
        title: "namperfume Favorites",
        type: "highlight",
        mega: {
            left: ["Mới nhất", "Yêu thích nhất", "Nước hoa Niche", "Giftset", "Nước Hoa Unisex", "Nước Hoa Mini"],
            brands: ["GUCCI", "CALVIN KLEIN", "CHANEL", "BVLGARI", "VERSACE", "VALENTINO", "HUGO BOSS", "YSL"],
            images: ["/images/gucci.jpg", "/images/olympea.jpg", "/images/valentino.jpg"],
        },
    },
    { title: "Deal Thơm" },
    { title: "Nước Hoa Nam" },
    { title: "Nước Hoa Nữ" },
    { title: "Nước Hoa Mini" },
    { title: "Giftset" },
    { title: "Nước Hoa Niche" },
    { title: "Thương Hiệu" },
    { title: "Bodycare & Homecare" },
    { title: "Son Môi" },
];

export default function Header() {
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
                        {categories.map((cat) => (
                            <li
                                key={cat.title}
                                onMouseEnter={() => setActiveMenu(cat.title)}
                                onMouseLeave={() => setActiveMenu(null)}
                                className={cat.type === "highlight" ? "highlight" : ""}
                            >
                                <Link href="#">{cat.title}</Link>

                                {/* Mega menu */}
                                {cat.mega && activeMenu === cat.title && (
                                    <div className="mega-menu">
                                        <div className="mega-menu__content">
                                            <div className="mega-menu__left">
                                                {cat.mega.left.map((item) => (
                                                    <p key={item}>{item}</p>
                                                ))}
                                            </div>
                                            <div className="mega-menu__brands">
                                                {cat.mega.brands.map((brand) => (
                                                    <p key={brand}>{brand}</p>
                                                ))}
                                            </div>
                                            <div className="mega-menu__images">
                                                {cat.mega.images.map((img, i) => (
                                                    <Image key={i} src={img} alt="brand" width={150} height={180} />
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        </div>
    );
}
