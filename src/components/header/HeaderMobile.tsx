import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Bell, Search, ShoppingCart } from "lucide-react";

import "@/styles/layout/_headerMobile.scss";

const menuItems = [
  { key: "favorites", title: "Namperfume Favorites", link: "/collections/favorites", type: "highlight" },
  { key: "deal_thom", title: "Deal Thơm", link: "/collections/deal-thom" },
  { key: "nuoc_hoa_nu", title: "Nước Hoa Nữ", link: "/collections/nuoc-hoa-nu" },
  { key: "nuoc_hoa_nam", title: "Nước Hoa Nam", link: "/collections/nuoc-hoa-nam" },
  { key: "nuoc_hoa_mini", title: "Nước Hoa Mini", link: "/collections/nuoc-hoa-mini" },
  { key: "giftset", title: "Giftset", link: "/collections/giftset" },
  { key: "nuoc_hoa_niche", title: "Nước Hoa Niche", link: "/collections/nuoc-hoa-niche" },
  { key: "thuong_hieu", title: "Thương Hiệu", link: "/collections/thuong-hieu" },
  { key: "bodycare_homecare", title: "Bodycare & Homecare", link: "/collections/bodycare-homecare" },
  { key: "son_moi", title: "Son Môi", link: "/collections/son-moi" },
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
      <div className="w-full bg-[var(--color-bg-muted)] text-center text-xs py-2 text-[var(--color-bg-white)]">
        {promoMessages[index]}
      </div>

      {/* Menu scroll ngang */}
      <div className={"w-full overflow-x-auto"}>
        <div className="flex gap-4 px-4 py-2 whitespace-nowrap">
          {menuItems.map((item, index) => (
            <Link key={item.key} href={item.link} className={`text-xs ${index === 0 ? 'font-bold text-[var(--color-primary)]' : 'text-[var(--color-text)]'}`}>
              {item.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeaderMobile;
