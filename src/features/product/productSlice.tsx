import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../../interfaces";

const initialState: Product[] = [];

const productSelector = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProducts: (state, action: PayloadAction<Product[]>) => {
      state.push(...action.payload);
    },
  },
});

export const { addProducts } = productSelector.actions;

export default productSelector.reducer;
