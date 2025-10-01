"use client";

import { useState, useEffect } from "react";

import { useWindowSize } from "@/hooks/useWindowSize";
import { WINDOW_SIZES } from "@/constants/common";
import {
  PromoSlider,
  SectionBrandList,
  SectionDataList,
  CategoryList,
  AboutNamPerfume,
} from "@/components/home";

import {
  ProductCard,
  ProductSkeleton,
  MediaCard,
  VideoCardSkeleton,
} from "@/components/common";

import { I_Product } from "@/types/product";
import { SectionMediaItem } from "@/types/media";

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

const DEAL_THOM_PRODUCTS = [
  {
    id: 1,
    thumbnail: "/products/p1.jpg",
    name: "Nước hoa Dior Sauvage EDP",
    title: "Nước hoa Dior Sauvage EDP",
    subtitle: "100ml - Eau de Parfum",
    priceRange: "3.200.000₫",
    badges: ["Yêu thích", "Bán chạy"],
    sizes: [{
      id: 1, label: "50ml", price: 2200000
    }, {
      id: 2, label: "100ml", price: 3200000
    }],
  },
]

const NEW_ARRIVAL_PRODUCTS = [
  {
    id: 1,
    thumbnail: "/products/p2.jpg",
    name: "Nước hoa Chanel Bleu De Chanel EDT",
    title: "Nước hoa Chanel Bleu De Chanel EDT",
    subtitle: "100ml - Eau de Toilette",
    priceRange: "2.800.000₫",
    badges: ["Mới"],
    sizes: [{
      id: 1, label: "50ml", price: 2200000
    }, {
      id: 2, label: "100ml", price: 3200000
    }],
  },
]

const BEST_SELLER_PRODUCTS = [
  {
    id: 1,
    thumbnail: "/products/p3.jpg",
    name: "Nước hoa Versace Eros Pour Homme",
    title: "Nước hoa Versace Eros Pour Homme",
    subtitle: "100ml - Eau de Toilette",
    priceRange: "2.500.000₫",
    badges: ["Bán chạy"],
    sizes: [{
      id: 1, label: "50ml", price: 2200000
    }, {
      id: 2, label: "100ml", price: 3200000
    }],
  },
]

const MINI_TRAVEL_SIZE_PRODUCTS = [
  {
    id: 1,
    thumbnail: "/products/p4.jpg",
    name: "Nước hoa Gucci Guilty Pour Homme",
    title: "Nước hoa Gucci Guilty Pour Homme",
    subtitle: "90ml - Eau de Toilette",
    priceRange: "2.700.000₫",
    badges: ["Yêu thích"],
    sizes: [{
      id: 1, label: "50ml", price: 2200000
    }, {
      id: 2, label: "100ml", price: 3200000
    }],
  },
]

const BODYCARE_HOMECARE_PRODUCTS = [
  {
    id: 1,
    thumbnail: "/products/p5.jpg",
    name: "Sữa tắm Bath & Body Works",
    title: "Sữa tắm Bath & Body Works",
    subtitle: "295ml - Shower Gel",
    priceRange: "350.000₫",
    badges: ["Yêu thích"],
    sizes: [{
      id: 1, label: "50ml", price: 2200000
    }, {
      id: 2, label: "100ml", price: 3200000
    }],
  },
]

const GIFTSET_PRODUCTS = [
  {
    id: 1,
    thumbnail: "/products/p6.jpg",
    name: "Giftset Nước hoa Dior",
    title: "Giftset Nước hoa Dior",
    subtitle: "Bao gồm 3 món",
    priceRange: "4.500.000₫",
    badges: ["Yêu thích", "Bán chạy"],
    sizes: [{
      id: 1, label: "50ml", price: 2200000
    }, {
      id: 2, label: "100ml", price: 3200000
    }],
  },
]

const BANNER_CATEGORY = [
  { id: 1, name: "Nước hoa nam", url: "/banners/banner-nam-desk.jpg" },
  { id: 2, name: "Nước hoa nữ", url: "/banners/banner-nu-desk.jpg" },
  { id: 3, name: "Nước hoa niche", url: "/banners/banner-niche-desk.jpg" },
]

type DummyData = Record<
  "dealThom" | "newArrival" | "bestSeller" | "miniTravelSize" | "bodycareHomecare" | "giftset",
  I_Product[]
>;

const NAMPERFUME_TV = [
  {
    id: 1,
    thumbnail: "https://i.ytimg.com/vi/3aDs24YQTKo/mqdefault.jpg",
    link: "https://www.youtube.com/watch?v=3aDs24YQTKo",
    title: "Những lần hiếm hoi mà diễn viên không phải diễn 🫣 #cuahangvuive #nuochoa #xuhuong #fyp #namperfume",
    views: 1000
  },
  {
    id: 2,
    thumbnail: "https://i.ytimg.com/vi/xh0pQQqbfHI/mqdefault.jpg",
    link: "https://www.youtube.com/watch?v=xh0pQQqbfHI",
    title: `💘Tại sao nước hoa lại có thế "gây thương nhớ"`,
    views: 2000
  },
  {
    id: 3,
    thumbnail: "https://i.ytimg.com/vi/3ttq78vGP9o/mqdefault.jpg",
    link: "https://www.youtube.com/watch?v=3ttq78vGP9o",
    title: "Mình vô thẳng vấn đề luôn đc hong ạ? 😌 #khomathom #fypシ゚ #nuochoa #namperfume #shorts #videoshort",
    views: 3234
  },
  {
    id: 4,
    thumbnail: "https://i.ytimg.com/vi/CwiM9b5BuZQ/mqdefault.jpg",
    link: "https://www.youtube.com/watch?v=CwiM9b5BuZQ",
    title: "2 đứa nó chưa từng hỏi Cô Ba Oanh có muốn hay ko😒#khomathom #nuochoa #namperfume #shorts #videoshort",
    views: 3393
  }
]

const NMAGAZINE = [
  {
    id: 1,
    thumbnail: "https://file.hstatic.net/1000340570/article/banner-thuong-hieu-lattafa_37643b6cd970492ab353b44e15a6ad7e.jpeg",
    link: "/",
    title: "LATTAFA",
  },
  {
    id: 2,
    thumbnail: "https://file.hstatic.net/1000340570/article/kajal_c7b2b434926442468c73a8039d41e8cd.jpg",
    link: "/",
    title: `KAJAH`,
  },
  {
    id: 3,
    thumbnail: "https://file.hstatic.net/1000340570/article/z5579431254972_ef70cc6ef78fa5754d14e9bea82b11a9_86d749ee72ae4f1dae664531022e9111.jpg",
    link: "/",
    title: "GRITTI",
  },
  {
    id: 4,
    thumbnail: "https://file.hstatic.net/1000340570/article/zaroff-banner-thuong-hieu_9824109c0f914447a2f064817078e88f.jpg",
    link: "/",
    title: "ZAROFF",
  },
]


export default function Home() {
  // STATES
  const [slides, setSlides] = useState(slidesOnDesktop);

  const [dummyDatas, setDummyDatas] = useState<DummyData>({
    dealThom: DEAL_THOM_PRODUCTS,
    newArrival: NEW_ARRIVAL_PRODUCTS,
    bestSeller: BEST_SELLER_PRODUCTS,
    miniTravelSize: MINI_TRAVEL_SIZE_PRODUCTS,
    bodycareHomecare: BODYCARE_HOMECARE_PRODUCTS,
    giftset: GIFTSET_PRODUCTS,
  })

  // HOOKS
  const width = useWindowSize();
  useEffect(() => {
    if (width < WINDOW_SIZES.laptop) {
      setSlides(slidesOnMobile);
    }
    if (width >= WINDOW_SIZES.laptop) {
      setSlides(slidesOnDesktop);
    }
  }, [width])

  useEffect(() => {
    setDummyDatas((prev) => {
      const newData = { ...prev };

      (Object.keys(prev) as (keyof typeof prev)[]).forEach((key) => {
        const original = prev[key];
        const baseItem = original[0];
        newData[key] = Array.from({ length: 10 }, (_, index) => ({
          ...baseItem,
          id: index + 1,
        }));
      });

      return newData;
    });
  }, []);

  return (
    <div>
      <div className="h-[400px] lg:h-[650px]">
        <PromoSlider isShowIndicator={true} slides={slides} />
      </div>
      <div className="container mx-auto px-4 lg:px-0 flex flex-col gap-6 my-8">
        <SectionBrandList title="Thương hiệu" items={brands} viewMoreLink="/brands" />
        <SectionDataList title="Deal thơm" items={dummyDatas.dealThom} viewMoreLink="/products" SkeletonComponentUI={ProductSkeleton} ItemComponentUI={ProductCard} />
        <SectionDataList title="New Arrivals" items={dummyDatas.newArrival} viewMoreLink="/products" SkeletonComponentUI={ProductSkeleton} ItemComponentUI={ProductCard} />
        <SectionDataList title="Best Sellers" items={dummyDatas.bestSeller} viewMoreLink="/products" SkeletonComponentUI={ProductSkeleton} ItemComponentUI={ProductCard} />
        <CategoryList items={BANNER_CATEGORY} />
        <SectionDataList title="Mini Travel Size" items={dummyDatas.miniTravelSize} viewMoreLink="/products" SkeletonComponentUI={ProductSkeleton} ItemComponentUI={ProductCard} />
        <SectionDataList title="Giftset" items={dummyDatas.giftset} viewMoreLink="/products" SkeletonComponentUI={ProductSkeleton} ItemComponentUI={ProductCard} />
        <SectionDataList title="Bodycare & Homecare" items={dummyDatas.bodycareHomecare} viewMoreLink="/products" SkeletonComponentUI={ProductSkeleton} ItemComponentUI={ProductCard} />
        <SectionDataList title="namperfume TV" items={NAMPERFUME_TV} viewMoreLink="/videos" SkeletonComponentUI={VideoCardSkeleton} ItemComponentUI={MediaCard as React.ComponentType<{ item: SectionMediaItem }>} />
        <SectionDataList title="Nmagazine" items={NMAGAZINE} viewMoreLink="/videos" SkeletonComponentUI={VideoCardSkeleton} ItemComponentUI={MediaCard as React.ComponentType<{ item: SectionMediaItem }>} />
      </div>
      <AboutNamPerfume />
    </div>
  );
}
