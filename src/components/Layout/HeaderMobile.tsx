import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Bell, Search, ShoppingCart } from "lucide-react";

import "@/styles/layout/_headerMobile.scss";

const menuItems = ["namperfume Favorites", "Deal Thơm", "Nước Hoa Nữ", "Nước Hoa Nam"];

const HeaderMobile: React.FC = () => {
  return (
    <header className="w-full bg-white shadow-md">
      {/* Top icons */}
      <div className="flex items-center justify-between px-4 py-2 border-b border-gray-200">
        <div className="w-6"></div> {/* Placeholder cho alignment logo */}
        <Link href="/">
          <h1 className="text-red-600 text-lg font-bold">namperfume</h1>
        </Link>
        <div className="flex items-center gap-4">
          <Bell size={20} className="text-gray-700" />
          <Search size={20} className="text-gray-700" />
          <div className="relative">
            <ShoppingCart size={20} className="text-gray-700" />
            <span className="absolute -top-2 -right-2 text-xs bg-red-600 text-white rounded-full w-4 h-4 flex items-center justify-center">
              0
            </span>
          </div>
        </div>
      </div>

      {/* Banner nhỏ */}
      <div className="w-full bg-gray-300 text-center text-sm py-1">
        Freeship cho mọi đơn hàng
      </div>

      {/* Menu scroll ngang */}
      <div className={"w-full overflow-x-auto"}>
        <div className="flex gap-4 px-4 py-2 whitespace-nowrap">
          {menuItems.map((item, index) => (
            <Link key={index} href="#" className="text-sm text-red-600 font-medium">
              {item}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default HeaderMobile;
