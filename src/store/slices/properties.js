import { createSlice } from "@reduxjs/toolkit";
import { productApi } from "../../services/Product.service";

const initialState = {
  types: [],
  sizes: [],
};

const propertiesSlice = createSlice({
  name: "properties",
  initialState,
  extraReducers: (builder) => {
    builder.addMatcher(
      productApi.endpoints.availableProducts.matchFulfilled,
      (state, { payload }) => {
        state.types = payload.types;
        state.sizes = payload.sizes;
      }
    );
  },
});

//export const { resetUser } = userSlice.actions;
export const propertiesReducer = propertiesSlice.reducer;
