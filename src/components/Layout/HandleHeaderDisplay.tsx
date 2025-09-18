"use client";

import React from "react";
import { useWindowSize } from "@/hooks/useWindowSize";
import Header from "./Header";
import HeaderMobile from "./HeaderMobile";
import { WINDOW_SIZES } from "@/constants/common";

export default function HandleHeaderDisplay() {
    const width = useWindowSize();

    return (
        <React.Fragment>
            {width >= WINDOW_SIZES.laptop ? <Header /> : <HeaderMobile />}
        </React.Fragment>
    );
}