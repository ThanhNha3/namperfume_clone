import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Footer from "@/components/Layout/Footer";
import HandleHeaderDisplay from "@/components/Layout/HandleHeaderDisplay";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NamPerfume | Nước hoa chính hãng cao cấp",
  description:
    "NamPerfume mang đến bộ sưu tập nước hoa chính hãng, đa dạng thương hiệu quốc tế và cao cấp. Khám phá hương thơm phù hợp phong cách riêng của bạn.",
  keywords: [
    "NamPerfume",
    "nước hoa",
    "nước hoa nam",
    "nước hoa nữ",
    "nước hoa chính hãng",
    "nước hoa cao cấp",
    "mua nước hoa online"
  ],
  authors: [{ name: "Sonny Nguyen" }],
  openGraph: {
    title: "NamPerfume | Nước hoa chính hãng cao cấp",
    description:
      "Khám phá thế giới nước hoa chính hãng từ các thương hiệu nổi tiếng tại NamPerfume.",
    url: "https://namperfume.vn",
    siteName: "NamPerfume",
    images: [
      {
        url: "/images/og-banner.jpg",
        width: 1200,
        height: 630,
        alt: "NamPerfume Banner",
      },
    ],
    locale: "vi_VN",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <HandleHeaderDisplay />
        {children}
        <Footer />
      </body>
    </html>
  );
}
