"use client";

import { useState, useEffect } from "react";

import PromoSlider from "@/components/home/PromoSlider";
import { WINDOW_SIZES } from "@/constants/common";
import { useWindowSize } from "@/hooks/useWindowSize";
import { SectionBrandList } from "@/components/home/SectionBrandList";

const brands = [
  { id: 1, name: "Gucci", image: "/brands/logo-brand-gucci.png" },
  { id: 2, name: "Jean Paul Gaultier", image: "/brands/logo-brand-jean-paul-gaultier.png" },
  { id: 3, name: "Narciso Rodriguez", image: "/brands/logo-brand-narciso-rodriguez.png" },
  { id: 4, name: "Giorgio Armani", image: "/brands/logo-brand-giorgio-armani.png" },
  { id: 5, name: "Paco Rabanne", image: "/brands/logo-brand-paco-rabanne.png" },
  { id: 6, name: "Calvin Klein", image: "/brands/logo-brand-calvin-klein.png" },
  { id: 7, name: "Versace", image: "/brands/logo-brand-versace.png" },
  { id: 8, name: "Burberry", image: "/brands/logo-brand-burberryx.png" },
  { id: 9, name: "Marc Jacobs", image: "/brands/logo-brand-marc-jacobss.png" },
  { id: 10, name: "Valentino", image: "/brands/logo-brand-valentino.png" },
  { id: 11, name: "Prada", image: "/brands/logo-brand-prada.png" },
  { id: 12, name: "Carolina Herrera", image: "/brands/logo-brand-carolina-herrera.png" },
  { id: 13, name: "Ralph Lauren", image: "/brands/logo-brand-ralph-lauren.png" },
  { id: 14, name: "Viktor & Rolf", image: "/brands/logo-brand-viktor-rolf.png" },
  { id: 15, name: "Lacoste", image: "/brands/logo-brand-lacoste.png" },
  { id: 16, name: "Chloé", image: "/brands/logo-brand-chloe.png" },
];

const slidesOnDesktop = [
  { id: 1, src: "/sliders/slideshow_1.jpg" },
  { id: 2, src: "/sliders/slideshow_2.jpg" },
  { id: 3, src: "/sliders/slideshow_3.jpg" },
  { id: 4, src: "/sliders/slideshow_4.jpg" },
];

const slidesOnMobile = [
  { id: 1, src: "/sliders/slideshow_mobile_1.jpg" },
  { id: 2, src: "/sliders/slideshow_mobile_2.jpg" },
  { id: 3, src: "/sliders/slideshow_mobile_3.jpg" },
  { id: 4, src: "/sliders/slideshow_mobile_4.jpg" },
];

export default function Home() {
  const [slides, setSlides] = useState(slidesOnDesktop);

  const width = useWindowSize();

  useEffect(() => {
    if (width < WINDOW_SIZES.laptop) {
      setSlides(slidesOnMobile);
    }
    if (width >= WINDOW_SIZES.laptop) {
      setSlides(slidesOnDesktop);
    }
  }, [width])

  return (
    <div>
      <div className="h-[400px] lg:h-[650px]">
        <PromoSlider isShowIndicator={true} slides={slides} />
      </div>
      <div className="container mx-auto px-4 lg:px-0">
        <SectionBrandList title="Thương hiệu" items={brands} viewMoreLink="/brands" />
      </div>
    </div>
  );
}
