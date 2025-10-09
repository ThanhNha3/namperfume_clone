"use client"

import { useState } from "react"
import { Edit, Save, X } from "lucide-react"

export function AccountForm() {
    const [isEditing, setIsEditing] = useState(false)

    const [form, setForm] = useState({
        lastName: "Nguyễn",
        firstName: "Nhã Thanh",
        email: "fimdoverwatch2003@gmail.com",
        phone: "0912345678",
        day: "15",
        month: "03",
        year: "1995",
        gender: "male",
    })

    const handleChange = (e: any) => {
        const { name, value } = e.target
        setForm({ ...form, [name]: value })
    }

    return (
        <div className="flex items-start justify-center shadow-lg">
            <div className="bg-white w-full max-w-4xl rounded-md shadow-sm p-8">
                <div className="flex justify-between items-center border-b border-[var(--color-border)] pb-4 mb-6">
                    <h2 className="text-lg font-semibold text-gray-800">
                        {isEditing ? "Chỉnh Sửa Thông Tin Cá Nhân" : "Thông Tin Cá Nhân"}
                    </h2>
                </div>

                <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Họ */}
                    <div className="col-span-2 md:col-span-1">
                        <label className="text-sm text-gray-600">Họ</label>
                        {isEditing ? (
                            <input
                                name="lastName"
                                value={form.lastName}
                                onChange={handleChange}
                                className="w-full border-b border-[var(--color-border)] focus:outline-none py-1"
                            />
                        ) : (
                            <p className="py-1 text-gray-800 font-medium">{form.lastName}</p>
                        )}
                    </div>

                    {/* Tên */}
                    <div className="col-span-2 md:col-span-1">
                        <label className="text-sm text-gray-600">Tên</label>
                        {isEditing ? (
                            <input
                                name="firstName"
                                value={form.firstName}
                                onChange={handleChange}
                                className="w-full border-b border-[var(--color-border)] focus:outline-none py-1"
                            />
                        ) : (
                            <p className="py-1 text-gray-800 font-medium">{form.firstName}</p>
                        )}
                    </div>

                    {/* Email */}
                    <div className="col-span-2 md:col-span-1">
                        <label className="text-sm text-gray-600">Email</label>
                        {isEditing ? (
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                className="w-full border-b border-[var(--color-border)] focus:outline-none py-1"
                            />
                        ) : (
                            <p className="py-1 text-gray-800 font-medium">{form.email}</p>
                        )}
                    </div>

                    {/* Số điện thoại */}
                    <div className="col-span-2 md:col-span-1">
                        <label className="text-sm text-gray-600">Số điện thoại</label>
                        {isEditing ? (
                            <input
                                name="phone"
                                value={form.phone}
                                onChange={handleChange}
                                className="w-full border-b border-[var(--color-border)] focus:outline-none py-1"
                            />
                        ) : (
                            <p className="py-1 text-gray-800 font-medium">{form.phone}</p>
                        )}
                    </div>

                    {/* Ngày sinh */}
                    <div className="col-span-2">
                        {isEditing ? (
                            <div className="flex gap-6">
                                {/* Ngày */}
                                <div className="flex flex-col">
                                    <label className="text-xs text-gray-500 mb-1">Ngày</label>
                                    <select
                                        name="day"
                                        value={form.day}
                                        onChange={handleChange}
                                        className="border px-2 py-1 rounded border-[var(--color-border)] focus:outline-none"
                                    >
                                        {[...Array(31)].map((_, i) => (
                                            <option key={i} value={i + 1}>
                                                {i + 1}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                {/* Tháng */}
                                <div className="flex flex-col">
                                    <label className="text-xs text-gray-500 mb-1">Tháng</label>
                                    <select
                                        name="month"
                                        value={form.month}
                                        onChange={handleChange}
                                        className="border px-2 py-1 rounded border-[var(--color-border)] focus:outline-none"
                                    >
                                        {[...Array(12)].map((_, i) => (
                                            <option key={i} value={i + 1}>
                                                {i + 1}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                {/* Năm */}
                                <div className="flex flex-col">
                                    <label className="text-xs text-gray-500 mb-1">Năm</label>
                                    <select
                                        name="year"
                                        value={form.year}
                                        onChange={handleChange}
                                        className="border px-2 py-1 rounded border-[var(--color-border)] focus:outline-none"
                                    >
                                        {Array.from({ length: 60 }, (_, i) => 2024 - i).map((y) => (
                                            <option key={y} value={y}>
                                                {y}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                        ) : (
                            <p className="py-1 text-gray-800 font-medium">
                                {`${form.day}/${form.month}/${form.year}`}
                            </p>
                        )}
                    </div>
                    {/* Giới tính */}
                    <div className="col-span-2">
                        <label className="text-sm text-gray-600 block mb-1">Giới tính</label>
                        {isEditing ? (
                            <div className="flex gap-6">
                                {["male", "female", "other"].map((g) => (
                                    <label key={g} className="flex items-center gap-2 text-sm">
                                        <input
                                            type="radio"
                                            name="gender"
                                            value={g}
                                            checked={form.gender === g}
                                            onChange={handleChange}
                                        />
                                        {g === "male" ? "Nam" : g === "female" ? "Nữ" : "Khác"}
                                    </label>
                                ))}
                            </div>
                        ) : (
                            <p className="py-1 text-gray-800 font-medium">
                                {form.gender === "male"
                                    ? "Nam"
                                    : form.gender === "female"
                                        ? "Nữ"
                                        : "Khác"}
                            </p>
                        )}
                    </div>
                </form>
                {!isEditing ? (
                    <button
                        onClick={() => setIsEditing(true)}
                        className="flex mt-4 items-center gap-2 text-sm text-white bg-red-600 px-4 py-2 rounded hover:bg-red-700"
                    >
                        <Edit size={16} />
                        Chỉnh sửa
                    </button>
                ) : (
                    <div className="flex gap-3 mt-4">
                        <button
                            onClick={() => setIsEditing(false)}
                            className="flex items-center gap-2 text-sm border px-4 py-2 rounded hover:bg-gray-100"
                        >
                            <X size={16} />
                            Hủy bỏ
                        </button>
                        <button
                            onClick={() => setIsEditing(false)}
                            className="flex items-center gap-2 text-sm bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
                        >
                            <Save size={16} />
                            Cập nhật
                        </button>
                    </div>
                )}
            </div>
        </div>
    )
}
