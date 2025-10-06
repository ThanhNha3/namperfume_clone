"use client";

import { useState } from "react";
import { Eye, EyeOff, Facebook, Chrome } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function LoginPage() {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="flex flex-col min-h-screen bg-white text-[var(--color-text)]">
            {/* Logo */}
            <div className="flex justify-center py-6">
                <Link href="/">
                    <Image src="/common/logo.svg" alt="NamPerfume Logo" width={150} height={50} />
                </Link>
            </div>

            {/* Form */}
            <div className="flex-1 flex flex-col items-center justify-center px-6 py-8">
                <div className="w-full max-w-md">
                    <h2 className="text-center text-2xl font-semibold mb-6">Đăng Nhập</h2>

                    {/* Save login */}
                    <label className="flex items-center gap-2 text-sm mb-4 cursor-pointer">
                        <input type="checkbox" className="w-4 h-4 accent-[var(--color-primary)]" />
                        Lưu thông tin đăng nhập
                    </label>

                    {/* Email */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-1">
                            Email*:
                        </label>
                        <input
                            type="email"
                            placeholder="Nhập email"
                            className="w-full border-b border-gray-300 py-2 outline-none focus:border-[var(--color-primary)] transition-colors"
                        />
                    </div>

                    {/* Password */}
                    <div className="mb-2 relative">
                        <label className="block text-sm font-medium mb-1">
                            Mật khẩu*:
                        </label>
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="Nhập mật khẩu"
                            className="w-full border-b border-gray-300 py-2 outline-none focus:border-[var(--color-primary)] transition-colors pr-8"
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-0 bottom-2 text-gray-500"
                        >
                            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                        </button>
                    </div>

                    {/* Forgot password */}
                    <div className="text-right mb-6">
                        <Link
                            href="/forgot-password"
                            className="text-sm hover:underline"
                        >
                            Quên mật khẩu?
                        </Link>
                    </div>

                    {/* Login button */}
                    <button className="w-full bg-[var(--color-primary)] text-white py-2 rounded-md font-medium hover:bg-red-700 transition">
                        Đăng Nhập
                    </button>

                    {/* Login with */}
                    <div className="my-6 text-center text-[var(--subtext-color)] text-sm">
                        — Đăng nhập với —
                    </div>

                    <div className="space-y-3">
                        <button className="w-full flex items-center justify-center gap-2 border rounded-md py-2 hover:bg-gray-50">
                            <Chrome className="text-[var(--color-primary)]" size={18} />
                            Đăng Nhập Với Google
                        </button>
                        <button className="w-full flex items-center justify-center gap-2 border rounded-md py-2 hover:bg-gray-50">
                            <Facebook className="text-blue-600" size={18} />
                            Đăng Nhập Với Facebook
                        </button>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <div className="bg-[#3b3b3b] text-white text-center py-10 px-6">
                <h3 className="text-lg font-semibold mb-2">Thành viên mới?</h3>
                <p className="text-sm mb-4">
                    Trở thành thành viên của namperfume để nhận những ưu đãi và dịch vụ bất ngờ.
                </p>
                <Link
                    href="/auth/register"
                    className="inline-block bg-white text-black font-medium py-2 px-6 rounded-md hover:bg-gray-200 transition"
                >
                    Đăng Ký
                </Link>
            </div>
        </div>
    );
}
