// all import statements
"use client";
import { useState } from "react";
import Form from "@/components/tsx/Form";
import { notoSans } from "@/lib/fonts/notoSans";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCommentDots,
  faEnvelope,
  faPenNib,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import {
  ContactForm,
  FeedbackForm,
  InputFieldsDetails,
  Page,
} from "../../lib/interfaces/Form";

// component - MainForm
const MainForm = (props: Page) => {
  // get api from props
  const { api } = props;

  // define an object
  const object: FeedbackForm | ContactForm = {
    name: "",
    message: "",
    email: "",
  };

  // Type Narrowing and adding subject fields, if its not the contact page
  if (api !== "contact") {
    (object as FeedbackForm).subject = "";
  }

  // state for formdata
  const [formData, setFormData] = useState<ContactForm | FeedbackForm>(object);

  // change state according to name of the input/textarea
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((val) => ({ ...val, [name]: value }));
  };

  // n. number of input fields
  const inputFields: InputFieldsDetails[] = [
    {
      input: (
        <input
          name="name"
          type="text"
          id="name"
          required
          minLength={5}
          maxLength={50}
          className={`${notoSans.className} w-full input-bar rounded-xl`}
          value={formData?.name}
          onChange={handleChange}
        />
      ),
      src: <FontAwesomeIcon icon={faUser} />,
    },
    {
      input: (
        <input
          name="email"
          type="email"
          id="email"
          required
          className={`${notoSans.className} w-full input-bar rounded-xl`}
          value={formData?.email}
          onChange={handleChange}
        />
      ),
      src: <FontAwesomeIcon icon={faEnvelope} />,
    },
    {
      input: (
        <textarea
          name="message"
          id="message"
          className={`${notoSans.className} w-full input-bar min-h-36 resize-y max-h-48 rounded-xl`}
          required
          minLength={25}
          maxLength={200}
          value={formData?.message}
          onChange={handleChange}
        ></textarea>
      ),
      src: <FontAwesomeIcon icon={faCommentDots} />,
    },
  ];

  // add subject field
  if (api !== "contact") {
    // insert this field before the last field
    inputFields.splice(inputFields.length - 1, 0, {
      input: (
        <input
          name="subject"
          type="text"
          id="subject"
          required
          minLength={10}
          maxLength={50}
          className={`${notoSans.className} w-full input-bar rounded-xl`}
          value={(formData as FeedbackForm)?.subject}
          onChange={handleChange}
        />
      ),
      src: <FontAwesomeIcon icon={faPenNib} />,
    });
  }

  // return the original Form
  return (
    <Form
      api={props.api}
      firstSection={props.firstSection}
      secondSection={props.secondSection}
      bottomPosition={props.bottomPosition}
      formData={formData}
      inputFields={inputFields}
      key={0}
    />
  );
};

export default MainForm;
