import { configureStore } from "@reduxjs/toolkit";
import productSelectedReducer from "../features/product/productSelectedSlice";

export const store = configureStore({
    reducer: {
        productSelected: productSelectedReducer
    }
});

export type AppDispatch = typeof store.dispatch; // get dispatch type
export type RootState = ReturnType<typeof store.getState>;