"use client";

import { useState } from "react";
import { Heart } from "lucide-react";
import "@/styles/components/_productList.scss";
import HandleCollectionLayout from "@/components/Layout/HandleCollectionLayout";

type Product = {
  id: string;
  name: string;
  brand: string;
  price: string;
  salePrice?: string;
  sizes: string[];
  image: string;
};

type Props = {
  titleType: "male" | "female";
  products: Product[];
  perPage?: number;
};

const TITLE_MAP: Record<"male" | "female", string> = {
  male: `Các quý ông tìm đến nước hoa để làm gì? Có lẽ là để thơm tho, nam tính và làm chỉn chu thêm phong cách của bản thân, phải chứ? Namperfume thấu hiểu các quý ông của chúng ta, đem tới cho đấng mày râu những mùi hương tươm tất, gọn gàng, cuốn hút, đôi khi là quyền lực choáng ngợp, và chắc chắn không thể quên được sự bụi bặm phóng khoáng đặc trưng của phái mạnh.`,
  female: `Các quý cô tìm đến nước hoa để làm gì? Có lẽ là để trở nên quyến rũ, duyên dáng và tự tin hơn trong phong cách, phải chứ? Namperfume thấu hiểu các quý cô của chúng ta, đem tới những mùi hương tinh tế, ngọt ngào, sang trọng và không thể nhầm lẫn.`,
};

export const dummyProducts: Product[] = [
  {
    id: "1",
    name: "Burberry Hero Parfum Intense",
    brand: "BURBERRY",
    price: "3,350,000₫",
    salePrice: "2,950,000₫",
    sizes: ["50ml", "100ml"],
    image: "/products/p1.jpg",
  },
  {
    id: "2",
    name: "Dior Sauvage Eau de Toilette",
    brand: "DIOR",
    price: "3,200,000₫",
    sizes: ["60ml", "100ml"],
    image: "/products/p2.jpg",
  },
  {
    id: "3",
    name: "Chanel Bleu de Chanel",
    brand: "CHANEL",
    price: "3,800,000₫",
    salePrice: "3,500,000₫",
    sizes: ["50ml", "100ml"],
    image: "/products/p3.jpg",
  },
  {
    id: "4",
    name: "Yves Saint Laurent La Nuit de L'Homme",
    brand: "YSL",
    price: "2,900,000₫",
    sizes: ["60ml", "100ml"],
    image: "/products/p4.jpg",
  },
  {
    id: "5",
    name: "Giorgio Armani Acqua di Giò Profumo",
    brand: "ARMANI",
    price: "3,600,000₫",
    salePrice: "3,200,000₫",
    sizes: ["75ml", "125ml"],
    image: "/products/p5.jpg",
  },
  {
    id: "6",
    name: "Tom Ford Noir Extreme",
    brand: "TOM FORD",
    price: "4,200,000₫",
    sizes: ["50ml", "100ml"],
    image: "/products/p6.jpg",
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
