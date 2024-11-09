// src/store/store.ts
import { configureStore } from "@reduxjs/toolkit";
import cartProductSlice from "./features/cartProducts/cartProductSlice";
import { cartProducts } from "../utilities/variables";
import { CartProducts } from "../interfaces/CartProducts";

export const store = configureStore({
  reducer: {
    cartProducts: cartProductSlice,
  },
});

store.subscribe(() => {
  const state: { cartProducts: CartProducts[] } = store.getState();
  localStorage.setItem(cartProducts, JSON.stringify(state.cartProducts));
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
