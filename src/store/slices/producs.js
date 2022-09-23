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
  },
});

export const { setProducts } = stylesSlice.actions;
export const productsReducer = stylesSlice.reducer;
