import { I_Product } from "@/types/product";
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const initialState: I_Product = {}

const productSelectedSlice = createSlice({
  name: "productSelected",
  initialState,
  reducers: {
    // update product
    setProductSelected(state, action: PayloadAction<I_Product>) {
      return { ...action.payload }
    },
    // reset product
    resetProductSelected() {
      return { ...initialState }
    }
  }
})

export const { setProductSelected, resetProductSelected } = productSelectedSlice.actions
export default productSelectedSlice.reducer
