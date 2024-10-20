import mongoose, { Schema, Document } from "mongoose";
import { Product } from "@/lib/interfaces/Product";

const ProductSchema: Schema<Product> = new Schema({
  name: {
    required: true,
    type: String,
  },
  actualPrice: {
    required: true,
    type: Number,
  },
  currentPrice: {
    required: true,
    type: Number,
  },
  discount: {
    required: true,
    type: Number,
  },
  quantity: {
    required: true,
    type: Number,
  },
  colorImages: [
    {
      url: { required: true, type: [String] },
      color: { type: String, required: true },
      _id: false,
    },
  ],

  sales: {
    type: Number,
    default: 0,
  },
});

export default mongoose.models.Products ||
  mongoose.model<Product>("Products", ProductSchema);
