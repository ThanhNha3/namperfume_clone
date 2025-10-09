"use client";

import Image from "next/image";
import { ArrowLeft, Package, Truck, CheckCircle2, XCircle, Headphones } from "lucide-react";
import Link from "next/link";

export default function OrderDetailPage() {
  const order = {
    id: "DH001",
    status: "Đang giao hàng",
    date: "18/09/2025",
    customer: {
      name: "Nguyễn Văn A",
      phone: "0909 123 456",
      address: "123 Lê Lợi, Phường Bến Thành, Quận 1, TP.HCM",
    },
    payment: {
      method: "Thanh toán khi nhận hàng (COD)",
      shipping: "Giao hàng tiêu chuẩn",
    },
    items: [
      {
        id: 1,
        name: "Gucci Flora Gorgeous Jasmine",
        quantity: 1,
        price: 2350000,
        image: "/products/p1.jpg",
      },
      {
        id: 2,
        name: "YSL Libre Intense",
        quantity: 1,
        price: 2850000,
        image: "/products/p2.jpg",
      },
    ],
    shippingFee: 30000,
    discount: 0,
  };

  const getStatusColor = (status: any) => {
    switch (status) {
      case "Đang xử lý":
        return "text-blue-600";
      case "Đang giao hàng":
        return "text-yellow-600";
      case "Đã giao":
        return "text-green-600";
      case "Đã hủy":
        return "text-red-600";
      default:
        return "text-gray-500";
    }
  };

  const getStatusIcon = (status: any) => {
    switch (status) {
      case "Đang xử lý":
        return <Package size={20} className="text-blue-600" />;
      case "Đang giao hàng":
        return <Truck size={20} className="text-yellow-600" />;
      case "Đã giao":
        return <CheckCircle2 size={20} className="text-green-600" />;
      case "Đã hủy":
        return <XCircle size={20} className="text-red-600" />;
      default:
        return null;
    }
  };

  const total = order.items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 text-[var(--color-text-dark)]">
      {/* Back */}
      <div className="flex items-center mb-6">
        <Link
          href="/orders"
          className="flex items-center text-[var(--color-accent-gold)] hover:underline"
        >
          <ArrowLeft size={18} className="mr-1" /> Quay lại danh sách đơn hàng
        </Link>
      </div>

      {/* Header */}
      <div className="bg-white border border-[var(--color-border)] rounded-xl p-6 shadow-sm mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div>
          <h1 className="text-2xl font-semibold">Đơn hàng #{order.id}</h1>
          <p className="text-sm text-gray-500">Ngày đặt: {order.date}</p>
        </div>
        <div className="flex items-center gap-2 font-medium">
          {getStatusIcon(order.status)}
          <span className={`${getStatusColor(order.status)}`}>{order.status}</span>
        </div>
      </div>

      {/* Items */}
      <div className="bg-white border border-[var(--color-border)] rounded-xl shadow-sm p-4 sm:p-6 mb-8">
        <h2 className="font-semibold mb-4 text-lg">Sản phẩm</h2>
        <div className="divide-y divide-gray-200 dark:divide-gray-700">
          {order.items.map((item) => (
            <div
              key={item.id}
              className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-4"
            >
              <div className="flex items-center gap-4">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={80}
                  height={80}
                  className="rounded-md object-cover"
                />
                <div>
                  <p className="font-medium">{item.name}</p>
                  <p className="text-sm text-gray-500">Số lượng: {item.quantity}</p>
                </div>
              </div>
              <p className="font-semibold text-[var(--color-text-dark)]">
                {(item.price * item.quantity).toLocaleString("vi-VN")}₫
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Thông tin */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white border border-[var(--color-border)] rounded-xl shadow-sm p-6">
          <h2 className="font-semibold mb-3 text-lg">Thông tin giao hàng</h2>
          <p>{order.customer.name}</p>
          <p>{order.customer.phone}</p>
          <p>{order.customer.address}</p>
        </div>

        <div className="bg-white border border-[var(--color-border)] rounded-xl shadow-sm p-6">
          <h2 className="font-semibold mb-3 text-lg">Thanh toán & Vận chuyển</h2>
          <p>{order.payment.method}</p>
          <p className="text-sm text-gray-500 mt-1">{order.payment.shipping}</p>
        </div>
      </div>

      {/* Tổng tiền */}
      <div className="bg-gray-50 border border-[var(--color-border)] rounded-xl shadow-sm p-6">
        <h2 className="font-semibold mb-4 text-lg">Chi tiết thanh toán</h2>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span>Tạm tính</span>
            <span>{total.toLocaleString("vi-VN")}₫</span>
          </div>
          <div className="flex justify-between">
            <span>Phí vận chuyển</span>
            <span>{order.shippingFee.toLocaleString("vi-VN")}₫</span>
          </div>
          {order.discount > 0 && (
            <div className="flex justify-between text-green-600">
              <span>Giảm giá</span>
              <span>-{order.discount.toLocaleString("vi-VN")}₫</span>
            </div>
          )}
          <hr className="my-3 border-[var(--color-border)]" />
          <div className="flex justify-between font-semibold text-lg">
            <span>Tổng cộng</span>
            <span className="text-[var(--color-text-dark)]">
              {(total + order.shippingFee - order.discount).toLocaleString("vi-VN")}₫
            </span>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="mt-8 flex flex-col sm:flex-row justify-end gap-3">
        <button className="flex items-center justify-center gap-2 px-5 py-2 border rounded-lg hover:bg-gray-50 dark:hover:bg-[#2d2d2d] transition">
          <Headphones size={18} /> Liên hệ hỗ trợ
        </button>
        <button className="px-5 py-2 bg-[var(--color-primary)] text-white rounded-lg font-medium hover:opacity-90 transition">
          Đặt lại đơn này
        </button>
      </div>
    </div>
  );
}
