import { feedbackTemplate } from "@/lib/emails/feedbackTemplate";
import { FeedbackForm } from "@/lib/interfaces/Form";
import sendEmails from "@/lib/utilities/sendEmails";
import {
  ageChecker,
  emailChecker,
  messageChecker,
  subjectChecker,
  userNameChecker,
} from "@/schemas/basicUserDetails";

import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const { EMAIL, FEEDBACK_FORM_EMAIL } = process.env;
    const data: FeedbackForm = await req.json();
    const { name, subject, email, message } = data;

    if (!EMAIL || !FEEDBACK_FORM_EMAIL) {
      return NextResponse.json(
        { error: "Environmental Variable's Missing" },
        { status: 500 }
      );
    }
    if (!name || !message || !email || !subject) {
      return NextResponse.json(
        { error: "All Fields Are Not Provided!" },
        { status: 400 }
      );
    }

    userNameChecker.parse(name);
    emailChecker.parse(email);
    messageChecker.parse(message);
    subjectChecker.parse(subject);

    const from = `"Feedback Form" <${FEEDBACK_FORM_EMAIL}>`,
      to = EMAIL,
      html = feedbackTemplate(data);

    const info = await sendEmails(from, to, subject, html);
    if (!info) {
      return NextResponse.json({ error: info }, { status: 500 });
    }
    return NextResponse.json({ info }, { status: 200 });
  } catch (error) {
    console.log("Internal Server Error, 500:- " + error);
    return NextResponse.json({ error }, { status: 500 });
  }
}
