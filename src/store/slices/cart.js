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

      state.items.push({
        id: generateCartId(id, selectedProps.type, selectedProps.size),
        item: action.payload,
      });
    },
    removeCartItem(state, action) {
      state.items.delete(action.payload.id);
    },
    resetCart: () => initialState,
  },
});

export const { addCartItem, removeCartItem, resetCart } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
