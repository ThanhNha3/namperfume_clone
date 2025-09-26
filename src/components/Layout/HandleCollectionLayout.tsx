"use client";

import React, { useEffect, useState } from "react";

import { DesktopCollectionLayout } from "./DesktopCollectionLayout";
import { MobileCollectionLayout } from "./MobileCollectionLayout";

import { useWindowSize } from "@/hooks/useWindowSize";
import { WINDOW_SIZES } from "@/constants/common";

export default function HandleCollectionLayout({ collection }: { collection: any }) {
    const width = useWindowSize();
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) {
        return null;
    }

    return width >= WINDOW_SIZES.laptop ? <DesktopCollectionLayout collection={collection} /> : <MobileCollectionLayout collection={collection} />;
}
