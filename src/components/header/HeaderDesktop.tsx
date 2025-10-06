"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Chrome, Facebook, Heart, Search, ShoppingCart, Store, User, UserCircle } from "lucide-react";

import "@/styles/layout/_header.scss";

import { HeaderCategory } from "@/types/category";

const categories: HeaderCategory[] = [
    {
        key: "favorites",
        title: "namperfume Favorites",
        type: "highlight",
        link: "/collections/favorites"
    },
    {
        key: "deal_thom",
        title: "Deal Thơm",
        link: "/collections/deal-thom",
        type: "bold"
    },
    {
        key: "nuoc_hoa_nam", title: "Nước Hoa Nam", link: "/collections/nuoc-hoa-nam", mega: {
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
    { key: "nuoc_hoa_nu", title: "Nước Hoa Nữ", link: "/collections/nuoc-hoa-nu" },
    { key: "nuoc_hoa_mini", title: "Nước Hoa Mini", link: "/collections/nuoc-hoa-mini" },
    { key: "giftset", title: "Giftset", link: "/collections/giftset" },
    { key: "nuoc_hoa_niche", title: "Nước Hoa Niche", link: "/collections/nuoc-hoa-niche" },
    { key: "thuong_hieu", title: "Thương Hiệu", link: "/collections/thuong-hieu" },
    { key: "bodycare_homecare", title: "Bodycare & Homecare", link: "/collections/bodycare-homecare" },
    { key: "son_moi", title: "Son Môi", link: "/collections/son-moi" },
];

export default function HeaderDesktop() {
    const [activeMenu, setActiveMenu] = useState<string | null>(null);
    const [categoryHover, setCategoryHover] = useState<string | null>(null);

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
                        <div className="relative">
                            <div className="group header__actions__item__login flex items-center gap-1 cursor-pointer">
                                <User size={20} />
                                <span>Đăng nhập</span>
                                {/* Dropdown */}
                                <div
                                    className="login__dropdown absolute right-0 top-full mt-2 w-68 bg-white border border-[var(--color-border)] rounded-md shadow-lg 
      hidden translate-y-2 z-50 group-hover:block"
                                >
                                    <div className="p-4">
                                        <div className="flex items-center gap-2 mb-4">
                                            <div><UserCircle color="var(--subtext-color)" size={24} /></div>
                                            <div>
                                                <p className="text-sm font-medium">Chào bạn</p>
                                                <p className="text-xs">Đăng nhập để tham gia với chúng tôi</p>
                                            </div>
                                        </div>

                                        <div className="flex gap-2 mb-3">
                                            <Link
                                                href="/auth/login"
                                                className="flex-1 text-center text-xs border rounded-md p-2 font-medium hover:bg-[var(--color-primary)] hover:text-white transition"
                                            >
                                                Đăng nhập
                                            </Link>
                                            <Link
                                                href="/auth/register"
                                                className="flex-1 text-center text-xs border rounded-md p-2 font-medium hover:bg-[var(--color-primary)] hover:text-white transition"
                                            >
                                                Đăng ký
                                            </Link>
                                        </div>

                                        <div className="border-t pt-2">
                                            <p className="text-xs mb-2 text-center">Hoặc đăng nhập với</p>

                                            <div className="flex flex-col gap-2">
                                                <button className="w-full flex items-center justify-center gap-2 border rounded-md py-2 hover:bg-gray-50">
                                                    <Chrome className="text-red-600" size={18} />
                                                    Đăng Nhập Với Google
                                                </button>
                                                <button className="w-full flex items-center justify-center gap-2 border rounded-md py-2 hover:bg-gray-50">
                                                    <Facebook className="text-blue-600" size={18} />
                                                    Đăng Nhập Với Facebook
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


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
                                onClick={() => setActiveMenu(category.key)}
                                onMouseEnter={() => setCategoryHover(category.key)}
                                onMouseLeave={() => setCategoryHover(null)}
                                className={`
                                    ${category.type === "highlight" ? "highlight" : ""} 
                                    ${category.type === "bold" ? "bold" : ""}
                                    ${category.key === activeMenu ? "active" : ""}
                                `}
                            >
                                <Link href={category.link}>{category.title}</Link>

                                {/* Mega menu */}
                                {category.mega && category.key === categoryHover && (
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
                                                    <Image key={i} src={img} alt="brand" width={230} height={200} />
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
