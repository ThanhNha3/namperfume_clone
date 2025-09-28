import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export interface Product {
  id?: string;             // id sản phẩm (uuid hoặc slug)
  name?: string;           // tên sản phẩm
  brand?: string;          // thương hiệu (Chanel, Dior,...)
  description?: string;   // mô tả chi tiết
  price?: number;          // giá gốc
  salePrice?: number;     // giá sale (nếu có)
  sizes?: string[];        // dung tích (ví dụ ["10ml", "50ml", "100ml"])
  image?: string;          // link ảnh chính
  images?: string[];      // list ảnh phụ (gallery)
  gender?: "male" | "female" | "unisex"; // đối tượng dùng
  type?: string;          // loại nước hoa (EDP, EDT, Parfum...)
  rating?: number;        // điểm đánh giá trung bình (0–5)
  reviewsCount?: number;  // số lượng đánh giá
  isBestSeller?: boolean; // gắn nhãn best seller
  isNew?: boolean;        // gắn nhãn sản phẩm mới
}

const initialState: Product = {}

const productSelectedSlice = createSlice({
  name: "productSelected",
  initialState,
  reducers: {
    // update product
    setProductSelected(state, action: PayloadAction<Product>) {
      state = action.payload
    }
  }
})

export const { setProductSelected } = productSelectedSlice.actions
export default productSelectedSlice.reducer
