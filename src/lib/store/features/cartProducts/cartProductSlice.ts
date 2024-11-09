"use client";
import { CartProducts } from "@/lib/interfaces/CartProducts";
import { cartProducts } from "@/lib/utilities/variables";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const loadCartProduct = (): CartProducts[] => {
  try {
    // Ensure this code only runs in the browser
    if (typeof window !== "undefined") {
      const cartProductsData = localStorage.getItem(cartProducts); // Use string key
      if (!cartProductsData) {
        return []; // Return empty array if no data is found
      }
      return JSON.parse(cartProductsData) as CartProducts[]; // Parse and return array
    }
    return [];
  } catch (e) {
    console.error("Could not load cart products", e);
    return [];
  }
};

const cartProductSlice = createSlice({
  name: cartProducts,
  initialState: loadCartProduct(),
  reducers: {
    updateTotalQuantity: (
      state,
      action: { payload: { id: string; totalQuantity: number } }
      // action: { payload: { id: string; totalQuantity: number; color: string } }
    ) => {
      // Find the product in the state array by matching its ID
      // const product = state.filter((item) => item._id === action.payload.id);
      const product = state.find((item) => item._id === action.payload.id);
      // If the product exists, update its totalQuantity
      if (product) {
        product.totalQuantity = action.payload.totalQuantity;
        // const colorProduct = product.find(
        //   (item) => item.color === action.payload.color
        // );
        // if (colorProduct) {
        // colorProduct.totalQuantity = action.payload.totalQuantity;
        // }
      }
    },
    addProductInCart: (state, action: PayloadAction<CartProducts>) => {
      let existingProduct = null;
      // let colorExist = null;
      for (let index = 0; index < state.length; index++) {
        const element = state[index];
        existingProduct = element._id === action.payload._id ? true : null;
        // colorExist = element.color === action.payload.color ? true : null;
      }

      if (!existingProduct) {
        // if (!existingProduct || !colorExist) {
        state.push(action.payload);
      }
    },
    removeProductFromCart: (state, action: PayloadAction<string>) => {
      return state.filter((value) => value._id !== action.payload);
    },
    clearCart: (state) => {
      return (state = []);
      // console.log(JSON.stringify(state, undefined, 2));
    },
  },
});

export const {
  addProductInCart,
  clearCart,
  removeProductFromCart,
  updateTotalQuantity,
} = cartProductSlice.actions;
export default cartProductSlice.reducer;
