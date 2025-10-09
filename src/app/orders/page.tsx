"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const orders = [
    {
        id: "DH001",
        status: "Đã giao",
        productName: "Gucci Flora Gorgeous Jasmine",
        image: "/products/p1.jpg",
        quantity: 1,
        total: "2.350.000₫",
        date: "12/09/2025",
    },
    {
        id: "DH002",
        status: "Đang xử lý",
        productName: "Dior Sauvage Eau de Toilette",
        image: "/products/p1.jpg",
        quantity: 2,
        total: "4.200.000₫",
        date: "15/09/2025",
    },
    {
        id: "DH003",
        status: "Đang giao hàng",
        productName: "YSL Libre Intense",
        image: "/products/p1.jpg",
        quantity: 1,
        total: "2.850.000₫",
        date: "18/09/2025",
    },
    {
        id: "DH004",
        status: "Đã hủy",
        productName: "Chanel Chance Eau Tendre",
        image: "/products/p1.jpg",
        quantity: 1,
        total: "2.750.000₫",
        date: "20/09/2025",
    },
];

export default function OrdersPage() {
    const [activeTab, setActiveTab] = useState("Đang xử lý");

    const filteredOrders = orders.filter((o) => o.status === activeTab);

    const statusTabs = [
        { label: "Đang xử lý", color: "text-blue-600" },
        { label: "Đang giao hàng", color: "text-yellow-600" },
        { label: "Đã giao", color: "text-green-600" },
        { label: "Đã hủy", color: "text-red-600" },
    ];

    return (
        <div className="max-w-5xl mx-auto px-4 py-8 text-[var(--color-text-dark)]">
            <h1 className="text-2xl font-semibold mb-6 text-[var(--color-text-dark)]">
                Đơn hàng của tôi
            </h1>

            {/* Tabs */}
            <div className="flex gap-3 mb-8 overflow-x-auto">
                {statusTabs.map((tab) => (
                    <button
                        key={tab.label}
                        onClick={() => setActiveTab(tab.label)}
                        className={`px-4 py-2 border rounded-full transition-all ${activeTab === tab.label
                            ? ``
                            : "text-gray-500 border-gray-200 hover:border-[var(--color-primary)] hover:cursor-pointer"
                            }`}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            {/* Order List */}
            {filteredOrders.length > 0 ? (
                <div className="space-y-4">
                    {filteredOrders.map((order) => (
                        <div
                            key={order.id}
                            className="border border-gray-200 rounded-lg p-4 flex justify-between items-center transition-shadow hover:cursor-pointer"
                        >
                            <div className="flex items-center gap-4">
                                <Image
                                    src={order.image}
                                    alt={order.productName}
                                    width={80}
                                    height={80}
                                    className="rounded-md object-cover"
                                />
                                <div>
                                    <p className="font-medium">{order.productName}</p>
                                    <p className="text-sm text-gray-500">
                                        Số lượng: {order.quantity} • Ngày đặt: {order.date}
                                    </p>
                                </div>
                            </div>

                            <div className="text-right">
                                <p className="font-semibold text-[var(--color-text-dark)]">
                                    {order.total}
                                </p>
                                <button className="text-[var(--color-accent-gold)] text-sm mt-1 hover:underline"
                                    onClick={() => {
                                        
                                     }}
                                >
                                    <Link href={`/order-detail/${order.productName}`}>
                                        Xem chi tiết
                                    </Link>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-gray-500 text-center mt-10">
                    Hiện chưa có đơn hàng ở trạng thái này.
                </p>
            )}
        </div>
    );
}
