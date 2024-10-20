import { NextRequest, NextResponse } from "next/server";
import { Response } from "@/lib/interfaces/Response";
import {
  emailChecker,
  messageChecker,
  userNameChecker,
} from "@/schemas/basicUserDetails";
import { contactTemplate } from "@/lib/emails/contactTemplate";
import sendEmails from "@/lib/utilities/sendEmails";

export async function POST(request: NextRequest, response: NextResponse) {
  try {
    const { CONTACT_FORM_EMAIL, EMAIL } = process.env;
    const data = await request.json();
    const { name, email, message } = data;
    if (!EMAIL || !CONTACT_FORM_EMAIL) {
      return NextResponse.json(
        { error: "Environmental Variable's Missing" },
        { status: 500 }
      );
    }
    if (!name || !message || !email) {
      return NextResponse.json(
        { error: "All Fields Are Not Provided!" },
        { status: 400 }
      );
    }
    userNameChecker.parse(name);
    emailChecker.parse(email);
    messageChecker.parse(message);

    const from = `Contact Form <${CONTACT_FORM_EMAIL}>`,
      to = EMAIL,
      html = contactTemplate({ name, email, message });
    const info = await sendEmails(from, to, "Contact Form", html);

    return NextResponse.json({ info }, { status: 200 });
  } catch (error: any) {
    console.error("Internal Server Error:- ", error);
    // Construct the error response
    const errorResponse: Response = {
      success: false,
      message: error.message || "Interal Server Error.",
    };
    return NextResponse.json(errorResponse, { status: 500 });
  }
}
