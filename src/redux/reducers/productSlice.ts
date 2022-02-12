import { createSlice } from "@reduxjs/toolkit";

const initialState: any = {
  list: [],
  totalItemCount: 0,
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    getProducts: (state, action) => {},
    setProducts: (state, action: any) => {
      const { data, headers } = action.payload;
      console.log("set", data);

      return {
        list: data,
        totalItemCount: headers["x-total-count"],
      };
    },
  },
});

export const { getProducts, setProducts } = productSlice.actions;
export default productSlice.reducer;
