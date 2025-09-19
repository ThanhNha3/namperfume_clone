"use client";

import React, { useEffect, useState } from "react";

import HeaderDesktop from "./HeaderDesktop";
import HeaderMobile from "./HeaderMobile";
import { useWindowSize } from "@/hooks/useWindowSize";
import { WINDOW_SIZES } from "@/constants/common";

export default function HandleHeaderDisplay() {
    const width = useWindowSize();
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) {
        // Tạm thời render empty để tránh mismatch
        return null;
    }

    return width >= WINDOW_SIZES.laptop ? <HeaderDesktop /> : <HeaderMobile />;
}
