import { NextRequest, NextResponse } from "next/server";
import connectToDatabase from "@/lib/db/mongoDB";

export async function GET(request: NextRequest) {
  connectToDatabase();
  try {
    return NextResponse.json({}, { status: 200 });
  } catch (error) {
    console.log("Error while fetching multiple products with IDs: ", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
