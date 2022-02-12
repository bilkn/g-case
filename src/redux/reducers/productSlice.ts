import { createSlice } from "@reduxjs/toolkit";

const initialState: any = {
  list: [],
  totalItemCount: 0,
  loading: false,
  message: "",
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    getProducts: (state, action) => {
      state.loading = true;
    },
    getProductsFailed: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    getProductsSuccess: (state, action: any) => {
      const { data, headers } = action.payload;

      return {
        list: data,
        totalItemCount: headers["x-total-count"],
        loading: false,
      };
    },
  },
});

export const { getProducts, getProductsSuccess, getProductsFailed } =
  productSlice.actions;
export default productSlice.reducer;
