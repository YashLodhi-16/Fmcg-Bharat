import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const urlEncodedString: string = await request.text();
    const params = new URLSearchParams(urlEncodedString);
    const data = Object.fromEntries(params?.entries());
    const responseParams = {
      status: data.status,
      amount: data.amount,
      firstName: data.firstname,
      lastName: data.lastname,
      email: data.email,
      orderDate: data.addedon,
      invoiceID: data.txnid,
      orderId: data.mihpayid,
    };

    const queryString = new URLSearchParams(responseParams).toString();
    const redirectUrl = new URL(
      `/purchaseResponse?${queryString}`,
      request.nextUrl
    );
    return NextResponse.redirect(redirectUrl, 302);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
