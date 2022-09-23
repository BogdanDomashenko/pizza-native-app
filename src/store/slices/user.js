import { createSlice } from "@reduxjs/toolkit";
import { ROLES } from "../../utils/constants";

const initialState = {
  role: ROLES.phantom,
};

const stylesSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setProducts(state, action) {
      state.products = action.payload.products;
    },
  },
});

export const stylesActions = stylesSlice.actions;
export const stylesReducer = stylesSlice.reducer;
