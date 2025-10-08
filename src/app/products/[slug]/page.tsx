"use client"

import { useState } from "react"
import { Star, Truck, ShieldCheck, RefreshCw, Phone, Minus, Plus, ShoppingCart, Store } from "lucide-react"
import Image from "next/image"
import { Breadcrumb } from "@/components/breadcrumb/Breadcrumb"

export default function ProductPage() {
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)

  const images = ["/products/p1.jpg", "/products/p2.jpg"]

  return (
    <div className="min-h-screen container mx-auto bg-white text-[var(--color-text)] py-4">
      {/* Breadcrumb */}
      <Breadcrumb
        items={[
          { label: "Trang chủ", href: "/" },
          { label: "Nước hoa nữ", href: "/products" },
          { label: "Gucci Flora Gorgeous Jasmine Mini Size" },
        ]}
      />
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Left Column - Product Images */}
          <div className="space-y-4 col-span-1">
            <div className="aspect-square bg-gray-50 rounded-lg overflow-hidden flex items-center justify-center">
              <img
                src={images[selectedImage] || "/placeholder.svg"}
                alt="Product"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Thumbnail Images */}
            <div className="flex gap-2">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`w-16 h-16 border-2 rounded-lg overflow-hidden ${selectedImage === idx ? "border-gray-900" : "border-gray-200"
                    }`}
                >
                  <img
                    src={img || "/placeholder.svg"}
                    alt={`Thumbnail ${idx + 1}`}
                    className="w-full h-full object-contain"
                  />
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-6 col-span-1 lg:col-span-2">
            <div>
              <h1 className="text-2xl font-semibold text-foreground mb-3">
                {"Gucci Flora Gorgeous Jasmine Mini Size"}
              </h1>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center">
                  {[1, 2, 3, 4].map((star) => (
                    <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" style={{ clipPath: "inset(0 50% 0 0)" }} />
                </div>
                <span className="text-sm text-muted-foreground">{"45 đánh giá"}</span>
                <span className="px-2 py-0.5 bg-gray-100 text-xs rounded">{"Nữ"}</span>
              </div>

              {/* Brand */}
              <div className="mb-2">
                <span className="text-sm text-muted-foreground">{"Thương hiệu: "}</span>
                <span className="text-sm font-medium">{"Gucci"}</span>
              </div>

              {/* Product Type */}
              <div className="mb-4">
                <p className="text-sm text-muted-foreground">{"Eau de Parfum 5ml"}</p>
              </div>

              {/* Size Selection */}
              <div className="mb-6">
                <p className="text-sm font-medium mb-2">{"Standard Size"}</p>
                <div className="inline-flex items-center gap-2 border-2 border-[var(--color-primary)] rounded-lg px-4 py-2 relative">
                  <div className="w-5 h-5 border-[var(--color-primary)] rounded flex items-center justify-center">
                    <Image src="/products/p1.jpg" alt="Selected" width={12} height={12} />
                  </div>
                  <span className="text-sm">{"Eau de Parfum 5ml"}</span>
                  <span className="absolute -top-2 right-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded">
                    {"Happy Women's Day"}
                  </span>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap gap-4 mb-6 pb-6 border-b border-[var(--color-border)]">
                <div className="flex items-center gap-2">
                  <Truck className="w-5 h-5 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">{"Freeship toàn quốc"}</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">{"Chính hàng 100%"}</span>
                </div>
                <div className="flex items-center gap-2">
                  <RefreshCw className="w-5 h-5 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">{"Đổi trả miễn phí"}</span>
                </div>
              </div>

              {/* Contact */}
              <div className="flex items-center justify-center gap-2 mb-6 text-sm">
                <span className="text-red-500 font-medium">{"GỌI ĐẶT MUA"}</span>
                <Phone className="w-4 h-4 text-red-500" />
                <span className="font-bold">{"1900 0129"}</span>
                <span className="text-muted-foreground">{"(9:00-21:00)"}</span>
              </div>
            </div>

          </div>
          {/* Price Card */}
          <div className="border border-[var(--color-border)] rounded-md p-4 w-full space-y-3 text-[15px]">
            {/* Promotion header */}
            <div className="bg-red-50 text-red-600 font-bold px-3 py-1 text-sm">
              HAPPY WOMEN'S DAY
            </div>

            {/* Main discount price */}
            <div>
              <div className="text-red-600 font-bold text-2xl">3.610.000₫</div>
              <div className="text-sm text-gray-600">
                Khi nhập code <span className="text-blue-600 font-bold">QUEEN5</span>
              </div>
              <div className="text-sm text-gray-600">(Giảm thêm 5%)</div>
            </div>

            {/* Original + discounted price */}
            <div>
              <div className="text-gray-400 line-through text-sm">5.160.000₫</div>
              <div className="text-[18px] font-bold text-black">3.800.000₫</div>
              <div className="text-sm text-gray-600">(Tiết kiệm: 26%)</div>
            </div>

            {/* Stock status */}
            <div className="text-blue-800 font-bold text-sm pt-2">CÒN HÀNG</div>

            {/* Store info */}
            <div className="flex items-center text-blue-700 gap-1 text-sm">
              <Store className="w-4 h-4" />
              <span className="text-xs">Cửa hàng gần bạn</span>
            </div>

            {/* Quantity */}
            <div className="flex items-center gap-2 text-sm">
              <span className="text-xs">Số lượng:</span>
              <select
                value={quantity}
                onChange={(e) => setQuantity(parseInt(e.target.value))}
                className="border rounded-md px-2 py-1 text-sm"
              >
                {[...Array(10)].map((_, i) => (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                ))}
              </select>
            </div>

            {/* Buttons */}
            <div className="flex flex-col gap-2 pt-2">
              <button className="text-xs w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2 rounded-sm">
                Thêm vào giỏ hàng
              </button>
              <button className="text-xs w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2 rounded-sm">
                Mua ngay
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
