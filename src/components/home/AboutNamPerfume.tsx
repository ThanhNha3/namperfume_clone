"use client";
import { JSX, useState } from "react";
import Link from "next/link";
import { Truck, Store, MessageCircle, Gift, RefreshCcw, ChevronRight, Shield, CreditCard } from "lucide-react";

import "@/styles/components/_aboutNamperfume.scss";

type TabKey = "store" | "online" | "freeship" | "gift" | "return" | "authentic" | "promotion" | "payment";

const tabs: { key: TabKey; label: string; icon: JSX.Element }[] = [
    { key: "store", label: "8 Cửa hàng toàn quốc", icon: <Store size={28} /> },
    { key: "online", label: "Tư vấn Online", icon: <MessageCircle size={28} /> },
    { key: "freeship", label: "Freeship toàn quốc", icon: <Truck size={28} /> },
    { key: "gift", label: "Dịch Vụ Quà tặng", icon: <Gift size={28} /> },
    { key: "return", label: "Đổi trả miễn phí", icon: <RefreshCcw size={28} /> },
    { key: "authentic", label: "100% Chính hãng", icon: <Shield size={28} /> },
    { key: "promotion", label: "Ưu đãi độc quyền", icon: <Gift size={28} /> },
    { key: "payment", label: "Giao dịch an toàn uy tín", icon: <CreditCard size={28} /> },
];

const contents: Record<TabKey, JSX.Element> = {
    store: (
        <section className="about__section">
            <h2 className="about__section__title">Hệ thống cửa hàng Namperfume</h2>
            <ul className="about__section__list">
                <li>420/6 Lê Văn Sỹ P.14, Q.3, TP. Hồ Chí Minh</li>
                <li>366A18 Phan Văn Trị, P.5, Q.Gò Vấp, TP. Hồ Chí Minh</li>
                <li>1379-1381 Đường 3/2, P.16, Q.11, TP. Hồ Chí Minh</li>
                <li>45-47 Cách Mạng Tháng 8, P.Bến Thành, Q.1, TP. Hồ Chí Minh</li>
                <li>8 Nguyễn Gia Trí, P.25, Q.Bình Thạnh, TP. Hồ Chí Minh</li>
                <li>252 Nguyễn Thị Thập, P.Tân Quy, Q.7, TP. Hồ Chí Minh</li>
                <li>123-125 Võ Thị Sáu, P.Thống Nhất, TP.Biên Hòa, Đồng Nai</li>
                <li>86 Mậu Thân, P.An Hòa, Q.Ninh Kiều, Cần Thơ</li>
            </ul>
            <div className="about__section__link">
                <Link href="/" className="text-xs flex items-center">
                    <span>Tìm hiểu thêm về cửa hàng</span>
                    <ChevronRight aria-hidden="true" />
                </Link>
            </div>
        </section>
    ),

    online: (
        <section className="about__section">
            <h2 className="about__section__title">Chuyên viên tư vấn nước hoa Namperfume</h2>
            <p className="about__section__highlight">
                Các chuyên viên tư vấn nước hoa của Namperfume luôn sẵn sàng hỗ trợ khách hàng qua hotline, tin nhắn website và email một cách nhanh nhất.
            </p>
            <div className="about__section__link">
                <Link href="/" className="text-xs flex items-center">
                    <span>Gọi ngay 19000129 / Chat với chúng tôi</span>
                    <ChevronRight aria-hidden="true" />
                </Link>
            </div>
        </section>
    ),

    freeship: (
        <section className="about__section">
            <h2 className="about__section__title">Ship nhanh miễn phí</h2>

            <h3 className="about__section__subtitle">TP. Hồ Chí Minh</h3>
            <p className="about__section__highlight">
                Đơn hàng sẽ được đóng gói cẩn thận và giao trong 2h nội thành (9h-21h).
            </p>

            <h3 className="about__section__subtitle">Toàn quốc</h3>
            <p className="about__section__highlight">
                Đơn hàng được đóng gói cẩn thận bằng nhiều lớp chống sốc kèm hộp đựng Namperfume dán tem niêm phong, đảm bảo an toàn sản phẩm trong quá trình vận chuyển từ 2-4 ngày.
            </p>

            <div className="about__section__link">
                <Link href="/" className="text-xs flex items-center">
                    <span>Liên hệ ngay</span>
                    <ChevronRight aria-hidden="true" />
                </Link>
            </div>
        </section>
    ),

    gift: (
        <section className="about__section">
            <h2 className="about__section__title">Gửi Gắm Sự Tận Tâm</h2>
            <p className="about__section__highlight">
                Namperfume cung cấp dịch vụ tư vấn hộp quà, viết thiệp và đóng gói để món quà của bạn trở nên thật ý nghĩa.
            </p>
            <div className="about__section__link">
                <Link href="/" className="text-xs flex items-center">
                    <span>Tìm hiểu thêm về quà tặng</span>
                    <ChevronRight aria-hidden="true" />
                </Link>
            </div>
        </section>
    ),

    return: (
        <section className="about__section">
            <h2 className="about__section__title">Đổi trả dễ dàng trong 7 ngày</h2>
            <p className="about__section__highlight">
                Với sản phẩm chưa bung seal và chưa sử dụng, bạn có thể đổi trả miễn phí trong vòng 7 ngày. Tìm hiểu thêm về quy trình đổi trả hàng hóa tại mục câu hỏi thường gặp.
            </p>
            <div className="about__section__link">
                <Link href="/" className="text-xs flex items-center">
                    <span>Tìm hiểu thêm về đổi trả</span>
                    <ChevronRight aria-hidden="true" />
                </Link>
            </div>
        </section>
    ),

    authentic: (
        <section className="about__section">
            <h2 className="about__section__title">Bạn biết là bạn có thể tin chúng tôi</h2>
            <p className="about__section__highlight">
                Cam Kết sản phẩm bán ra từ namperfume là hàng chính hãng 100%

            </p>
            <div className="about__section__link">
                <Link href="/" className="text-xs flex items-center">
                    <span>Tìm hiểu thêm</span>
                    <ChevronRight aria-hidden="true" />
                </Link>
            </div>
        </section>
    ),


    promotion: (
        <section className="about__section">
            <h2 className="about__section__title">Hãy là người đầu tiên được biết</h2>
            <p className="about__section__highlight">
                Nhiều hoạt động hợp tác cùng các thương hiệu danh tiếng và chương trình khuyến mại hấp dẫn chỉ dành riêng cho khách hàng của namperfume
            </p>
            <div className="about__section__link">
                <Link href="/" className="text-xs flex items-center">
                    <span>Đăng kí ngay</span>
                    <ChevronRight aria-hidden="true" />
                </Link>
            </div>
        </section>
    ),

    payment: (
        <section className="about__section">
            <h2 className="about__section__title">Phương thức thanh toán linh hoạt</h2>
            <p className="about__section__highlight">
                Giao dịch mua sắm tại namperfume luôn được đảm bảo an toàn về bảo mật thông tin, thuận tiện và uy tín về phương thức thanh toán
            </p>
            <p className="about__section__highlight">
                namperufme chấp nhận thanh toán bằng tiền mặt, chuyển khoản, các loại thẻ ATM, VISA, Master Card
            </p>
            <div className="about__section__link">
                <Link href="/" className="text-xs flex items-center">
                    <span>Tìm hiểu thêm</span>
                    <ChevronRight aria-hidden="true" />
                </Link>
            </div>
        </section>
    ),
};


export default function AboutNamPerfume() {
    const [activeTab, setActiveTab] = useState<TabKey>("store");

    return (
        <section className="about">
            <h1 className="about__title">Về namperfume</h1>

            <div className="about__tabs">
                {tabs.map((tab) => (
                    <button
                        key={tab.key}
                        onClick={() => setActiveTab(tab.key)}
                        className={`about__tab ${activeTab === tab.key ? "about__tab--active" : ""}`}
                    >
                        <div className="about__tab__icon">{tab.icon}</div>
                        <span className="about__tab__label text-xs">{tab.label}</span>
                    </button>
                ))}
            </div>
            <div className="about__content">{contents[activeTab]}</div>
        </section>
    );
}
