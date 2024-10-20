export interface BasiCardDetails {
  heading: string;
  paragraph: string;
  href?: string;
  link?: string;
  src: string;
  alt: string;
  className?: string;
}

export interface BasicCategoryCardDetails {
  heading: string;
  href: string;
  categories: string[];
}

export interface BasicFaqCardDetails {
  heading?: string;
  question: string;
  answer: string;
}
