export interface I_Product {
    id?: number;             // id sản phẩm (uuid hoặc slug)
    name?: string;           // tên sản phẩm
    gender?: "male" | "female" | "unisex"; // đối tượng dùng
    brand?: string;          // thương hiệu (Chanel, Dior,...)
    code?: string;         // mã sản phẩm
    type?: string;          // loại sản phẩm (nước hoa, sữa tắm,...)
    subType?: string;       // phân loại sản phẩm (EDP, EDT, Parfum...)
    shortDescription?: string;   // mô tả ngắn
    thumbnail?: string;          // link ảnh chính
    badges?: {
        id?: number;
        label?: string;
    }[];    // danh sách badge (["Yêu thích", "Bán chạy",...])
    sizes?: {
        id?: number;       // id size
        label?: string;    // nhãn size (10ml, 50ml, 100ml,...)
        price?: number;    // giá hiện tại
        oldPrice?: number; // giá cũ (nếu có)
        percentSale?: number; // phần trăm giảm giá (nếu có)
        tags?: string[]; // danh sách tag (["Yêu thích", "Bán chạy",...])
    }[];        // dung tích (ví dụ ["10ml", "50ml", "100ml"])
    rating?: number;        // điểm đánh giá trung bình (0–5)
    reviewsCount?: number;  // số lượng đánh giá
    priceRange?: string;   // khoảng giá (vd: "1.000.000đ - 2.000.000đ")
}

export interface I_ProductDetail extends I_Product {
    origin?: string;        // xuất xứ
    yearReleased?: number;  // năm phát hành
    fragranceFamily?: string; // nhóm hương (Woody, Floral,...)
    style?: string;         // phong cách (Thanh lịch, Năng động,...)
    description?: string;   // mô tả chi tiết
    images?: string[];     // danh sách link ảnh chi tiết
}