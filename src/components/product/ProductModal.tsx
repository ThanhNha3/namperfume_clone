import { Star, X } from "lucide-react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { I_Product } from "@/types/product";
import { Tag } from "../tag/Tag";
import { formatCurrencyVND } from "@/utils/formatCurrencyVND";

type SizeOption = {
  id?: number;
  label?: string;
  price?: number;
  oldPrice?: number;
  percentSale?: number;
  tags?: string[];
};

export default function ProductModal({
  product,
  isOpen,
  onClose,
}: {
  product: I_Product | null;
  isOpen: boolean;
  onClose: () => void;
}) {
  const [selectedSize, setSelectedSize] = useState<SizeOption>({});

  // Thoát bằng phím ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  // Reset size khi đổi sản phẩm
  useEffect(() => {
    setSelectedSize(product?.sizes?.[0] || {});
  }, [product]);

  // Component sao đánh giá
  const renderStars = (count: number) =>
    Array.from({ length: count }, (_, i) => (
      <Star key={i} size={18} fill="#d72229" strokeWidth={0} />
    ));

  // Component chọn size
  const SizeInformationComponent = () => (
    <section className="my-4">
      <h4 className="text-md font-semibold mb-2">Lựa chọn size</h4>
      <ul className="flex flex-wrap gap-3">
        {product?.sizes?.map((size) => (
          <li
            key={size.id}
            className={`border text-sm px-4 py-2 rounded-md cursor-pointer hover:border-[var(--color-primary)] transition 
              ${selectedSize?.label === size.label
                ? "bg-[var(--color-primary)] text-white border-[var(--color-primary)]"
                : "bg-transparent text-[var(--color-text)] border-[var(--color-border)]"
              }`}
            onClick={() => setSelectedSize(size)}
          >
            {size.label}
          </li>
        ))}
      </ul>
    </section>
  );

  if (!product || !isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && product && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-xs"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.article
            layout
            role="dialog"
            aria-modal="true"
            className="relative bg-white dark:bg-[var(--color-background)] rounded-lg shadow-2xl w-[92%] sm:w-[85%] md:w-[80%] lg:w-[850px] p-6 text-[var(--color-text)] max-h-[90vh] overflow-y-auto"
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -80, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Nút đóng */}
            <button
              onClick={onClose}
              aria-label="Đóng cửa sổ chi tiết sản phẩm"
              className="absolute right-4 top-3 text-[var(--subtext-color)] transition cursor-pointer"
            >
              <X size={24} />
            </button>

            {/* Nội dung modal */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Hình ảnh sản phẩm */}
              <figure className="col-span-1 flex flex-col items-center">
                <div className="w-[220px] h-[220px] md:w-[250px] md:h-[250px] flex items-center justify-center overflow-hidden">
                  <img
                    src={product.thumbnail}
                    alt={product.name}
                    width={250}
                    height={250}
                    className="object-contain w-full h-full"
                    loading="lazy"
                  />
                </div>
                <figcaption className="mt-3 flex gap-1 items-center justify-center text-sm text-[var(--subtext-color)]">
                  {renderStars(product.rating || 0)}
                  <span className="ml-1">{product.reviewsCount} đánh giá</span>
                </figcaption>
              </figure>

              {/* Thông tin sản phẩm */}
              <section className="col-span-2 flex flex-col justify-between">
                <header>
                  <Tag title="Nữ" type="woman" />
                  <h1 className="text-xl font-bold mt-1 mb-2 leading-tight min-h-[2.5rem]">
                    {product.name}
                  </h1>
                  <p className="text-sm mb-1">
                    Thương hiệu: <strong>{product.brand}</strong>
                  </p>
                  <p className="text-sm text-[var(--subtext-color)] mb-3">
                    Mã hàng: <span>{product.code}</span>
                  </p>
                  <p className="text-sm leading-relaxed text-[var(--subtext-color)]">
                    {product.shortDescription}
                  </p>
                  <Link
                    className="block text-right text-[var(--color-primary)] mt-1 hover:underline text-sm"
                    href="#"
                  >
                    Xem chi tiết
                  </Link>
                </header>

                <SizeInformationComponent />

                {/* Khu vực giá và hành động */}
                <footer className="mt-6">
                  <p className="text-xl font-semibold text-[var(--color-primary)] flex flex-wrap items-center">
                    {formatCurrencyVND(selectedSize.price || 0)}
                    {selectedSize.oldPrice && (
                      <>
                        <span className="ml-2 text-[var(--subtext-color)] line-through text-sm">
                          {formatCurrencyVND(selectedSize.oldPrice || 0)}
                        </span>
                        <span className="ml-2 text-sm text-green-600">
                          {`Tiết kiệm ${formatCurrencyVND(
                            selectedSize.oldPrice * (selectedSize.percentSale || 0) / 100
                          )}
                          (${selectedSize.percentSale}%)`}
                        </span>
                      </>
                    )}
                  </p>

                  <div className="flex flex-col sm:flex-row gap-3 mt-4">
                    <button className="text-sm flex-1 border border-[var(--color-primary)] text-[var(--color-primary)] py-2.5 rounded-md font-medium hover:bg-[var(--color-primary)] hover:text-white transition cursor-pointer">
                      Thêm Vào Giỏ Hàng
                    </button>
                    <button className="text-sm flex-1 bg-[var(--color-primary)] text-white py-2.5 rounded-md font-medium hover:bg-[#b71c22] transition cursor-pointer">
                      Mua Ngay
                    </button>
                  </div>

                  <p className="text-sm text-[var(--subtext-color)] text-center mt-2">
                    Free Ship mọi đơn hàng
                  </p>
                </footer>
              </section>
            </div>
          </motion.article>
        </motion.div>
      )}
    </AnimatePresence>
  );
}