"use client"

import { useState } from "react"
import { AccountSidebar } from "@/components/accountSidebar/AccountSidebar"
import { AccountForm } from "@/components/accountForm/AccountForm"
import OrderDetailPage from "../order-detail/[slug]/page"
import OrdersPage from "../orders/page"
import AddressPage from "../address/page"

export default function AccountPage() {
    const [activeTab, setActiveTab] = useState<string>("account")

    function handleTabChange(tab: string) {
        setActiveTab(tab)
    }

    function renderContent() {
        switch (activeTab) {
            case "account":
                return <AccountForm />
            case "orders":
                return <OrdersPage />
            case "order-detail":
                return <OrderDetailPage />
            case "address":
                return <AddressPage />
            default:
                return null
        }
    }

    return (
        <div className="min-h-screen text-[var(--color-text)]">
            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-4 gap-6">
                    <div className="hidden md:block col-span-1">
                        <AccountSidebar activeTab={activeTab} onTabChange={handleTabChange} />
                    </div>
                    <div className="col-span-4 md:col-span-3 mt-4">
                        {renderContent()}
                    </div>
                </div>
            </div>
        </div>
    )
}
