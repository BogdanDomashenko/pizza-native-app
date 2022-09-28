import { createSlice } from "@reduxjs/toolkit";
import { generateCartId } from "../../utils/helpers/generateCartId";

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCartItem(state, action) {
      const { id, name, imageUrl, price, selectedProps } = action.payload;

      const itemId = generateCartId(id, selectedProps.type, selectedProps.size);

      const item = state.items.find((item) => item.id === itemId);

      console.log({ item });

      if (item) {
        item.count += 1;
      } else {
        state.items.push({
          id: itemId,
          product: { id, name, imageUrl, price },
          selectedProps,
          count: 1,
        });
      }
    },
    removeCartItem: (state, action) => ({
      items: state.items.filter((item) => item.id === action.payload.id),
    }),
    incCartItem(state, action) {
      const item = state.items.find((item) => item.id === action.payload.id);
      item.count += 1;
    },
    decCartItem(state, action) {
      const item = state.items.find((item) => item.id === action.payload.id);
      if (item.count > 1) {
        item.count -= 1;
      }
    },
    resetCart: () => initialState,
  },
});

export const {
  addCartItem,
  removeCartItem,
  incCartItem,
  decCartItem,
  resetCart,
} = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
