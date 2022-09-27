import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts(state, action) {
      state.products = action.payload.products;
    },
    resetProducts: (state, action) => initialState,
  },
});

export const { setProducts, resetProducts } = productSlice.actions;
export const productsReducer = productSlice.reducer;
