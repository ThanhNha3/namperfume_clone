"use client"

import { MapPin, Package, Heart, LogOut, User } from "lucide-react"
interface AccountSidebarProps {
    activeTab: "account" | "orders" | "address"
    onTabChange: (tab: "account" | "orders" | "address") => void
}

export function AccountSidebar({ activeTab, onTabChange }: AccountSidebarProps) {
    return (
        <aside className="bg-white rounded-lg p-6 h-fit">
            <h2 className="text-lg font-semibold mb-4 text-foreground">Tài khoản của tôi</h2>
            <nav className="space-y-2">
                <button
                    onClick={() => onTabChange("account")}
                    className={
                        "flex items-center gap-3 text-sm transition-colors py-2 w-full text-left"
                    }
                >
                    <User className="h-4 w-4" />
                    Thông tin cá nhân
                </button>
                <button
                    onClick={() => onTabChange("address")}
                    className={
                        "flex items-center gap-3 text-sm transition-colors py-2 w-full text-left"
                    }
                >
                    <MapPin className="h-4 w-4" />
                    Địa chỉ của tôi
                </button>
                <button
                    onClick={() => onTabChange("orders")}
                    className={
                        "flex items-center gap-3 text-sm transition-colors py-2 w-full text-left"
                    }
                >
                    <Package className="h-4 w-4" />
                    Đơn hàng
                </button>
                <button className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors py-2 w-full text-left">
                    <Heart className="h-4 w-4" />
                    Sản phẩm yêu thích
                </button>
                <button className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors py-2 w-full text-left">
                    <LogOut className="h-4 w-4" />
                    Đăng xuất
                </button>
            </nav>
        </aside>
    )
}
