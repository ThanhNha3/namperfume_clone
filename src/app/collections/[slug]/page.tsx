"use client";

import { useState } from "react";
import { Heart } from "lucide-react";
import "@/styles/components/_productList.scss";

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
    image: "/images/products/burberry-hero.jpg",
  },
  {
    id: "2",
    name: "Dior Sauvage Eau de Toilette",
    brand: "DIOR",
    price: "3,200,000₫",
    sizes: ["60ml", "100ml"],
    image: "/images/products/dior-sauvage.jpg",
  },
  {
    id: "3",
    name: "Chanel Bleu de Chanel",
    brand: "CHANEL",
    price: "3,800,000₫",
    salePrice: "3,500,000₫",
    sizes: ["50ml", "100ml"],
    image: "/images/products/bleu-chanel.jpg",
  },
];

export default function Collection({
  params,
}: {
  params: { slug: string };
}) {
  const [page, setPage] = useState(1);
  const perPage = 8;
  const totalPages = Math.ceil(dummyProducts.length / perPage);
  const visible = dummyProducts.slice((page - 1) * perPage, page * perPage);
  console.log(params.slug);
  return (
    <div className="product-list">
      {/* Title */}
      {/* <p className="product-list__title">{TITLE_MAP[params.slug]}</p> */}
      
      {/* Products grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6">
        {visible.map((p) => (
          <div
            key={p.id}
            className="border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition bg-white p-4 relative"
          >
            <button className="absolute top-3 right-3 text-gray-500 hover:text-red-500">
              <Heart size={18} />
            </button>
            <div className="aspect-square flex items-center justify-center">
              <img
                src={p.image}
                alt={p.name}
                className="max-h-full object-contain"
              />
            </div>
            <div className="mt-3 space-y-1">
              <p className="text-sm font-semibold uppercase">{p.brand}</p>
              <p className="text-sm">{p.name}</p>
              {p.salePrice ? (
                <div className="space-x-2">
                  <span className="text-red-600 font-bold">{p.salePrice}</span>
                  <span className="line-through text-gray-400 text-sm">
                    {p.price}
                  </span>
                </div>
              ) : (
                <span className="text-red-600 font-bold">{p.price}</span>
              )}
              <p className="text-xs text-gray-500">{p.sizes.length} Sizes</p>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center gap-2 mt-6">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => setPage(i + 1)}
            className={`px-3 py-1 rounded ${page === i + 1
              ? "bg-black text-white"
              : "bg-gray-100 hover:bg-gray-200"
              }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
