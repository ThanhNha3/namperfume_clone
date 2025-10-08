"use client";

import { useState } from "react";
import Image from "next/image";
import { Trash2 } from "lucide-react";
import Link from "next/link";

interface CartItem {
    id: number;
    brand: string;
    name: string;
    code: string;
    image: string;
    volume: string;
    oldPrice?: number;
    price: number;
    quantity: number;
}

export default function CartPage() {
    const [cart, setCart] = useState<CartItem[]>([
        {
            id: 1,
            brand: "GUCCI",
            name: "Gucci Flora Gorgeous Magnolia",
            code: "110100204179",
            image: "/products/p4.jpg",
            volume: "Eau de Parfum 100ml Tester",
            oldPrice: 3520000,
            price: 3300000,
            quantity: 2,
        },
        {
            id: 2,
            brand: "GUCCI",
            name: "Gucci Flora Gorgeous Orchid Eau de Parfum",
            code: "110100204813",
            image: "/products/p4.jpg",
            volume: "Eau de Parfum 100ml",
            oldPrice: 3950000,
            price: 3880000,
            quantity: 1,
        },
        {
            id: 3,
            brand: "MOSCHINO",
            name: "Moschino Toy 2 Mini Size",
            code: "110100202865",
            image: "/products/p4.jpg",
            volume: "Mini size",
            oldPrice: 430000,
            price: 380000,
            quantity: 1,
        },
        {
            id: 4,
            brand: "VERSACE",
            name: "Versace Bright Crystal Absolu",
            code: "110100200657",
            image: "/products/p4.jpg",
            volume: "Eau de Parfum 90ml",
            oldPrice: 2810000,
            price: 2500000,
            quantity: 1,
        },
    ]);

    const handleChangeQty = (id: number, type: "inc" | "dec") => {
        setCart((prev) =>
            prev.map((item) =>
                item.id === id
                    ? {
                        ...item,
                        quantity: Math.max(1, type === "inc" ? item.quantity + 1 : item.quantity - 1),
                    }
                    : item
            )
        );
    };

    const handleRemove = (id: number) => {
        setCart((prev) => prev.filter((item) => item.id !== id));
    };

    const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const shipping = 0;
    const total = subtotal + shipping;

    return (
        <div className="container mx-auto p-4 text-[var(--color-text)] text-[var(--color-text)]">
            <h1 className="text-2xl font-semibold mb-6">Giỏ hàng ({cart.length} sản phẩm)</h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* LEFT: Product list */}
                <div className="lg:col-span-2 space-y-4">
                    {cart.map((item) => (
                        <div
                            key={item.id}
                            className="flex flex-col sm:flex-row gap-4 border-b border-[var(--color-border)] pb-4 last:border-0"
                        >
                            <div className="w-28 h-28 flex-shrink-0">
                                <Image
                                    src={item.image}
                                    alt={item.name}
                                    width={120}
                                    height={120}
                                    className="w-full h-full object-cover rounded-md"
                                />
                            </div>

                            <div className="flex-1">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <p className="font-bold uppercase text-sm">{item.brand}</p>
                                        <p className="font-medium">{item.name}</p>
                                        <p className="text-gray-500 text-sm">Mã hàng: {item.code}</p>
                                        <p className="text-sm mt-1">{item.volume}</p>
                                    </div>

                                    <button
                                        onClick={() => handleRemove(item.id)}
                                        className="text-gray-400 hover:text-red-500"
                                    >
                                        <Trash2 size={18} />
                                    </button>
                                </div>

                                <div className="flex items-center justify-between mt-2">
                                    <div className="flex items-center gap-3">
                                        <span className="text-gray-500 text-sm">Số lượng</span>
                                        <div className="flex items-center border border-[var(--color-border)] rounded-md">
                                            <button
                                                onClick={() => handleChangeQty(item.id, "dec")}
                                                className="px-2 py-1 text-gray-600 hover:bg-gray-100"
                                            >
                                                –
                                            </button>
                                            <span className="px-3 select-none">{item.quantity}</span>
                                            <button
                                                onClick={() => handleChangeQty(item.id, "inc")}
                                                className="px-2 py-1 text-gray-600 hover:bg-gray-100"
                                            >
                                                +
                                            </button>
                                        </div>
                                    </div>

                                    <div className="text-right">
                                        {item.oldPrice && (
                                            <p className="text-sm line-through text-gray-400">
                                                {item.oldPrice.toLocaleString()}₫
                                            </p>
                                        )}
                                        <p className="text-red-600 font-semibold">
                                            {item.price.toLocaleString()}₫
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* RIGHT: Summary */}
                <div className="border border-[var(--color-border)] rounded-lg p-5 h-fit bg-[var(--color-bg-white)]">
                    <div className="flex justify-between mb-3">
                        <span className="font-medium">Tạm tính:</span>
                        <span>{subtotal.toLocaleString()}₫</span>
                    </div>

                    <div className="flex justify-between mb-3 border-[var(--color-border)] border-b pb-3">
                        <span className="font-medium">Phí vận chuyển:</span>
                        <span>{shipping === 0 ? "Miễn phí" : `${1}`}</span>
                    </div>

                    <div className="flex justify-between text-lg font-semibold text-red-600 mb-5">
                        <span>Tổng:</span>
                        <span>{total.toLocaleString()}₫</span>
                    </div>

                    <div className="flex flex-col gap-3">
                        <div className="flex border border-[var(--color-border)] rounded-md overflow-hidden">
                            <input
                                type="text"
                                placeholder="Mã giảm giá"
                                className="flex-1 px-3 py-2 outline-none text-sm"
                            />
                            <button className="bg-gray-100 px-3 text-sm font-medium hover:bg-gray-200">
                                Sử dụng
                            </button>
                        </div>

                        <button className="bg-red-600 text-white w-full py-3 rounded-md font-medium hover:bg-red-700 transition">
                            Thanh toán
                        </button>
                    </div>

                    <Link
                        href="/collections/all"
                        className="block text-center text-sm hover:underline mt-4"
                    >
                        Tiếp tục mua hàng →
                    </Link>
                </div>
            </div>
        </div>
    );
}
