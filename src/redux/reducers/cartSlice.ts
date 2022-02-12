import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItemType } from "../../types/cartItemType";

interface cartStateType {
  items: Array<CartItemType>;
  total: number;
}

const initialState: cartStateType = {
  items: [],
  total: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<CartItemType>) => {
      const { payload } = action;
      state.items.push({ ...payload, count: 1 });
    },
    increaseItemAmount: (state, action) => {
    },
    decreaseItemAmount: (state, action) => {},
    removeItem: (state, action) => {},
  },
});

export const { increaseItemAmount, decreaseItemAmount, addItem, removeItem } =
  cartSlice.actions;
export default cartSlice.reducer;
