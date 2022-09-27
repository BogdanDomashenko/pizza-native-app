import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

const stylesSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts(state, action) {
      state.products = action.payload.products;
    },
    resetProducts: (state, action) => initialState,
  },
});

export const { setProducts, resetProducts } = stylesSlice.actions;
export const productsReducer = stylesSlice.reducer;
