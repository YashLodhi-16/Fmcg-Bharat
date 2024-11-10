"use client";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const searchProducts = createSlice({
  name: "searchProducts",
  initialState: "",
  reducers: {
    query: (state, action: PayloadAction<string>) => {
      return action.payload;
    },
  },
});

export const { query } = searchProducts.actions;
export default searchProducts.reducer;
