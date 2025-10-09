"use client"

import { MapPin, Package, Heart, LogOut, User } from "lucide-react"
interface AccountSidebarProps {
    activeTab: string;
    onTabChange: (tab: string) => void
}

export function AccountSidebar({ activeTab, onTabChange }: AccountSidebarProps) {

    const ACCOUNT_TABS = [
        { label: "Thông tin cá nhân", icon: User, value: "account" },
        { label: "Địa chỉ của tôi", icon: MapPin, value: "address" },
        { label: "Đơn hàng", icon: Package, value: "orders" },
        { label: "Sản phẩm yêu thích", icon: Heart, value: "wishlist" },
        { label: "Đăng xuất", icon: LogOut, value: "logout" },
    ]

    return (
        <aside className="bg-white rounded-lg p-6 h-fit text-[var(--color-text-dark)]">
            <h2 className="text-lg font-semibold mb-4 text-foreground">Tài khoản của tôi</h2>
            <nav className="space-y-2">
                {ACCOUNT_TABS.map((tab) => (
                    <button
                        key={tab.value}
                        onClick={() => {
                            onTabChange(tab.value)
                        }}
                        className={
                            `flex items-center gap-3 text-sm transition-colors py-2 w-full text-left p-2 rounded-md ${activeTab === tab.value ? "text-white bg-[var(--color-primary)]" : "text-muted-foreground hover:text-foreground"}`
                        }
                    >
                        <tab.icon className="h-4 w-4" />
                        {tab.label}
                    </button>
                ))}
            </nav>
        </aside>
    )
}
