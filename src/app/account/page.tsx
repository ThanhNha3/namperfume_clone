"use client"

import { useState } from "react"
import { AccountSidebar } from "@/components/accountSidebar/AccountSidebar"
import { AccountForm } from "@/components/accountForm/AccountForm"

export default function AccountPage() {
    const [activeTab, setActiveTab] = useState<"account" | "orders" | "address">("account")

    return (
        <div className="min-h-screen text-[var(--color-text)]">
            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-4 gap-6">
                    <div className="hidden md:block col-span-1">
                        <AccountSidebar activeTab={activeTab} onTabChange={setActiveTab} />
                    </div>
                    <div className="col-span-4 md:col-span-3 mt-4">
                        {activeTab === "account" ? <AccountForm /> : <>Orders List</>}
                    </div>
                </div>
            </div>
        </div>
    )
}
