// all import statements
import FormMain from "@/components/tsx/FormMain";
import { useMemo } from "react";
import { Metadata } from "next";
import {
  environment,
  title,
  titleConcatinate,
} from "@/lib/utilities/variables";
import { contact } from "@/lib/utilities/routes";
import titleName from "@/lib/utilities/titleName";
import MainForm from "@/components/tsx/MainForm";
import { Page } from "@/lib/interfaces/Form";
import Navbar from "@/components/tsx/Navbar";

// page - Contact
export default function Contact() {
  // memorise the main component so it will not rerender
  const main = useMemo(
    () => (
      <FormMain
        marginBottom="md:mb-[30rem]"
        heading="we're happy to help you"
        paragraph="give us a chance to you help you out."
        superHeading="fmcg bharat"
      />
    ),
    []
  );

  // data to create to the contact form
  const page: Page = {
    firstSection: {
      heading: "let's get in touch",
      paragraph:
        "Have any questions or need assistance? Feel free to reach out to us using the form below. Whether it's a query about our products, services, or anything else, we're here to help. Simply provide your details, and we'll get back to you as soon as possible!",
    },
    secondSection: {
      link: "+91 9718701241",
      href: "tel:+91 9718701241",
      heading: "call us",
      paragraph: "monday to saturday 10:00 am - 6:00 pm",
    },
    api: "contact",
    bottomPosition: "md:translate-y-1/4",
  };

  // simple template return
  return (
    <>
      <Navbar />

      <div className="relative">
        {main}
        <MainForm
          api={page.api}
          firstSection={page.firstSection}
          secondSection={page.secondSection}
          bottomPosition={page.bottomPosition}
        />
      </div>
    </>
  );
}

const name: string = titleName(contact);
export const metadata: Metadata = {
  title: title + titleConcatinate + name,
  description:
    "Get in touch with FMCG Bharat. We are here to help with any questions or feedback.",
  keywords: ["contact fmcg bharat", "support", "customer service"],
  openGraph: {
    title: title + titleConcatinate + name,
    description: "Reach out to FMCG Bharat for inquiries or customer support.",
    url: environment + contact,
    type: "website",
    images: [
      {
        url: process.env.NEXT_PUBLIC_MAIN_ICON || "",
        width: 800,
        height: 800,
        alt: "Contact FMCG Bharat",
      },
    ],
  },
  alternates: { canonical: environment + contact },
};
