"use client";

import { useState } from "react";
import { Heart } from "lucide-react";
import "@/styles/components/_productList.scss";
import HandleCollectionLayout from "@/components/Layout/HandleCollectionLayout";
import { I_Product } from "@/types/product";

type Props = {
  titleType: "male" | "female";
  products: I_Product[];
  perPage?: number;
};

const TITLE_MAP: Record<"male" | "female", string> = {
  male: `Các quý ông tìm đến nước hoa để làm gì? Có lẽ là để thơm tho, nam tính và làm chỉn chu thêm phong cách của bản thân, phải chứ? Namperfume thấu hiểu các quý ông của chúng ta, đem tới cho đấng mày râu những mùi hương tươm tất, gọn gàng, cuốn hút, đôi khi là quyền lực choáng ngợp, và chắc chắn không thể quên được sự bụi bặm phóng khoáng đặc trưng của phái mạnh.`,
  female: `Các quý cô tìm đến nước hoa để làm gì? Có lẽ là để trở nên quyến rũ, duyên dáng và tự tin hơn trong phong cách, phải chứ? Namperfume thấu hiểu các quý cô của chúng ta, đem tới những mùi hương tinh tế, ngọt ngào, sang trọng và không thể nhầm lẫn.`,
};

export const dummyProducts: I_Product[] = [
  {
    id: 1,
    name: "Burberry Hero Parfum Intense",
    brand: "BURBERRY",
    priceRange: "3,350,000₫",
    sizes: [{ id: 1, label: "50ml" }, { id: 2, label: "100ml" }],
    thumbnail: "/products/p1.jpg",
  },
  {
    id: 2,
    name: "Dior Sauvage Eau de Toilette",
    brand: "DIOR",
    priceRange: "3,200,000₫",
    sizes: [{ id: 1, label: "50ml" }, { id: 2, label: "100ml" }],
    thumbnail: "/products/p2.jpg",
  },
  {
    id: 3,
    name: "Chanel Bleu de Chanel",
    brand: "CHANEL",
    priceRange: "3,800,000₫",
    sizes: [{ id: 1, label: "50ml" }, { id: 2, label: "100ml" }],
    thumbnail: "/products/p3.jpg",
  },
  {
    id: 4,
    name: "Yves Saint Laurent La Nuit de L'Homme",
    brand: "YSL",
    priceRange: "2,900,000₫",
    sizes: [{ id: 1, label: "50ml" }, { id: 2, label: "100ml" }],
    thumbnail: "/products/p4.jpg",
  },
  {
    id: 5,
    name: "Giorgio Armani Acqua di Giò Profumo",
    brand: "ARMANI",
    priceRange: "3,600,000₫",
    sizes: [{ id: 1, label: "50ml" }, { id: 2, label: "100ml" }],
    thumbnail: "/products/p5.jpg",
  },
  {
    id: 6,
    name: "Tom Ford Noir Extreme",
    brand: "TOM FORD",
    priceRange: "4,200,000₫",
    sizes: [{ id: 1, label: "50ml" }, { id: 2, label: "100ml" }],
    thumbnail: "/products/p6.jpg",
  }
];

export default function Collection({
  params,
}: {
  params: { slug: string };
}) {
  return (
    <HandleCollectionLayout collection={dummyProducts} />
  );
}
