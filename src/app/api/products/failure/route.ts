"use server";
import { NextRequest, NextResponse } from "next/server";
export async function POST(request: NextRequest) {
  try {
    const urlEncodedString: string = await request.text();
    const params = new URLSearchParams(urlEncodedString);
    const data = Object.fromEntries(params.entries());
    const responseParams = {
      status: data.status,
      firstName: data.firstname,
      lastName: data.lastname,
      error_Message: data.error_Message,
    };
    const queryString = new URLSearchParams(responseParams).toString();
    const redirectUrl = new URL(`/`, request.nextUrl);
    return NextResponse.redirect(redirectUrl, 302);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
