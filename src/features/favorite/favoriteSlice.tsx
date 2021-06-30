import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: number[] = [];

const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<{ id: number }>) => {
      state.push(action.payload.id);
    },
    removeFavorite: (state, action: PayloadAction<{ id: number }>) => {
      return state.filter((e: number) => e !== action.payload.id);
    },
  },
});

export const { addFavorite, removeFavorite } = favoriteSlice.actions;

export default favoriteSlice.reducer;
