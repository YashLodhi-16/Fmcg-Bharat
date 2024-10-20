import { MainBasic } from "./MainBasic";

export interface ContactForm {
  name: string;
  email: string;
  message: string;
}

export interface InputFieldsDetails {
  input: React.ReactElement;
  src: React.ReactElement;
}

export interface FeedbackForm extends ContactForm {
  subject: string;
}

interface SecondSection extends MainBasic {
  link: string;
  href: string;
}

export interface Page {
  firstSection: MainBasic;
  secondSection: SecondSection;
  api: string;
  bottomPosition: string;
}
