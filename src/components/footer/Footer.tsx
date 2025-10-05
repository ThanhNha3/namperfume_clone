"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Mail,
  Phone,
  Facebook,
  Instagram,
  Youtube,
  Music,
} from "lucide-react";

export default function Footer() {
  return (
    <footer
      className="bg-[var(--color-footer-bg)] text-[var(--color-footer-text)] text-sm px-6 py-10 md:px-12 lg:px-20"
      role="contentinfo"
    >
      <div className="container mx-auto">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Cột 1 - Giới thiệu */}
          <section aria-labelledby="footer-about">
            <h2 id="footer-about" className="font-semibold mb-4 text-sm uppercase">
              NamPerfume
            </h2>
            <ul className="space-y-2">
              <li><Link href="/gioi-thieu">Giới thiệu</Link></li>
              <li><Link href="/lien-he">Liên hệ</Link></li>
              <li><Link href="/tuyen-dung">Tuyển dụng</Link></li>
            </ul>

            <h3 className="font-semibold mt-6 mb-2 text-sm">Ngôn ngữ</h3>
            <ul className="space-y-2">
              <li>🇺🇸 Tiếng Anh</li>
              <li>🇻🇳 Tiếng Việt</li>
            </ul>
          </section>

          {/* Cột 2 - Hỗ trợ */}
          <section aria-labelledby="footer-support">
            <h2 id="footer-support" className="font-semibold mb-4 text-sm uppercase">
              Hỗ trợ
            </h2>
            <ul className="space-y-2">
              <li><Link href="/faq">Các câu hỏi thường gặp</Link></li>
              <li><Link href="/huong-dan-mua-hang">Cách thức mua hàng</Link></li>
              <li><Link href="/huong-dan-dat-hang">Hướng dẫn đặt hàng</Link></li>
              <li><Link href="/van-chuyen">Phương thức vận chuyển</Link></li>
              <li><Link href="/thanh-toan">Phương thức thanh toán</Link></li>
              <li><Link href="/don-hang">Theo dõi đơn hàng</Link></li>
              <li><Link href="/chinh-sach-gia">Chính sách giá cả</Link></li>
              <li><Link href="/doi-tra">Chính sách đổi trả</Link></li>
              <li><Link href="/bao-mat">Chính sách bảo mật</Link></li>
            </ul>
          </section>

          {/* Cột 3 - Địa chỉ */}
          <section aria-labelledby="footer-locations">
            <h2 id="footer-locations" className="font-semibold mb-4 text-sm uppercase">
              Hệ thống cửa hàng
            </h2>
            <address className="not-italic space-y-2 leading-relaxed">
              <p>420/6 Lê Văn Sỹ, P14, Q3, TP.HCM</p>
              <p>1379-1381 Đường 3/2, P16, Q11, TP.HCM</p>
              <p>45-47 CMT8, P Bến Thành, Q1, TP.HCM</p>
              <p>366A18 Phan Văn Trị, P5, Q Gò Vấp, TP.HCM</p>
              <p>8 Nguyễn Gia Trí, P25, Q Bình Thạnh, TP.HCM</p>
              <p>252 Nguyễn Thị Thập, P Tân Quy, Q7, TP.HCM</p>
              <p>123-125 Võ Thị Sáu, P Thống Nhất, TP. Biên Hòa</p>
              <p>86 Mậu Thân, P An Hòa, Q Ninh Kiều, Cần Thơ</p>
            </address>
          </section>

          {/* Cột 4 - Theo dõi */}
          <section aria-labelledby="footer-follow">
            <h2 id="footer-follow" className="font-semibold mb-4 text-sm uppercase">
              Theo dõi chúng tôi
            </h2>

            <nav aria-label="Mạng xã hội" className="flex gap-4 mb-6">
              <Link href="https://instagram.com" aria-label="Instagram" target="_blank">
                <Instagram size={20} className="hover:opacity-80 transition-opacity" />
              </Link>
              <Link href="https://facebook.com" aria-label="Facebook" target="_blank">
                <Facebook size={20} className="hover:opacity-80 transition-opacity" />
              </Link>
              <Link href="https://youtube.com" aria-label="YouTube" target="_blank">
                <Youtube size={20} className="hover:opacity-80 transition-opacity" />
              </Link>
              <Link href="#" aria-label="Zing MP3" target="_blank">
                <Music size={20} className="hover:opacity-80 transition-opacity" />
              </Link>
            </nav>

            <h3 className="font-semibold mb-2 text-sm">Nơi mùi hương là bạn đồng hành</h3>
            <form
              className="flex mb-4"
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <input
                type="email"
                placeholder="Nhập email của bạn"
                className="flex-1 px-3 py-2  rounded-l bg-white text-black focus:outline-none"
                aria-label="Nhập email của bạn"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-[var(--color-footer-accent)] text-white  rounded-r hover:opacity-90 transition-opacity"
              >
                GỬI
              </button>
            </form>

            <p>
              GỌI ĐẶT MUA:{" "}
              <span className="inline-flex items-center gap-1">
                <Phone size={14} /> <strong>1900 0129</strong>
              </span>{" "}
              (9:00 - 21:00)
            </p>
          </section>
        </div>

        {/* Dòng dưới cùng */}
        <div className="mt-10 border-t border-[var(--color-footer-border)] pt-6 text-center  leading-relaxed">
          <Image
            src="/common/logo.svg"
            alt="NamPerfume Logo"
            width={120}
            height={30}
            className="mx-auto mb-2 object-contain"
            loading="lazy"
          />
          <p>Copyright 2013-2025 © Sonny Nguyen. All Rights Reserved.</p>
          <p>
            Cty TNHH NamPerfume | GPKD: 0316901314 - Ngày cấp: 09/06/2021 - Sở KHĐT TP.HCM
          </p>
          <p>
            Tầng 7, 19A Cộng Hòa, Tòa Nhà Scepta, P12, Q Tân Bình, TP.HCM
          </p>
        </div>
      </div>
    </footer>
  );
}
