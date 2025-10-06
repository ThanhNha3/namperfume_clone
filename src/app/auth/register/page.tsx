"use client";

import { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";
import Image from "next/image";

export default function RegisterPage() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);

    return (
        <div className="min-h-screen bg-white flex flex-col items-center text-[var(--color-text)]">
            {/* Logo */}
            <div className="py-6">
                <Link href="/">
                    <Image src="/common/logo.svg" alt="NamPerfume Logo" width={150} height={50} />
                </Link>
            </div>

            {/* Login Section */}
            <div className="w-full bg-[#3b3b3b] py-8 text-center text-white">
                <div className="max-w-[400px] mx-auto">
                    <p className="text-lg font-semibold mb-1">Đã là thành viên?</p>
                    <p className="text-sm mb-4">Đăng nhập để truy cập vào tài khoản của bạn</p>
                    <Link
                        href="/auth/login"
                        className="w-full inline-block bg-white text-[var(--color-text)] font-semibold px-6 p-2 rounded-sm text-sm hover:bg-gray-200 transition"
                    >
                        Đăng Nhập
                    </Link>
                </div>
            </div>

            {/* Register Form */}
            <div className="w-full max-w-md px-4 sm:px-6 py-8 sm:py-10">
                <h2 className="text-center text-xl font-semibold mb-6">Đăng Ký</h2>
                <p className="text-center text-sm mb-8">
                    Bạn là thành viên mới? Ưu đãi và quà tặng độc đáo đang chờ bạn
                </p>

                <form className="flex flex-col gap-4">
                    {/* Họ và tên */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label className="text-sm text-gray-700">Họ*</label>
                            <input
                                type="text"
                                className="border-b border-gray-300 w-full py-1 outline-none focus:border-gray-500"
                            />
                        </div>
                        <div>
                            <label className="text-sm text-gray-700">Tên*</label>
                            <input
                                type="text"
                                className="border-b border-gray-300 w-full py-1 outline-none focus:border-gray-500"
                            />
                        </div>
                    </div>

                    {/* Email */}
                    <div>
                        <label className="text-sm text-gray-700">Email*</label>
                        <input
                            type="email"
                            className="border-b border-gray-300 w-full py-1 outline-none focus:border-gray-500"
                        />
                    </div>

                    {/* Phone */}
                    <div>
                        <label className="text-sm text-gray-700">Phone*</label>
                        <input
                            type="tel"
                            className="border-b border-gray-300 w-full py-1 outline-none focus:border-gray-500"
                        />
                    </div>

                    {/* Mật khẩu */}
                    <div className="relative">
                        <label className="text-sm text-gray-700">Mật khẩu*</label>
                        <input
                            type={showPassword ? "text" : "password"}
                            className="border-b border-gray-300 w-full py-1 outline-none focus:border-gray-500 pr-8"
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-0 bottom-1 text-gray-500"
                        >
                            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                        </button>
                    </div>

                    {/* Nhập lại mật khẩu */}
                    <div className="relative">
                        <label className="text-sm text-gray-700">Nhập lại mật khẩu*</label>
                        <input
                            type={showConfirm ? "text" : "password"}
                            className="border-b border-gray-300 w-full py-1 outline-none focus:border-gray-500 pr-8"
                        />
                        <button
                            type="button"
                            onClick={() => setShowConfirm(!showConfirm)}
                            className="absolute right-0 bottom-1 text-gray-500"
                        >
                            {showConfirm ? <EyeOff size={18} /> : <Eye size={18} />}
                        </button>
                    </div>

                    {/* Ngày sinh */}
                    <div>
                        <label className="text-sm text-gray-700">Ngày sinh</label>
                        <input
                            type="date"
                            className="border-b border-gray-300 w-full py-1 outline-none focus:border-gray-500"
                        />
                    </div>

                    {/* Nút đăng ký */}
                    <button
                        type="submit"
                        className="bg-[var(--color-primary)] text-white py-2 mt-4 rounded-md hover:bg-red-700 transition font-semibold"
                    >
                        Đăng Ký
                    </button>

                    {/* Điều khoản */}
                    <p className="text-xs text-center mt-4 cursor-pointer">
                        Khi đăng ký, bạn đã đồng ý với{" "}
                        <Link href="/dieu-khoan" className="text-[var(--color-prima)] hover:underline">
                            điều khoản sử dụng và nội quy diễn đàn
                        </Link>
                        , nhận email thông báo từ{" "}
                        <span className="font-medium text-[var(--color-primary)] hover:underline">diễn đàn và namperfume</span>.
                    </p>
                </form>
            </div>
        </div>
    );
}
