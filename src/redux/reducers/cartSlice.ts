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
    increaseItemCount: (state, action) => {
      state.items = state.items.map((item) =>
        item.slug === action.payload
          ? { ...item, count: (item?.count || 1) + 1 }
          : item
      );
    },
    decreaseItemCount: (state, action) => {
      const item = state.items.find((item) => item.slug === action.payload);

      if (!item?.count) return;
      if (item.count <= 1) {
        state.items = state.items.filter((item) => item.slug !== action.payload);
      } else {
        state.items = state.items.map((item) =>
          item.slug === action.payload
            ? { ...item, count: (item?.count || 2) - 1 }
            : item
        );
      }
    },
    calculateTotal: (state) => {
      state.total = +state.items
        .reduce((acc, { count = 1, price }) => acc + count * price, 0)
        .toFixed(2);
    },
  },
});

export const { increaseItemCount, decreaseItemCount, addItem, calculateTotal } =
  cartSlice.actions;
export default cartSlice.reducer;
