import { createSlice } from "@reduxjs/toolkit";

const initialState: Array<any> = [];

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    getProducts: (action, payload) => {},
    setProducts: (state, action) => {
      const { data } = action.payload;
      console.log(action.payload);

      return [...data];
    },
  },
});

export const { getProducts, setProducts } = productSlice.actions;
export default productSlice.reducer;
