import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Bell, Search, ShoppingCart } from "lucide-react";

import "@/styles/layout/_headerMobile.scss";

const menuItems = [
  { title: "Namperfume Favorites" },
  { title: "Deal Thơm" },
  { title: "Nước Hoa Nữ" },
  { title: "Nước Hoa Nam" },
  { title: "Nước Hoa Mini" },
  { title: "Giftset" },
  { title: "Nước Hoa Niche" },
  { title: "Thương Hiệu" },
  { title: "Bodycare & Homecare" },
  { title: "Son Môi" },
];

const promoMessages = [
  "Freeship mọi đơn hàng",
  "Thương hiệu nước hoa được feedback nhiều nhất Việt Nam",
  "Cam kết 100% chính hãng"
];


const HeaderMobile: React.FC = () => {

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % promoMessages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-white shadow-md">
      {/* Top icons */}
      <div className="flex items-center justify-between px-4 py-2 border-b border-gray-200">
        <Bell size={20} className="text-gray-700" />
        <Link href="/" className="header__logo">
          <Image src="/common/logo.svg" alt="NamPerfume Logo" width={150} height={40} priority />
        </Link>
        <div className="flex items-center gap-4">
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
      <div className="w-full bg-[var(--color-bg-muted)] text-center text-xs py-2">
        {promoMessages[index]}
      </div>

      {/* Menu scroll ngang */}
      <div className={"w-full overflow-x-auto"}>
        <div className="flex gap-4 px-4 py-2 whitespace-nowrap">
          {menuItems.map((item, index) => (
            <Link key={item.title} href="#" className={`text-xs ${index === 0 ? 'font-bold text-[var(--color-primary)]' : 'text-[var(--color-text)]'}`}>
              {item.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeaderMobile;
