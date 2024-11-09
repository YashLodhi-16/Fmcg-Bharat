// all import statements
import { Metadata } from "next";
import {
  environment,
  title,
  titleConcatinate,
} from "@/lib/utilities/variables";
import { feedback } from "@/lib/utilities/routes";
import titleName from "@/lib/utilities/titleName";
import { Page } from "@/lib/interfaces/Form";
import { useMemo } from "react";
import FormMain from "@/components/tsx/FormMain";
import MainForm from "@/components/tsx/MainForm";

// page - Feedback
export default function Feedback() {
  // memorise the main component
  const main = useMemo(
    () => (
      <FormMain
        marginBottom="md:mb-[37rem]"
        heading="Share your feedback!"
        paragraph="we will make ourselves more better with your valuable feedback"
        superHeading="fmcg bharat"
      />
    ),
    []
  );

  // data to create contact form
  const page: Page = {
    api: "feedback",
    firstSection: {
      heading: "We Value Your Feedback!",
      paragraph:
        "Your thoughts help us improve! Please take a moment to share your experience with us so we can continue to provide the best service possible. Your feedback is important and appreciated.",
    },
    secondSection: {
      link: "040-67607600",
      href: "tel:040-67607600",
      heading: "call us",
      paragraph: "monday to saturday 10:00 am - 6:00 pm.",
    },
    bottomPosition: "md:translate-y-[33%]",
  };

  // return a simple contact form
  return (
    <div className="relative">
      {main}
      <MainForm
        firstSection={page.firstSection}
        secondSection={page.secondSection}
        api={page.api}
        bottomPosition={page.bottomPosition}
      />
    </div>
  );
}

const name = titleName(feedback);
export const metadata: Metadata = {
  title: title + titleConcatinate + name,
  description:
    "Help us improve! Share your honest feedback with FMCG Bharat and let us know how we can serve you better.",
  keywords: ["customer feedback", "fmcg feedback", "improve service"],
  openGraph: {
    title: title + titleConcatinate + name,
    description:
      "Give us your valuable feedback and help FMCG Bharat improve its services.",
    url: environment + feedback,
    type: "website",
    images: [
      {
        url: process.env.NEXT_PUBLIC_MAIN_ICON || "",
        width: 800,
        height: 800,
        alt: "FMCG Bharat Feedback",
      },
    ],
  },
  alternates: { canonical: environment + feedback },
};
