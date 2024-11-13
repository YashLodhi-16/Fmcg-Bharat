import React from "react";
import "../css/legalContainer.css";
import Link from "next/link";
import { contact } from "@/lib/utilities/routes";
import { environment } from "@/lib/utilities/variables";

const ReturnAndRefund = () => {
  if (!process.env.NEXT_PUBLIC_EMAIL) {
    throw new Error("Missing Necessary Environmental Variables.");
  }
  return (
    <>
      <h2>Return and Refund Policy</h2>
      <p>Last updated: November 08, 2024</p>
      <p>Thank you for shopping at fmcg bharat.</p>
      <p>
        PANKAJ KUMAR believes in helping its customers as far as possible, and
        has therefore a liberal cancellation policy.
      </p>
      <p>
        If, for any reason, You are not completely satisfied with a purchase We
        invite You to review our policy on refunds and returns.
      </p>
      <p>
        The following terms are applicable for any products that You purchased
        with Us.
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
      <p>For the purposes of this Return and Refund Policy:</p>
      <ul>
        <li>
          <p>
            <span className="font-semibold">Company</span> (referred to as
            either &quot;the Company&quot;, &quot;We&quot;, &quot;Us&quot; or
            &quot;Our&quot; in this Agreement) refers to fmcg bharat.
          </p>
        </li>
        <li>
          <p>
            <span className="font-semibold">Goods</span> refer to the items
            offered for sale on the Service.
          </p>
        </li>
        <li>
          <p>
            <span className="font-semibold">Orders</span> mean a request by You
            to purchase Goods from Us.
          </p>
        </li>
        <li>
          <p>
            <span className="font-semibold">Service</span> refers to the
            Website.
          </p>
        </li>
        <li>
          <p>
            <span className="font-semibold">Website</span> refers to fmcg
            bharat, accessible from{" "}
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
            <span className="font-semibold">You</span> means the individual
            accessing or using the Service, or the company, or other legal
            entity on behalf of which such individual is accessing or using the
            Service, as applicable.
          </p>
        </li>
      </ul>
      <h2>Your Order return Rights</h2>
      <p>
        You are entitled to return Your Order within 14 days with a proper
        reason.
      </p>
      <p>
        The deadline for returning an Order is 14 days from the date on which
        You received the Goods or on which a third party you have appointed, who
        is not the carrier, takes possession of the product delivered.
      </p>
      <p>
        In order to exercise Your right of return, You must inform Us of your
        decision by means of a clear statement. You can inform us of your
        decision by:
      </p>
      <ul>
        <li>
          by email:{" "}
          <Link
            href={"mailto:" + process.env.NEXT_PUBLIC_EMAIL}
            className="hover-link normal-case text-blue-600"
          >
            {process.env.NEXT_PUBLIC_EMAIL}
          </Link>
        </li>
        <li>
          <p>
            By visiting this page on our website:{" "}
            <Link
              href={environment}
              className="hover-link normal-case text-blue-600"
            >
              {environment + contact}
            </Link>
          </p>
        </li>
      </ul>
      <h2>eligibility for Returns</h2>
      <p>
        In order for the Goods to be eligible for a return, please make sure
        that:
      </p>
      <ul>
        <li>The Goods were purchased in the last 14 days</li>
        <li>The Goods are in the original packaging</li>
      </ul>
      <p>The following Goods cannot be returned:</p>
      <ul>
        <li>
          The supply of Goods made to Your specifications or clearly
          personalized.
        </li>
        <li>
          The supply of Goods which according to their nature are not suitable
          to be returned, deteriorate rapidly or where the date of expiry is
          over.
        </li>
        <li>
          The supply of Goods which are not suitable for return due to health
          protection or hygiene reasons.
        </li>
        <li>
          The supply of Goods which are, after delivery, according to their
          nature, inseparably mixed with other items.
        </li>
      </ul>
      <p>
        We reserve the right to refuse returns of any merchandise that does not
        meet the above return conditions in our sole discretion.
      </p>
      <p>
        Only regular priced Goods may be refunded. Unfortunately, Goods on sale
        cannot be refunded but only replaceable.
      </p>
      <h2>Return process</h2>

      <p>
        To initiate a return, please contact our customer support team via email
        with your order number and reason for return.
      </p>
      <p>
        Once the return is approved,
        <span className="normal-case"> We&quot;ll</span> provide instructions.
        Items must be shipped within 14 days of approval to be eligible for a
        refund.
      </p>

      <h2>refund policy</h2>
      <p>
        Upon receiving and inspecting the returned item, we will process your
        refund within 7-10 business days.
      </p>
      <p>
        Refunds will be issued to the original payment method. In case of any
        delays, please contact your payment provider.
      </p>
      <p>
        Shipping fees are non-refundable unless the return is due to a defect or
        error on our part.
      </p>

      <h2>Damaged or Defective Items</h2>
      <p>
        If you receive a damaged or defective item, please notify us within 48
        hours of delivery with photos of the damage.
      </p>
      <p>
        <span className="normal-case"> We&quot;ll</span> offer a replacement or
        full refund, including shipping costs, for defective or damaged items.
      </p>

      <p className="font-semibold text-xl mt-4">
        At FMCG Bharat, we aim to make your gift-giving experience smooth and
        delightful. If, however, you encounter any issues, our return and refund
        policy will help ensure your satisfaction.
      </p>
    </>
  );
};

export default ReturnAndRefund;
