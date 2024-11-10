import { NextResponse, NextRequest } from "next/server";
import connectToDatabase from "@/lib/db/mongoDB";
import ProductSchema from "@/models/products.model";
import mongoose from "mongoose";

export async function GET(request: NextRequest) {
  connectToDatabase();
  try {
    const { searchParams } = request.nextUrl;

    if (searchParams.has("_id")) {
      const product = await ProductSchema.findById(searchParams.get("_id"));
      return NextResponse.json(product, { status: 200 });
    } else {
      const pipeline: mongoose.PipelineStage[] = [];

      if (searchParams.has("query")) {
        const query = searchParams.get("query");
        pipeline.push({
          $match: {
            $or: [
              { name: { $regex: query, $options: "i" } },
              { description: { $regex: query, $options: "i" } },
              { tags: { $regex: query, $options: "i" } }, // Assuming tags is a string; if it's an array, see note below
            ],
          },
        });
      }

      // Parse and validate the sort order for sales
      if (searchParams.has("sales")) {
        const salesOrder = parseInt(searchParams.get("sales") || "1") as 1 | -1;
        pipeline.push({
          $sort: { sales: salesOrder },
        });
      }

      // Add the limit to the pipeline
      const limit = parseInt(searchParams.get("limit") || "25");
      pipeline.push({ $limit: limit });

      // Execute aggregation pipeline
      const products = await ProductSchema.aggregate(pipeline);

      return NextResponse.json({ products }, { status: 200 });
    }
  } catch (error) {
    console.log("Internal Server Error, 500: " + error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  connectToDatabase();
  try {
    const ids = await request.json();
    const objectIds = ids.map((id: string) => new mongoose.Types.ObjectId(id));
    const documents = await ProductSchema.find({
      _id: { $in: objectIds },
    });

    return NextResponse.json({ documents }, { status: 200 });
  } catch (error) {
    console.log("Error while fetching multiple products with IDs: ", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
