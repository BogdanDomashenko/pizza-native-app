import { createSlice } from "@reduxjs/toolkit";
import { generateCartId } from "../../utils/helpers/generateCartId";

const initialState = {
  items: [],
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCartItem(state, action) {
      const { id, name, imageUrl, price, selectedProps, addationalPrice } =
        action.payload;

      const itemId = generateCartId(id, selectedProps.type, selectedProps.size);

      const item = state.items.find((item) => item.id === itemId);

      const addedPrice = price + addationalPrice;

      if (item) {
        item.count += 1;
        item.price = item.price + addedPrice;
        state.totalPrice += addedPrice;
      } else {
        state.items.push({
          id: itemId,
          product: { id, name, imageUrl, price },
          selectedProps,
          count: 1,
          price: addedPrice,
        });
        state.totalPrice += addedPrice;
      }
    },
    removeCartItem: (state, action) => ({
      items: state.items.filter((item) => item.id === action.payload.id),
    }),
    incCartItem(state, action) {
      const item = state.items.find((item) => item.id === action.payload.id);

      const addedPrice = item.product.price + action.payload.additionalPrice;
      item.price = item.price + addedPrice;
      item.count += 1;
      state.totalPrice += addedPrice;
    },
    decCartItem(state, action) {
      const item = state.items.find((item) => item.id === action.payload.id);

      if (item.count > 1) {
        const deducatedPrice =
          item.product.price + action.payload.additionalPrice;
        item.count -= 1;
        item.price = item.price - deducatedPrice;
        state.totalPrice -= deducatedPrice;
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
