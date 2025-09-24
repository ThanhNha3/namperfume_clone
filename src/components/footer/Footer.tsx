import { Mail, Phone, Facebook, Instagram, Youtube, Music } from "lucide-react";

export default function Footer() {
  return (
    <footer className="text-xs bg-[var(--color-footer-bg)] text-[var(--color-footer-text)] px-6 py-10 md:px-12 lg:px-20">
      <div className="container mx-auto">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Cột 1 */}
          <div>
            <h3 className="font-semibold mb-4">namperfume</h3>
            <ul className="space-y-2 text-xs">
              <li>Giới thiệu</li>
              <li>Liên hệ</li>
              <li>Tuyển dụng</li>
            </ul>
            <h3 className="font-semibold mt-6 mb-2">Ngôn ngữ</h3>
            <ul className="space-y-2 text-xs">
              <li>🇺🇸 Tiếng Anh</li>
              <li>🇻🇳 Tiếng Việt</li>
            </ul>
          </div>

          {/* Cột 2 */}
          <div>
            <h3 className="font-semibold mb-4">Hỗ trợ</h3>
            <ul className="space-y-2 text-xs">
              <li>Các câu hỏi thường gặp</li>
              <li>Cách thức mua hàng</li>
              <li>Hướng dẫn đặt hàng</li>
              <li>Phương thức vận chuyển</li>
              <li>Phương thức thanh toán</li>
              <li>Theo dõi đơn hàng</li>
              <li>Chính sách giá cả</li>
              <li>Chính sách đổi trả</li>
              <li>Chính sách bảo mật</li>
            </ul>
          </div>

          {/* Cột 3 */}
          <div>
            <h3 className="font-semibold mb-4">Địa chỉ cửa hàng</h3>
            <ul className="space-y-2 text-xs">
              <li>420/6 Lê Văn Sỹ, P14, Q3, TP.HCM</li>
              <li>1379-1381 Đường 3/2, P16, Q11, TP.HCM</li>
              <li>45-47 CMT8, P Bến Thành, Q1, TP.HCM</li>
              <li>366A18 Phan Văn Trị, P5, Q Gò Vấp, TP.HCM</li>
              <li>8 Nguyễn Gia Trí, P25, Q Bình Thạnh, TP.HCM</li>
              <li>252 Nguyễn Thị Thập, P Tân Quy, Q7, TP.HCM</li>
              <li>123-125 Võ Thị Sáu, P Thống Nhất, TP. Biên Hòa</li>
              <li>86 Mậu Thân, P An Hòa, Q Ninh Kiều, Cần Thơ</li>
            </ul>
          </div>

          {/* Cột 4 */}
          <div>
            <h3 className="font-semibold mb-4">Theo dõi chúng tôi</h3>
            <div className="flex gap-4 mb-6">
              <Instagram size={20} />
              <Facebook size={20} />
              <Youtube size={20} />
              <Music size={20} />
            </div>

            <h3 className="font-semibold mb-2">Nơi mùi hương là bạn đồng hành</h3>
            <div className="flex mb-4">
              <input
                type="email"
                placeholder="Nhập email của bạn"
                className="flex-1 px-3 py-2 text-xs rounded-l bg-white text-black focus:outline-none"
              />
              <button className="px-4 py-2 bg-[var(--color-footer-accent)] text-white text-xs rounded-r">
                GỬI
              </button>
            </div>

            <p className="text-xs">
              GỌI ĐẶT MUA: <Phone size={14} className="inline mx-1" /> 1900 0129
              (9:00 - 21:00)
            </p>
          </div>
        </div>

        {/* Dòng dưới cùng */}
        <div className="mt-10 border-t border-[var(--color-footer-border)] pt-6 text-xs">
          <p>
            Copyright 2013-2025 © Sonny Nguyen. All Rights Reserved.
          </p>
          <p>
            Cty TNHH namperfume | GPKD: 0316901314 - Ngày cấp: 09/06/2021 - Sở KHĐT TP.HCM
          </p>
          <p>
            Địa chỉ: Tầng 7, 19A Cộng Hòa, Tòa Nhà Scepta, P12, Q Tân Bình, TP.HCM
          </p>
        </div>
      </div>
    </footer>
  );
}
