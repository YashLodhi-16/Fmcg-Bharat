import Link from "next/link";
import React from "react";
import "../css/legalContainer.css";
import LegalContainer from "./LegalContainer";
import { contact } from "@/lib/utilities/routes";

const PrivacyAndPolicy = () => {
  if (!process.env.NEXT_PUBLIC_EMAIL) {
    throw new Error("Missing Necessary Environmental Variables.");
  }
  return (
    <>
      <h2>privcay and policy</h2>
      <p>Last updated: november 08, 2024</p>
      <p>
        FMCG Bharat respects your privacy and is committed to protecting your
        personal information. This Privacy Policy explains how we collect, use,
        and safeguard information when you visit our website or use our
        services. By accessing our website, you agree to this Privacy Policy.
      </p>

      <h2>1. Information We Collect</h2>

      <p>
        We collect various types of information to provide and improve our
        services:
      </p>

      <p>
        1.1 Personal Information: When you make a purchase, register an account,
        or subscribe to our newsletter, we may collect information such as your
        name, email address, phone number, billing and shipping address, and
        payment details.
      </p>

      <p>
        1.2 Non-Personal Information: We may collect data about your
        interactions with our website, such as IP address, browser type, device
        information, and pages visited. This helps us analyze and improve our
        website experience.
      </p>

      <p>
        1.3 Cookies: FMCG Bharat uses cookies to personalize and enhance your
        experience. Cookies are small data files stored on your device. You can
        control cookie preferences through your browser settings, though
        disabling cookies may affect website functionality.
      </p>

      <h2>2. How We Use Your Information</h2>

      <p>
        FMCG Bharat uses collected information for various purposes, including:
      </p>

      <p>
        2.1 Order Processing: To process and fulfill your orders, communicate
        order status, and deliver products.
      </p>

      <p>
        2.2 Customer Support: To assist with inquiries, resolve issues, and
        improve our customer support experience.
      </p>

      <p>
        2.3 Personalization: To enhance your shopping experience by tailoring
        content, promotions, and recommendations based on your preferences.
      </p>

      <p>
        2.4 Marketing and Promotions: With your consent, we may use your
        information to send newsletters, promotions, and updates about FMCG
        Bharat. You can unsubscribe at any time by following the instructions in
        the email.
      </p>

      <p>
        2.5 Analytics and Improvements: To analyze website usage, troubleshoot
        technical issues, and make necessary improvements to our services and
        features.
      </p>

      <h2>3. Sharing of Information</h2>

      <p>
        FMCG Bharat respects your privacy and does not sell or rent your
        personal information to third parties. We may share your information
        under the following circumstances:
      </p>

      <p>
        3.1 Service Providers: We may share your data with trusted third-party
        service providers who assist us with order processing, payment
        processing, shipping, and website management. These providers are
        obligated to protect your information and use it only for the services
        provided to us.
      </p>

      <p>
        3.2 Legal Compliance: We may disclose information if required by law or
        to protect the rights, safety, and security of FMCG Bharat, our
        customers, or the public.
      </p>

      <p>
        3.3 Business Transfers: In the event of a merger, acquisition, or sale
        of all or a portion of our business, your information may be transferred
        to the new entity.
      </p>

      <h2>4. Data Security</h2>

      <p>
        We take data security seriously and implement reasonable security
        measures to protect your personal information. However, please note that
        no data transmission over the internet is entirely secure. While we
        strive to protect your information, we cannot guarantee its absolute
        security.
      </p>

      <h2>5. Your Rights</h2>

      <p>
        Depending on your location, you may have rights regarding your personal
        information. These may include the right to:
      </p>
      <ul>
        <li>Access and receive a copy of your data.</li>

        <li>Update or correct your data.</li>

        <li>
          Request deletion of your data, subject to legal and contractual
          limitations.
        </li>

        <li>
          Opt-out of certain data processing activities, such as marketing
          emails.
        </li>

        <li>
          To exercise these rights, please contact us at{" "}
          <Link
            href={process.env.NEXT_PUBLIC_EMAIL}
            className="hover-link normal-case text-blue-600"
          >
            {process.env.NEXT_PUBLIC_EMAIL}
          </Link>
          . We will respond to your request in a timely manner.
        </li>
      </ul>

      <h2>6. Third-Party Links</h2>

      <p>
        Our website may contain links to third-party websites for your
        convenience. FMCG Bharat is not responsible for the privacy practices of
        these external sites. We recommend reviewing the privacy policies of any
        third-party websites you visit.
      </p>

      <h2>Changes to This Privacy Policy</h2>
      <p>
        FMCG Bharat may update this Privacy Policy periodically to reflect
        changes in our practices or legal requirements. Any updates will be
        posted on this page with the &quot;Effective Date&quot; noted. Your
        continued use of our website constitutes acceptance of
        any revised policy
      </p>

      <h2>Contact Us</h2>
      <p>
        If you have any questions, concerns, or requests about this Privacy
        Policy, You can contact us:
      </p>
      <ul>
        <li>
          By email:{" "}
          <Link
            href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`}
            className="text-blue-600 hover-link normal-case"
          >
            {process.env.NEXT_PUBLIC_EMAIL}
          </Link>
        </li>
        <li>
          <p>
            By visiting this page on our website:{" "}
            <Link
              href={process.env.NEXT_PUBLIC_PRO_API + contact}
              className="text-blue-600 hover-link normal-case"
            >
              {process.env.NEXT_PUBLIC_PRO_API + contact}
            </Link>
          </p>
        </li>
      </ul>
    </>
  );
};

export default PrivacyAndPolicy;
