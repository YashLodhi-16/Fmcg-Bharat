// all import statements
import BasiCard from "@/components/tsx/BasiCard";
import BasicCategoryCard from "@/components/tsx/BasicCategoryCard";
import BasicFaqCard from "@/components/tsx/BasicFaqCard";
import BasicLayout from "@/components/tsx/BasicLayout";
import Main from "@/components/tsx/Main";
import SectionWrapper from "@/components/tsx/SectionWrapper";
import {
  BasiCardDetails,
  BasicCategoryCardDetails,
  BasicFaqCardDetails,
} from "@/lib/interfaces/Card";
import { about } from "@/lib/utilities/routes";
import titleName from "@/lib/utilities/titleName";
import { title, titleConcatinate } from "@/lib/utilities/variables";
import { Metadata } from "next";

// page - about
export default function About() {
  const key: number = 0;
  // data to generate different section of the page
  const src =
      "https://res.cloudinary.com/dblq992uw/image/upload/v1729089445/Public/icons/about/check_gqsmwr.png",
    alt = "tick icon";
  const basicInfoCard: BasiCardDetails[] = [
    {
      heading: "what is fmcg.",
      paragraph:
        "Fast-moving consumer goods (fMCG), also known as consumer packaged goods, are products that are sold quickly and at a relatively low cost.",
      src,
      alt,
    },
    {
      heading: "what special we offer our customers.",
      paragraph:
        "At our company, we pride ourselves on offering a unique blend of exceptional service and high-quality products that cater specifically to your needs.",
      src,
      alt,
    },
    {
      heading: "east order placement.",
      paragraph:
        "there is no need to create account to place your orders. just add them to cart and checkout. we offer simple way to  make order's payment.",
      src,
      alt,
    },
  ];

  const basicCategoryCard: BasicCategoryCardDetails[] = [
    {
      categories: ["shoes", "socks", "slippers"],
      heading: "foot wear",
      href: "/products",
    },
    {
      categories: ["head phones", "mobiles", "ear buds"],
      heading: "electronics",
      href: "/products",
    },
    {
      categories: ["whey protein", "instant food items", "chocolates"],
      heading: "food",
      href: "/products",
    },
  ];

  const basicImageInfoCard: BasiCardDetails[] = [
    {
      alt: "shopping cart",
      src: "https://res.cloudinary.com/dblq992uw/image/upload/v1729088756/Public/about-images/shopping-cart_oaqlbx.png",
      link: "choose products",
      href: "/products",
      heading: "choose your all produts.",
      paragraph:
        "when u sure about the product that you will buy, then add it to cart section. click on add to cart button that's all you have to do.",
      className: "md:flex-row-reverse mb-8",
    },
    {
      alt: "payment image",
      src: "https://res.cloudinary.com/dblq992uw/image/upload/v1729088756/Public/about-images/payment_z4m86e.png",
      link: "go to cart",
      href: "/cart",
      heading: "make payment.",
      paragraph:
        "fill up basic details like address, email and phone number. make payment with the way to feel best like UPI, debit / credit card etc.",
      className: "mb-8 md:flex-row",
    },
    {
      className: "md:flex-row-reverse",
      alt: "receive your order.",
      src: "https://res.cloudinary.com/dblq992uw/image/upload/v1729088763/Public/about-images/delivery_vf8n3d.png",
      link: "check status",
      href: "/cart",
      heading: "receive your order.",
      paragraph:
        "after placing your order, we will verify it by making an call to your phone number and then your products will be delivered in 3-4 days to your address.",
    },
  ];

  const basicFaqCard: BasicFaqCardDetails[] = [
    {
      heading: "about fmcg bharat",
      answer:
        "FMCG Bharat is an online marketplace offering a wide range of fast-moving consumer goods (FMCG) at competitive prices.",
      question: "What is FMCG Bharat?",
    },
    {
      answer:
        "We accept various payment methods, including credit/debit cards, UPI, net banking, and popular digital wallets. You can choose your preferred payment method at checkout.",
      question: "What payment methods are accepted?",
    },
    {
      answer:
        "Yes, we offer cash on delivery for select locations. The availability of COD will be confirmed at checkout based on your delivery address.",
      question: "Do you offer cash on delivery (COD)?",
    },
    {
      question: "Can I create a customer account on FMCG Bharat?",
      answer: "No, you cannot create an account.",
    },
    {
      answer:
        "Delivery times depend on your location and the type of products ordered. Generally, orders are delivered within 3-4 business days.",
      question: "How long does it take to receive my order?",
    },
    {
      answer:
        "Once your order is dispatched, we will send you a tracking number via email or SMS. You can use this number to track your order on our website.",
      question: "How can I track my order?",
    },
    // {
    //   answer:
    //     "We accept returns for defective or damaged products within 7 days of delivery. To initiate a return, please contact our customer support team, and we’ll guide you through the process.",
    //   question: "What is your return policy?",
    // },
    // {
    //   answer:
    //     "Shipping is free for orders above a certain amount. For orders below that threshold, a nominal shipping fee may apply. The applicable charges will be displayed during checkout.",
    //   question: "Are there any shipping charges?",
    // },
    // {
    //   answer:
    //     "You can cancel your order before it is shipped. Once the order is dispatched, cancellations are not allowed. If you need to cancel an order, please contact our support team as soon as possible.",
    //   question: "Can I cancel my order?",
    // },
    // {
    //   answer:
    //     "Yes, we frequently run discounts, offers, and promotions on various products. Be sure to subscribe to our newsletter and follow us on social media to stay updated.",
    //   question: "Do you offer discounts or promotions?",
    // },
    // {
    //   answer:
    //     "You can reach our customer support team via email at support@fmcgbharat.com or call our helpline at [insert phone number]. We are available from 9 AM to 6 PM, Monday through Saturday.",
    //   question: "How do I contact customer support?",
    // },
    // {
    //   answer:
    //     "Simply browse our product categories, add items to your cart, and proceed to checkout. You will need to provide your shipping address and payment details to complete the purchase.",
    //   question: "How do I place an order on FMCG Bharat?",
    // },
  ];
  return (
    <div className="">
      {/* hero section of the page */}
      <Main
        href="#aboutContainer"
        link="read about us"
        src="https://res.cloudinary.com/dblq992uw/image/upload/v1729161502/Public/hero-images/about-main_s3penp.png"
        paragraph=" At FMCG Bharat, we are dedicated to bringing you the best
        fast-moving consumer goods from across the country. Our mission is
        to simplify online shopping by offering a wide range of high-quality
        products at affordable prices."
        key={key}
      >
        <span>more on</span>
        <span className="text-yellow-500">fmcg bharat</span>
      </Main>

      {/* 1st section */}
      {/* features of fmcg bharat */}
      <BasicLayout id="aboutContainer" paddingTop={false}>
        <SectionWrapper heading="here's features of fmcg bharat.">
          {basicInfoCard.map((value, index: number) => {
            const { heading, src, alt, paragraph } = value;
            return (
              <BasiCard
                heading={heading}
                paragraph={paragraph}
                key={index}
                src={src}
                alt={alt}
              />
            );
          })}
        </SectionWrapper>
      </BasicLayout>

      {/* 2nd section */}
      {/* how to fmcg bharat */}
      <BasicLayout paddingTop={false}>
        <SectionWrapper heading="how to purchase products">
          {basicImageInfoCard.map((value, index: number) => {
            const { alt, heading, paragraph, src, href, link, className } =
              value;
            return (
              <BasiCard
                heading={heading}
                paragraph={paragraph}
                key={index}
                alt={alt}
                src={src}
                href={href}
                link={link}
                className={className}
              />
            );
          })}
        </SectionWrapper>
      </BasicLayout>

      {/* 3rd section */}
      {/* categories */}
      <BasicLayout paddingTop={false}>
        <SectionWrapper heading="explore a wide range of products">
          <div className="grid grid-cols-autofit-3 lg:grid-cols-3 w-full justify-center items-center gap-8 sm:gap-16 px-2 sm:px-16">
            {basicCategoryCard.map(
              (value: BasicCategoryCardDetails, index: number) => {
                const { heading, href, categories } = value;
                return (
                  <BasicCategoryCard
                    heading={heading}
                    href={href}
                    categories={categories}
                    key={index}
                  />
                );
              }
            )}
          </div>
        </SectionWrapper>
      </BasicLayout>

      {/* 4th section */}
      {/* faq fmcbharat */}
      <BasicLayout paddingTop={false}>
        <SectionWrapper heading="got questions? we've got answers.">
          {basicFaqCard.map((value, index: number) => {
            const { heading, answer, question } = value;
            return (
              <BasicFaqCard
                heading={heading}
                key={index}
                question={question}
                answer={answer}
              />
            );
          })}
        </SectionWrapper>
      </BasicLayout>
    </div>
  );
}

const name = titleName(about);
export const metadata: Metadata = {
  title: title + titleConcatinate + name,
  description:
    "Learn more about FMCG Bharat and how we strive to offer the best FMCG products across India.",
  keywords: ["about fmcg bharat", "company information", "about us"],
  openGraph: {
    title: title + titleConcatinate + name,
    description:
      "Discover FMCG Bharat’s mission and how we deliver the best consumer goods online.",
    url: process.env.NEXT_PUBLIC_PRO_API + about,
    type: "website",
    images: [
      {
        url: process.env.NEXT_PUBLIC_MAIN_ICON || "",
        width: 800,
        height: 800,
        alt: "About FMCG Bharat",
      },
    ],
  },
  alternates: { canonical: process.env.NEXT_PUBLIC_PRO_API + about },
};
