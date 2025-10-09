"use client";

import { useState } from "react";

export default function AddressPage() {
    const [addresses, setAddresses] = useState([
        {
            id: 1,
            name: "Nguyễn Văn A",
            phone: "0909123456",
            city: "Hồ Chí Minh",
            district: "Quận 1",
            address: "123 Lê Lợi, P. Bến Thành",
            type: "Nhà",
            isDefault: true,
        },
        {
            id: 2,
            name: "Trần Thị B",
            phone: "0909988776",
            city: "Hà Nội",
            district: "Hoàn Kiếm",
            address: "45 Hàng Bài",
            type: "Công ty",
            isDefault: false,
        },
    ]);

    const [showForm, setShowForm] = useState(false);

    const handleAdd = (newAddress: any) => {
        setAddresses([...addresses, { id: Date.now(), ...newAddress }]);
        setShowForm(false);
    };

    return (
        <div className="max-w-4xl mx-auto py-8 px-4 shadow-lg text-[var(--color-text-dark)]">
            {!showForm ? (
                <>
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-xl font-bold">Sổ địa chỉ</h2>
                        <button
                            onClick={() => setShowForm(true)}
                            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
                        >
                            + Thêm địa chỉ
                        </button>
                    </div>

                    <div className="space-y-4">
                        {addresses.map((addr) => (
                            <div
                                key={addr.id}
                                className="border border-[var(--color-border)] rounded-lg p-4 flex justify-between items-start"
                            >
                                <div>
                                    <p className="font-semibold">{addr.name}</p>
                                    <p className="text-sm text-gray-600">
                                        {addr.phone} | {addr.city}, {addr.district}
                                    </p>
                                    <p className="text-sm text-gray-700">{addr.address}</p>
                                    <p className="text-sm text-gray-500 mt-1">
                                        Loại: {addr.type}
                                    </p>
                                    {addr.isDefault && (
                                        <span className="inline-block mt-2 text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded">
                                            Địa chỉ mặc định
                                        </span>
                                    )}
                                </div>

                                <div className="flex flex-col items-end gap-2">
                                    <button className="text-blue-600 hover:underline text-sm">
                                        Sửa
                                    </button>
                                    <button className="text-red-500 hover:underline text-sm">
                                        Xóa
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </>
            ) : (
                <AddressForm onCancel={() => setShowForm(false)} onSubmit={handleAdd} />
            )}
        </div>
    );
}

// ------------------ FORM COMPONENT ------------------
function AddressForm({ onCancel, onSubmit }: { onCancel: () => void; onSubmit: (data: any) => void }) {
    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        city: "",
        district: "",
        address: "",
        type: "",
        isDefault: false,
    });

    const handleChange = (e: any) => {
        const { name, value, type, checked } = e.target;
        setForm({ ...form, [name]: type === "checkbox" ? checked : value });
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        onSubmit({
            name: `${form.lastName} ${form.firstName}`,
            phone: form.phone,
            city: form.city,
            district: form.district,
            address: form.address,
            type:
                form.type === "default"
                    ? "Địa chỉ mặc định"
                    : form.type === "home"
                        ? "Nhà"
                        : form.type === "company"
                            ? "Công ty"
                            : "Khác",
            isDefault: form.type === "default",
        });
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="max-w-3xl mx-auto bg-white border border-[var(--color-border)] rounded-lg p-6 space-y-5"
        >
            <h2 className="text-lg font-bold mb-2">Thêm địa chỉ mới</h2>

            {/* Họ & Tên */}
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <label className="block text-sm font-medium mb-1">Họ:</label>
                    <input
                        type="text"
                        name="lastName"
                        value={form.lastName}
                        onChange={handleChange}
                        placeholder="Họ"
                        className="w-full border-b border-[var(--color-border)] outline-none p-1"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium mb-1">Tên:</label>
                    <input
                        type="text"
                        name="firstName"
                        value={form.firstName}
                        onChange={handleChange}
                        placeholder="Tên"
                        className="w-full border-b border-[var(--color-border)] outline-none p-1"
                    />
                </div>
            </div>

            {/* Email & SĐT */}
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <label className="block text-sm font-medium mb-1">Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="Nhập Email"
                        className="w-full border-b border-[var(--color-border)] outline-none p-1"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium mb-1">Số điện thoại:</label>
                    <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="Nhập Số Điện Thoại"
                        className="w-full border-b border-[var(--color-border)] outline-none p-1"
                    />
                </div>
            </div>

            {/* Thành phố & Quận huyện */}
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <label className="block text-sm font-medium mb-1">Thành phố:</label>
                    <select
                        name="city"
                        value={form.city}
                        onChange={handleChange}
                        className="w-full border-b border-[var(--color-border)] outline-none p-1"
                    >
                        <option value="">-Chọn Tỉnh/Thành Phố-</option>
                        <option value="Hồ Chí Minh">Hồ Chí Minh</option>
                        <option value="Hà Nội">Hà Nội</option>
                        <option value="Đà Nẵng">Đà Nẵng</option>
                    </select>
                </div>
                <div>
                    <label className="block text-sm font-medium mb-1">Quận huyện:</label>
                    <select
                        name="district"
                        value={form.district}
                        onChange={handleChange}
                        className="w-full border-b border-[var(--color-border)] outline-none p-1"
                    >
                        <option value="">-Chọn Quận/Huyện-</option>
                        <option value="Quận 1">Quận 1</option>
                        <option value="Quận 3">Quận 3</option>
                        <option value="Quận 7">Quận 7</option>
                    </select>
                </div>
            </div>

            {/* Địa chỉ */}
            <div>
                <label className="block text-sm font-medium mb-1">Địa chỉ:</label>
                <input
                    type="text"
                    name="address"
                    value={form.address}
                    onChange={handleChange}
                    placeholder="Dòng địa chỉ"
                    className="w-full border-b border-[var(--color-border)] outline-none p-1"
                />
            </div>

            {/* Loại địa chỉ */}
            <div>
                <label className="block text-sm font-medium mb-2">Loại địa chỉ:</label>
                <div className="flex flex-wrap gap-4">
                    {["default", "home", "company", "other"].map((type) => (
                        <label key={type} className="flex items-center gap-1">
                            <input
                                type="radio"
                                name="type"
                                value={type}
                                checked={form.type === type}
                                onChange={handleChange}
                            />
                            {type === "default"
                                ? "Địa chỉ mặc định"
                                : type === "home"
                                    ? "Nhà"
                                    : type === "company"
                                        ? "Công ty"
                                        : "Khác"}
                        </label>
                    ))}
                </div>
            </div>

            {/* Nút hành động */}
            <div className="flex justify-center gap-4 pt-4">
                <button
                    type="submit"
                    className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700"
                >
                    HOÀN TẤT
                </button>
                <button
                    type="button"
                    onClick={onCancel}
                    className="border border-gray-400 px-6 py-2 rounded hover:bg-gray-100"
                >
                    Hủy Bỏ
                </button>
            </div>
        </form>
    );
}
