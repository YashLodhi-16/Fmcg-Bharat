import Link from "next/link";
import React from "react";
import "../css/legalContainer.css";
import { environment } from "@/lib/utilities/variables";
const TermsAndConditions = () => {
  if (!process.env.NEXT_PUBLIC_EMAIL) {
    throw new Error("Missing Necessary Environmental Variables.");
  }
  return (
    <>
      <h2>Terms and Conditions</h2>
      <p>Last updated: november 08, 2024</p>
      <p>
        For the purpose of these Terms and Conditions, The term &quot;we&quot;,
        &quot;us&quot;, &quot;our&quot; used anywhere on this page shall mean
        PANKAJ KUMAR. &quot;you&quot;, &quot;your&quot;, &quot;user&quot;,
        &quot;visitor&quot; shall mean any natural or legal person who is
        visiting our website and/or agreed to purchase from us.
      </p>
      <p className="text-xl font-semibold">Welcome to FMCG Bharat!</p>
      <p>
        Thank you for choosing FMCG Bharat for your shopping needs. These Terms
        and Conditions govern your access and use of our website, including any
        purchases or interactions. By accessing or using our website, you agree
        to comply with these terms. Please review them carefully before engaging
        with our services.
      </p>
      <h2>Interpretation and Definitions</h2>
      <h3>Interpretation</h3>
      <p>
        The words of which the initial letter is capitalized have meanings
        defined under the following conditions. The following definitions shall
        have the same meaning regardless of whether they appear in singular or
        in plural.
      </p>
      <h3>Definitions</h3>
      <p>For the purposes of these Terms and Conditions:</p>
      <ul>
        <li>
          <p>
            <span>Country</span> refers to: Delhi, India
          </p>
        </li>
        <li>
          <p>
            <span>Company</span> (referred to as either &quot;the Company&quot;,
            &quot;We&quot;, &quot;Us&quot; or &quot;Our&quot; in this Agreement)
            refers to fmcg bharat.
          </p>
        </li>
        <li>
          <p>
            <span>Device</span> means any device that can access the Service
            such as a computer, a cellphone or a digital tablet.
          </p>
        </li>
        <li>
          <p>
            <span>Service</span> refers to the Website.
          </p>
        </li>
        <li>
          <p>
            <span>Terms and Conditions</span> (also referred as
            &quot;Terms&quot;) mean these Terms and Conditions that form the
            entire agreement between You and the Company regarding the use of
            the Service.
          </p>
        </li>
        <li>
          <p>
            <span>Third-party Social Media Service</span> means any services or
            content (including data, information, products or services) provided
            by a third-party that may be displayed, included or made available
            by the Service.
          </p>
        </li>
        <li>
          <p>
            <span>Website</span> refers to fmcg bharat, accessible from{" "}
            <Link
              href={environment}
              className="hover-link text-blue-600 normal-case"
            >
              {environment}
            </Link>
          </p>
        </li>
        <li>
          <p>
            <span>You</span> means the individual accessing or using the
            Service, or the company, or other legal entity on behalf of which
            such individual is accessing or using the Service, as applicable.
          </p>
        </li>
      </ul>

      <h2>1. general</h2>
      <p>
        1.1 Eligibility: By using this website, you confirm that you are at
        least 18 years of age or have the consent of a legal guardian. FMCG
        Bharat is committed to providing a secure and trusted platform, and we
        encourage responsible usage in compliance with all applicable
        regulations.
      </p>

      <p>
        1.2 Changes to Terms: FMCG Bharat reserves the right to update or modify
        these terms at any time. Modifications may reflect changes in our
        services, industry standards, or legal requirements. We encourage you to
        check these Terms and Conditions periodically. Continued use of the
        website after any updates signifies your acceptance of the revised
        terms.
      </p>

      <h2>2. Orders and Payment</h2>

      <p>
        2.1 Product Availability: Our products are subject to availability, and
        we strive to keep our inventory updated. However, due to factors beyond
        our control, some products may be out of stock or discontinued without
        prior notice. FMCG Bharat reserves the right to limit quantities on any
        order and to discontinue any product at our discretion.
      </p>
      <p>
        2.2 Pricing: All prices are listed in INR (Indian Rupees) and include
        taxes unless otherwise noted. We aim to provide accurate pricing
        information; however, errors may occur. If an item is listed at an
        incorrect price, we reserve the right to cancel any orders placed for
        that item. FMCG Bharat also reserves the right to change prices at any
        time without prior notice.
      </p>

      <p>
        2.3 Payment Methods: We accept several secure payment methods, including
        such as credit cards, debit cards, UPI, net banking etc. Full payment is
        required at the time of purchase, and orders will be processed only upon
        successful payment completion. For your protection, please ensure that
        all payment details provided are accurate.
      </p>

      <h2>3. Shipping and Delivery</h2>

      <p>
        3.1 Shipping Policy: FMCG Bharat endeavors to ship products within the
        estimated delivery timelines. Delivery times are approximate and may
        vary due to factors such as availability, location, and unforeseen
        delays beyond our control, like courier issues or natural events. While
        we strive to meet our timelines, we are unable to guarantee exact
        delivery dates.
      </p>

      <p>
        3.2 Shipping Charges: Shipping charges, if applicable, will be displayed
        at checkout and will vary depending on location, product size, and
        weight. Any changes in shipping fees will be communicated transparently
        to you before the order is confirmed.
      </p>

      <p>
        3.3 Risk of Loss: Once your order is shipped, FMCG Bharat assumes no
        responsibility for loss or damage during transit. Risk of loss passes to
        you upon dispatch of your order from our facility. Any issues after
        dispatch should be addressed with the shipping carrier directly.
      </p>

      <h2>4. Intellectual Property</h2>
      <p>
        All content on FMCG Bharat’s website, including images, text, graphics,
        logos, and other materials, is the intellectual property of FMCG Bharat
        and protected under applicable intellectual property laws. Unauthorized
        use, reproduction, distribution, or modification of our content is
        strictly prohibited and may result in legal action. We appreciate and
        value your respect for our intellectual property.
      </p>

      <h2>5. Limitation of Liability</h2>

      <p>
        FMCG Bharat and its affiliates are not liable for any direct, indirect,
        incidental, or consequential damages arising from your use of our
        website, services, or products. This includes, but is not limited to,
        damages for loss of data, revenue, or profit, or any claims by third
        parties. You agree that your use of our services is at your own risk,
        and FMCG Bharat assumes no responsibility for any harm or losses
        resulting from your reliance on information on our website.
      </p>

      <h2>6. Contact Us</h2>
      <p>
        If you have questions, concerns, or feedback regarding these Terms and
        Conditions, please reach out to us. We value open communication and are
        here to assist you with any inquiries. Contact us
      </p>

      <h2>Changes to These Terms and Conditions</h2>
      <p>
        We reserve the right, at Our sole discretion, to modify or replace these
        Terms at any time. If a revision is material We will make reasonable
        efforts to provide at least 30 days&#39; notice prior to any new terms
        taking effect. What constitutes a material change will be determined at
        Our sole discretion.
      </p>
      <p>
        By continuing to access or use Our Service after those revisions become
        effective, You agree to be bound by the revised terms. If You do not
        agree to the new terms, in whole or in part, please stop using the
        website and the Service.
      </p>
    </>
  );
};

export default TermsAndConditions;
