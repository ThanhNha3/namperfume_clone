"use client";

import React from "react";
import { useWindowSize } from "@/hooks/useWindowSize";
import Header from "./Header";
import HeaderMobile from "./HeaderMobile";

export default function HandleHeaderDisplay() {
    const width = useWindowSize();

    return (
        <React.Fragment>
            {width >= 1024 ? <Header /> : <HeaderMobile />}
        </React.Fragment>
    );
}