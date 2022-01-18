import { createSlice } from "@reduxjs/toolkit";

const items = [
  {
    tags: ["Snow"],
    price: 19.99,
    name: "Refined Snow Mug",
    description:
      "quia similique aliquam inventore et nobis perferendis a magnam facere necessitatibus magni praesentium est ab labore expedita minima asperiores",
    slug: "Refined-Snow-Mug",
    added: 1481866655476,
    manufacturer: "Leannon-Fahey-and-Sawayn",
    itemType: "mug",
  },
  {
    tags: ["Night", "Sand", "Desert"],
    price: 17.99,
    name: "Sleek Night Mug",
    description:
      "recusandae quas temporibus sapiente molestiae eos nulla est et non molestias voluptatem fugit architecto ad enim aut enim aut sed quia aspernatur et harum aut",
    slug: "Sleek-Night-Mug",
    added: 1483507663515,
    manufacturer: "Oberbrunner-Block-and-Mills",
    itemType: "mug",
  },
];

const initialState: Array<any> = [];

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    fetch: (state) => {
      return [...items];
    },
  },
});

export const { fetch } = productSlice.actions;
export default productSlice.reducer;
