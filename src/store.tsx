import { configureStore } from "@reduxjs/toolkit";
import {
  productReducer,
  favoriteReducer,
  cardReducer,
} from "./features/reducers";

const store = configureStore({
  reducer: {
    products: productReducer,
    favorite: favoriteReducer,
    card: cardReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
