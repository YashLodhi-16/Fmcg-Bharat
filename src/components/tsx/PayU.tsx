"use client";
import createPaymentHash from "@/lib/utilities/createPaymentHash";
import createTxnid from "@/lib/utilities/createTxnid";
import React, { useEffect, useRef, useState } from "react";
import InputFields from "./InputFields";
import { InputFieldsDetails } from "@/lib/interfaces/Form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { notoSans } from "@/lib/fonts/notoSans";
import {
  faAddressBook,
  faCity,
  faEnvelope,
  faHouse,
  faL,
  faLocationDot,
  faThumbtack,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { CartProducts } from "@/lib/interfaces/CartProducts";
import { Product } from "@/lib/interfaces/Product";
import { environment } from "@/lib/utilities/variables";

const PayU = (props: {
  detailsOfCartProducts: Product[];
  totalCurrentPrice: number;
}) => {
  const { detailsOfCartProducts, totalCurrentPrice } = props;

  const key = process.env.NEXT_PUBLIC_PAYU_MERCHANT_KEY;
  const salt = process.env.NEXT_PUBLIC_PAYU_MERCHANT_SALT;
  if (!key || !salt) {
    throw new Error("key or salt is not provided.");
  }

  const [formData, setFormData] = useState({
    phone: "",
    firstName: "",
    lastName: "",
    email: "",
    pincode: "",
    city: "",
    state: "",
    addressLineOne: "",
    addressLineTwo: "",
  });

  const txnid = createTxnid();
  const productinfo = detailsOfCartProducts.length.toString();
  const amount = totalCurrentPrice + ".00";

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    if (id === "phone") {
      setFormData((val) => ({ ...val, [id]: value.slice(0, 10) }));
    } else if (id === "pincode") {
      setFormData((val) => ({ ...val, [id]: value.slice(0, 6) }));
    } else {
      setFormData((val) => ({ ...val, [id]: value }));
    }
  };
  const inputFields: InputFieldsDetails[] = [
    // first name
    {
      input: (
        <input
          name="first name"
          type="text"
          id="firstName"
          required
          minLength={3}
          maxLength={50}
          className={`${notoSans.className} w-full input-bar rounded-xl`}
          value={formData?.firstName}
          onChange={handleChange}
        />
      ),
      src: <FontAwesomeIcon icon={faUser} />,
    },
    // last name
    {
      input: (
        <input
          name="last name"
          type="text"
          id="lastName"
          minLength={3}
          maxLength={50}
          className={`${notoSans.className} w-full input-bar rounded-xl`}
          value={formData?.lastName}
          onChange={handleChange}
        />
      ),
      src: <FontAwesomeIcon icon={faL} />,
    },

    // email
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

    // phone
    {
      input: (
        <input
          name="phone"
          type="text"
          id="phone"
          required
          className={`${notoSans.className} w-full input-bar rounded-xl`}
          value={formData?.phone}
          onChange={handleChange}
        />
      ),
      src: <FontAwesomeIcon icon={faUser} />,
    },

    // pincode
    {
      input: (
        <input
          name="pincode"
          type="text"
          id="pincode"
          required
          className={`${notoSans.className} w-full input-bar rounded-xl`}
          value={formData?.pincode}
          onChange={handleChange}
        />
      ),
      src: <FontAwesomeIcon icon={faThumbtack} />,
    },

    // city
    {
      input: (
        <input
          name="city"
          type="text"
          id="city"
          required
          maxLength={50}
          className={`${notoSans.className} w-full input-bar rounded-xl`}
          value={formData?.city}
          onChange={handleChange}
        />
      ),
      src: <FontAwesomeIcon icon={faHouse} />,
    },

    // state
    {
      input: (
        <input
          name="state"
          type="text"
          id="state"
          required
          maxLength={50}
          className={`${notoSans.className} w-full input-bar rounded-xl`}
          value={formData?.state}
          onChange={handleChange}
        />
      ),
      src: <FontAwesomeIcon icon={faCity} />,
    },
    {
      input: (
        <textarea
          name="address line 1"
          id="addressLineOne"
          required
          minLength={10}
          maxLength={100}
          className={`${notoSans.className} w-full input-bar min-h-36 resize-y max-h-48 rounded-xl`}
          value={formData?.addressLineOne}
          onChange={handleChange}
        ></textarea>
      ),
      src: <FontAwesomeIcon icon={faAddressBook} />,
    },
    {
      input: (
        <textarea
          name="address line 2"
          id="addressLineTwo"
          required
          minLength={10}
          maxLength={100}
          className={`${notoSans.className} w-full input-bar min-h-36 resize-y max-h-48 rounded-xl`}
          value={formData?.addressLineTwo}
          onChange={handleChange}
        ></textarea>
      ),
      src: <FontAwesomeIcon icon={faLocationDot} />,
    },
  ];

  const formRef = useRef<HTMLFormElement>(null);

  const inputRef = useRef<HTMLInputElement>(null);
  const redirectToPaymentPage = () => {
    const newHash = createPaymentHash(
      key,
      txnid,
      amount,
      productinfo,
      formData?.firstName,
      formData?.email,
      salt
    );
    if (inputRef.current) {
      inputRef.current.value = newHash;
      formRef.current?.submit();
    }
  };
  return (
    <div>
      <div className="flex flex-col gap-8 w-full">
        {/* {inputFields.map((value: InputFieldsDetails, index: number) => {
          const { input, src } = value;
          return <InputFields input={input} src={src} key={index} />;
        })} */}
        <div className="flex gap-8 flex-wrap">
          <InputFields
            input={inputFields[0].input}
            src={inputFields[0].src}
            key={0}
          />
          <InputFields
            input={inputFields[1].input}
            src={inputFields[1].src}
            key={1}
          />
        </div>

        <InputFields
          input={inputFields[2].input}
          src={inputFields[2].src}
          key={2}
        />

        <div className="flex gap-8 flex-wrap">
          <InputFields
            input={inputFields[3].input}
            src={inputFields[3].src}
            key={3}
          />
          <InputFields
            input={inputFields[4].input}
            src={inputFields[4].src}
            key={4}
          />
        </div>

        <div className="flex gap-8 flex-wrap">
          <InputFields
            input={inputFields[5].input}
            src={inputFields[5].src}
            key={5}
          />
          <InputFields
            input={inputFields[6].input}
            src={inputFields[6].src}
            key={6}
          />
        </div>

        <div className="flex flex-col gap-8">
          <InputFields
            input={inputFields[7].input}
            src={inputFields[7].src}
            key={7}
          />
          <InputFields
            input={inputFields[8].input}
            src={inputFields[8].src}
            key={8}
          />
        </div>

        <button
          onClick={redirectToPaymentPage}
          className="capitalize bg-teal-800 text-white px-5 py-3 rounded  w-max font-semibold hover:scale-90 transition duration-300 ease-in-out hover:shadow-xl ml-12"
        >
          proceed to payment
        </button>
      </div>
      <form method="POST" action="https://test.payu.in/_payment" ref={formRef}>
        <input type="hidden" name="key" value={key} />
        <input type="hidden" name="txnid" value={txnid} />
        <input type="hidden" name="productinfo" value={productinfo} />
        <input type="hidden" name="amount" value={amount} />
        <input type="hidden" name="email" value={formData?.email} />
        <input type="hidden" name="firstname" value={formData?.firstName} />
        <input type="hidden" name="lastname" value={formData?.lastName} />
        <input type="hidden" name="address1" value={formData?.addressLineOne} />
        <input type="hidden" name="address2" value={formData?.addressLineTwo} />
        <input type="hidden" name="city" value={formData?.city} />
        <input type="hidden" name="state" value={formData?.state} />
        <input type="hidden" name="country" value="india" />
        <input type="hidden" name="zipcode" value={formData?.pincode} />
        <input
          type="hidden"
          name="enforce_paymethod"
          value="creditcard|debitcard|netbanking|upi|cashcard"
        />

        <input
          type="hidden"
          name="surl"
          value={`${environment}/api/products/success`}
        />
        <input
          type="hidden"
          name="furl"
          value={`${environment}/api/products/failure`}
        />
        <input type="hidden" name="phone" value={formData?.phone} />
        <input type="hidden" name="hash" value="" ref={inputRef} />
      </form>
    </div>
  );
};

export default PayU;
