import { billTemplate } from "@/lib/emails/billTemplate";
import { CartProducts } from "@/lib/interfaces/CartProducts";
import { Product } from "@/lib/interfaces/Product";
import fetchData from "@/lib/utilities/fetchData";
import sendEmails from "@/lib/utilities/sendEmails";
import { environment } from "@/lib/utilities/variables";
import { NextRequest, NextResponse } from "next/server";
export async function POST(request: NextRequest) {
  if (!environment) {
    return NextResponse.json(
      {
        message: "environment variable in not available",
      },
      { status: 500 }
    );
  }
  try {
    const data = await request.json();
    const {
      useremail,
      totalPrice,
      orderDate,
      firstName,
      lastName,
      orderId,
      invoiceID,
      products,
    } = data;

    const from = `Fmcg Bharat Invoice <${process.env.NEXT_PUBLIC_EMAIL}>`,
      to = useremail,
      subject = "Your Fmcg Bharat | Invoice " + orderId;

    const ids: string[] = [],
      actualPrice: number[] = [],
      currentPrice: number[] = [],
      discount: number[] = [],
      itemName: string[] = [];
    for (let index = 0; index < products.length; index++) {
      const element = products[index];
      ids.push(element._id);
    }

    const res: { documents: Product[] } = await fetchData(
      environment + "/api/products",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(ids),
      }
    );

    res.documents.forEach((element: Product, index: number) => {
      const currProduct = products.find(
        (ele: CartProducts) => ele._id === element._id
      );
      actualPrice.push(element.actualPrice * currProduct.totalQuantity);
      discount.push(element.discount);
      currentPrice.push(element.currentPrice * currProduct.totalQuantity);
      itemName.push(element.name);
    });

    const html = billTemplate({
      useremail,
      firstName,
      lastName,
      invoiceID,
      orderId,
      orderDate,
      discount,
      currentPrice,
      actualPrice,
      itemName,
      totalPrice,
    });
    if (!from) {
      throw new Error("From Email is not provided!");
    }
    await sendEmails(from, to, subject, html);
    await sendEmails(
      `Fmcg Bharat Invoice <${process.env.PRODUCTS_BILL_EMAIL}>`,
      process.env.NEXT_PUBLIC_EMAIL || "",
      subject,
      html
    );
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
