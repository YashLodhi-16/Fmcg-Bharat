import { NextResponse } from "next/server";
import ProductSchema from "@/models/products.model";
import { Product } from "@/lib/interfaces/Product";
import connectToDatabase from "@/lib/db/mongoDB";

(async (): Promise<void> => await connectToDatabase())();
export async function GET() {
  try {
    const products: Product[] = await ProductSchema.find()
      .sort({ sales: -1 })
      .limit(8);
    return NextResponse.json({ products }, { status: 200 });
  } catch (error) {
    console.log("Internal Server Error, 500:- " + error);
    return NextResponse.json({ error }, { status: 500 });
  }
}
