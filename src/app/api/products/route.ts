import { NextResponse, NextRequest } from "next/server";
import connectToDatabase from "@/lib/db/mongoDB";
import ProductSchema from "@/models/products.model";
import { Product } from "@/lib/interfaces/Product";

(async (): Promise<void> => await connectToDatabase())();

export async function GET() {
  try {
    const products: Product[] = await ProductSchema.find();
    return NextResponse.json({ products }, { status: 200 });
  } catch (error) {
    console.log("Internal Server Error, 500:- " + error);
    return NextResponse.json({ error }, { status: 500 });
  }
}
