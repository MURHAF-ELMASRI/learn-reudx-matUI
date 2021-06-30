import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product, Item } from "../../interfaces";

const initialState: Item[] = [];

const CardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<Product>) => {
      let index = state.findIndex((e: Item) => e.id === action.payload.id);
      console.log({ index });
      if (index !== -1)
        state[state.findIndex((e) => e.id === action.payload.id)].count++;
      else state.push({ ...action.payload, count: 1 });
    },
    removeOneItem: (state, action: PayloadAction<{ id: number }>) => {
      const item = state.find((e) => e.id === action.payload.id)!;
      if (item.count > 1)
        state[state.findIndex((e) => e.id === action.payload.id)].count--;
      else return state.filter((e: Item) => e.id !== action.payload.id);
    },
    removeItem: (state, action: PayloadAction<{ id: number }>) => {
      return state.filter((e: Item) => e.id !== action.payload.id);
    },
  },
});

export const { addItem, removeItem, removeOneItem } = CardSlice.actions;

export default CardSlice.reducer;
