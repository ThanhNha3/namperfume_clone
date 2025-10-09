"use client"

import Footer from "@/components/footer/Footer"
import HandleHeaderDisplay from "@/components/header/HandleHeaderDisplay"
import { store } from "@/store/store"
import { Provider } from "react-redux"

export default function AppProvider({ children }: { children: React.ReactNode }) {
    return <Provider store={store}>
        <HandleHeaderDisplay />
        {children}
        <Footer />
    </Provider>

}