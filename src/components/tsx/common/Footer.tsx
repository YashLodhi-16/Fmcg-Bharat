// all imports
import { ubuntu } from "@/lib/fonts/ubuntu";
import {
  about,
  blogs,
  brands,
  contact,
  facebook,
  feedback,
  instagram,
  privacyAndPolicy,
  returnAndRefund,
  termsAndConditions,
  youtube,
} from "@/lib/utilities/routes";
import {
  faFacebookF,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import React from "react";

// all one page interfaces
interface List {
  name: string;
  src?: string;
  children?: React.ReactNode;
}

interface FooterContent {
  classname?: string;
  heading: string;
  list: List[];
}

interface ImageLinks {
  icon: React.ReactNode;
  href: string;
}

// link section in the footer
const FooterSection = (props: { value: FooterContent }) => {
  // get props
  const { value } = props;
  const { heading, list, classname } = value;

  // return a ul component
  return (
    <ul className={classname}>
      <li className="footer-heading">{heading}</li>
      {list.map((item: List, index: number) => {
        // get necessary data
        const { src, name, children } = item;

        return (
          <li key={index} className="mb-2">
            {/* if it has a link then check add children because it may be a image of a platform or something */}
            {src ? (
              <Link href={src}>
                {children}
                {name}
              </Link>
            ) : (
              // if it has no src/link then simply show its name and children you can pass a whole link component in children, if needed.
              <>
                {name}
                {children}
              </>
            )}
          </li>
        );
      })}
    </ul>
  );
};

// main component
const Footer = () => {
  // data to create multiples link sections
  const footerContent: FooterContent[] = [
    {
      heading: "about us",
      list: [
        { src: blogs, name: "blogs" },
        { src: about, name: "about us" },
        { src: contact, name: "contact us" },
      ],
    },
    {
      heading: "consumer policy",
      list: [
        { src: privacyAndPolicy, name: "privacy and policy" },
        { src: returnAndRefund, name: "return and refund" },
        { src: termsAndConditions, name: "terms & conditions" },
      ],
    },
    {
      heading: "others",
      list: [
        { src: brands, name: "brands" },
        { src: feedback, name: "feedback" },
      ],
    },
    {
      heading: "contact us",
      list: [
        {
          name: "telephone: ",
          children: (
            <>
              <Link href="tel:9718701241" className="text-blue-600 hover-link">
                +91 9718701241
              </Link>
            </>
          ),
        },
        {
          name: "email: ",
          children: (
            <>
              <Link
                href="mailto:contact@fmcgbharat.com"
                className="text-blue-600 hover-link normal-case"
              >
                contact@fmcgbharat.com
              </Link>
            </>
          ),
        },

        {
          name: "",
          children: (
            <>
              <Image
                src={process.env.NEXT_PUBLIC_SIDE_ICON || ""}
                width={800}
                height={800}
                alt="main logo"
                className="w-32 h-auto"
              />
            </>
          ),
        },
      ],
    },
  ];

  // data to create multiples social media links with image.
  const className = "rounded-full w-4 text-white bg-black p-1.5 !h-4 ";
  const imageLinks: ImageLinks[] = [
    {
      icon: <FontAwesomeIcon icon={faYoutube} className={className} />,
      href: youtube,
    },
    {
      icon: <FontAwesomeIcon icon={faFacebookF} className={className} />,
      href: facebook,
    },
    {
      icon: <FontAwesomeIcon icon={faInstagram} className={className} />,
      href: instagram,
    },
  ];

  // footer basic structure
  return (
    <footer
      className={`px-8 py-4 bg-white text-slate-950 sm:px-16 sm:py-6 md:px-24 md:py-8 lg:px-40 lg:py-10 flex flex-col ${ubuntu.className} `}
    >
      {/* first section */}
      <div className="flex gap-10 items-center justify-center flex-col">
        {/*  to maintain social media links width footer sections */}
        <div className="w-full lg:w-auto">
          {/* social media links */}
          <div className="flex justify-start items-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 w-full pb-6">
            <h6 className="text-lg italic normal-case">Follow us</h6>

            {imageLinks.map((value: ImageLinks, index) => {
              const { href, icon } = value;
              return (
                <Link href={href} target="_blank" key={index}>
                  {icon}
                </Link>
              );
            })}
          </div>

          {/* footer section links */}
          <div className="grid-cols-autofit-4 grid lg:grid-cols-4 gap-4 py-6 footer-links border-y border-solid border-gray-400">
            {footerContent.map((value: FooterContent, index: number) => {
              return <FooterSection value={value} key={index} />;
            })}
          </div>
        </div>
      </div>

      {/* last section of the website */}
      <div className="text-center pt-4 sm:pt-6 md:pt-8 lg:pt-10 bg-white relative">
        <p className="text-lg">&copy; 2024 Fmcg Bharat. all right reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
