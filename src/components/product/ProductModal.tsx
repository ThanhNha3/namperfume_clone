"use client";
import { X } from "lucide-react";
import { useEffect } from "react";
import Image from "next/image";

type Product = {
  id: string;
  name: string;
  brand: string;
  code: string;
  description: string;
  image: string;
  sizes: { label: string; price: number; oldPrice?: number }[];
  isNew?: boolean;
};

type ProductModalProps = {
  isOpen: boolean;
  onClose: () => void;
  item: Product | null;
};

export default function ProductModal({ isOpen, onClose, item }: ProductModalProps) {
  // disable scroll khi mở modal
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  if (!isOpen || !item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center bg-black/50">
      <div
        className={`relative mt-10 w-full max-w-3xl transform rounded-xl bg-white p-6 shadow-lg transition-transform duration-300 ${
          isOpen ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"
        }`}
      >
        {/* Nút đóng */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full p-1 hover:bg-gray-100"
        >
          <X className="h-5 w-5 text-gray-500" />
        </button>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Ảnh */}
          <div className="flex items-center justify-center">
            <Image
              src={item.image}
              alt={item.name}
              width={250}
              height={250}
              className="rounded-md"
            />
          </div>

          {/* Nội dung */}
          <div>
            <h2 className="text-sm uppercase text-pink-500">Nữ</h2>
            <h1 className="text-lg font-bold">{item.name}</h1>
            <p className="text-sm text-gray-600">
              Thương hiệu: <span className="font-semibold">{item.brand}</span>
            </p>
            <p className="text-xs text-gray-400">Mã hàng: {item.code}</p>

            {item.isNew && (
              <span className="mt-1 inline-block rounded bg-red-500 px-2 py-0.5 text-xs text-white">
                New
              </span>
            )}

            <p className="mt-3 line-clamp-3 text-sm text-gray-700">
              {item.description}
            </p>

            {/* Size chọn */}
            <div className="mt-4">
              <p className="text-sm font-medium">Lựa chọn size</p>
              <div className="mt-2 flex gap-2">
                {item.sizes.map((s, i) => (
                  <button
                    key={i}
                    className="rounded-lg border px-3 py-1 text-sm hover:border-red-500 hover:text-red-500"
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Giá */}
            <div className="mt-4">
              <p className="text-xl font-bold text-red-600">
                {item.sizes[0].price.toLocaleString()}đ
              </p>
              {item.sizes[0].oldPrice && (
                <p className="text-sm text-gray-500 line-through">
                  {item.sizes[0].oldPrice.toLocaleString()}đ
                </p>
              )}
            </div>

            {/* Nút hành động */}
            <div className="mt-6 flex gap-3">
              <button className="flex-1 rounded-lg bg-red-600 px-4 py-2 text-white hover:bg-red-700">
                Thêm Vào Giỏ Hàng
              </button>
              <button className="flex-1 rounded-lg border border-red-600 px-4 py-2 text-red-600 hover:bg-red-50">
                Mua Ngay
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
