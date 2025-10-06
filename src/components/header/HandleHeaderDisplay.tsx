"use client";

import React, { useEffect, useState } from "react";
import HeaderDesktop from "./HeaderDesktop";
import HeaderMobile from "./HeaderMobile";
import { useWindowSize } from "@/hooks/useWindowSize";
import { WINDOW_SIZES } from "@/constants/common";
import { usePathname } from "next/navigation";

export default function HandleHeaderDisplay() {
  const width = useWindowSize();
  const pathname = usePathname();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    // Tránh hydration mismatch
    return null;
  }

  // Ẩn header trên các trang auth và admin
  if (pathname.startsWith("/auth")) {
    return null;
  }

  return width >= WINDOW_SIZES.laptop ? <HeaderDesktop /> : <HeaderMobile />;
}
