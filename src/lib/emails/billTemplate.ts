import { Bill } from "../interfaces/Bill";
import discountCalculator from "../utilities/discountCalculator";

export const billTemplate = (props: Bill) => {
  const {
    itemName,
    firstName,
    lastName,
    orderId,
    useremail,
    actualPrice,
    discount,
    currentPrice,
    invoiceID,
    orderDate,
    totalPrice,
  } = props;

  const username = `${firstName}${lastName ? " " + lastName : ""}`;

  const productDetailList: string = itemName
    .map((value: string, index: number) => {
      return `<li style="overflow:auto;">
      <span style="float:left; max-width:50%;">
      ${value}
      </span>
      <span style="float:right;">
        <span>&#8377;</span> ${actualPrice[index]}.00 INR
      </span>
      </li>`;
    })
    .join(" ");

  const discountList: string = discount
    .map((value: number, index: number) => {
      const discount = (actualPrice[index] * value) / 100;
      return `<li>(${value}%) -&#8377;${discount}.00 INR</li>`;
    })
    .join(" ");

  return `
   <html>
  
    <body>
  
     <script type="application/ld+json">
[
{
    "@context": "http://schema.org",
    "@type": "Invoice",
    "description": "January 2015 Acme Bill",
    "url": "https://www.americanexpress.com",
    "accountId": "xxxx-xxxx-xxxx-1234",
    "potentialaction": {
      "url": "https://example.com",
      "@type": "PayAction"
    },
    "paymentDue": "2020-01-30",
    "minimumPaymentDue": {
      "@type": "PriceSpecification",
      "price": "$15.00"
    },
    "totalPaymentDue": {
      "@type": "PriceSpecification",
      "price": "$200.00"
    },
    "paymentStatus": "payment due",
    "provider": {
      "@type": "Organization",
      "name": "Acme Bank"
 }
}
]
    </script>

     <div
      style="
        background-color: white;
        padding: 16px 24px;
        display: block;
        text-transform: capitalize;
        max-width: max-content;
        margin: 0px auto;
      "
    >
      <div>
        <div style="background-color: #fff1f2; padding: 32px 32px">
          <img
            alt="Embedded main logo"
            width="100"
            height="100"
            style="color: transparent; margin: auto auto 16px; display: block"
            src="https://res.cloudinary.com/dblq992uw/image/upload/v1730818527/Public/icons/main-logo_hidvvu.png"
          />
          <h1
            style="
              font-size: 1.875rem;
              font-weight: 700;
              color: #1e293b;
              margin: auto;
              display: block;
              text-align: center;
            "
          >
            Thank You
          </h1>
        </div>
        <div style="text-align: center; padding: 32px 32px 0px;">
          <span style="font-size: 1.125rem; font-weight: 600; margin-bottom: 16px;"
            >hi ${username}!</span
          >
          <p>Thank you for your purchase!</p>
        </div>
        <div>
          <div style="text-transform: uppercase; text-align: center">
            <h2 style="font-size: 1.875rem; font-weight: 600; color: #1e293b; margin-top:0px;">
              invoice id:
              <span style="display: block"> ${invoiceID} </span>
            </h2>
            <h3 style="color: #cbd5e1; font-weight: 600; text-align: left">
              your order information:
            </h3>
            <hr />
          </div>

          <table style="width: 100%; border-collapse: collapse">
            <tr>
              <td style="font-weight: 600; padding: 8px">Order ID:</td>
              <td style="color: #64748b; padding: 8px; word-break:break-all">${orderId}</td>
              <td style="font-weight: 600; padding: 8px">Bill to:</td>
              <td style="padding: 8px">
                <a
                  href="mailto:${useremail}"
                  style="
                    color: #2563eb;
                    text-transform: none;
                    word-break: break-all;
                    text-decoration: none;
                  "
                  target="_blank"
                >
                  ${useremail}
                </a>
              </td>
            </tr>
            <tr>
              <td style="font-weight: 600; padding: 8px">Order Date:</td>
              <td style="color: #64748b; padding: 8px">${orderDate}</td>
              <td style="font-weight: 600; padding: 8px">Source:</td>
              <td style="color: #64748b; padding: 8px">FMCG Bharat</td>
            </tr>
          </table>

          <div style="margin-top: 8px">
            <h3 style="text-transform: uppercase; color: #cbd5e1; font-weight: 600">
              here's what you ordered:
            </h3>

            <table style="width: 100%; border-collapse: collapse">
              <tr>
                <!-- Description Column -->
                <td style="width: 100%; vertical-align: top">
               <div style="background-color: #fff1f2;
                          padding: 8px 16px;
                          overflow: auto; /* Clear floats */
                      ">
                          <h4 style="
                              font-weight: 600;
                              margin: 0;
                              float: left; /* Float left */
                          ">
                              Description:
                          </h4>
                          <h4 style="
                              font-weight: 600;
                              margin: 0;
                              float: right; /* Float right */
                          ">
                              Price:
                          </h4>
                      </div>

                  <ul
                    style="
                      padding: 16px;
                      color: #64748b;
                      margin: 0;
                    "
                  >
                    ${productDetailList}
                  </ul>
                </td>
              </tr>
            </table>

            <div>
              <h4
                style="
                  padding: 8px 16px;
                  background-color: #fff1f2;
                  font-weight: 600;
                  margin:0px;
                "
              >
                discounts:
              </h4>
              <div style="display: flex; padding: 16px">
                <p style="margin:auto 0px; height:max-content;">sale discounts:</p>
                <ul style="color: #64748b; margin-left: auto; text-align:right;">
                  ${discountList}
                </ul>
              </div>
              <hr style="margin:0px;"/>
            </div>
            <div>
              <div style="padding: 16px; text-align: right">
                <span
                  style="
                    color: #cbd5e1;
                    text-transform: uppercase;
                    font-weight: 600;
                    margin-right: 10px;
                  "
                  >total:</span
                >
                <span style="color: #0f172a; font-weight: 600">&#8377;${totalPrice} INR</span>
              </div>
              <hr style="margin:0px;"/>
            </div>
          </div>
          <div style="text-align: center">
            <h5 style="color: #374151; font-size: 1rem; margin:0px; padding-top:16px:">
              please keep a copy of this receipt for your records.
            </h5>
          </div>
          <div style="text-align: center; padding: 0px 0px 16px">
            <div>
              <h6 style="font-weight: 600; font-size: 1.5rem; margin:0px;">Fmcg bharat</h6>
            </div>
          </div>
          <div style="background-color: #fee2e2; padding: 16px; text-align: center">
            <div>
              <p style="font-weight: 600">
                need help?
                <a
                  style="text-decoration: none; color: #3b82f6"
                  href="https://www.fmcgbharat.com/"
                  target="_blank"
                  data-saferedirecturl="https://www.google.com/url?q=https://www.fmcgbharat.com/&amp;source=gmail&amp;ust=1730912792468000&amp;usg=AOvVaw26_2IxnlrSFQ_XzC3JfVY-"
                  >fmcgbharat.com</a
                >
              </p>
            </div>
            <p style="color: #475569">
              © 2024, Fmcg Bharat, Fmcgbharat, are all other trademarks are the
              property of their respective owners.
            </p>
            <div
              style="
                display: block;
                max-width: max-content;
                margin: 0px auto;
                color: #3b82f6;
              "
            >
              <a
                href="https://www.fmcgbharat.com/terms-and-conditions"
                style="text-decoration: none; color: #3b82f6; display: inline-block"
                target="_blank"
                data-saferedirecturl="https://www.google.com/url?q=https://www.fmcgbharat.com/terms-and-conditions&amp;source=gmail&amp;ust=1730912792468000&amp;usg=AOvVaw3DfA9-uFsoHbe8WN7qh6nR"
                >terms &amp; conditions</a
              >
              <span
                style="
                  width: 1px;
                  height: 20px;
                  background-color: #cbd5e1;
                  display: inline-block;
                  margin: 0px 10px;
                "
              ></span>
              <a
                href="https://www.fmcgbharat.com/privacy-and-policy"
                style="text-decoration: none; color: #3b82f6; display: inline-block"
                target="_blank"
                data-saferedirecturl="https://www.google.com/url?q=https://www.fmcgbharat.com/privacy-and-policy&amp;source=gmail&amp;ust=1730912792468000&amp;usg=AOvVaw3ZM-qHmPSgFXlj7KAr3JAD"
                >privacy &amp; security</a
              >
              <span
                style="
                  width: 1px;
                  height: 20px;
                  background-color: #cbd5e1;
                  display: inline-block;
                  margin: 0px 10px;
                "
              ></span>
              <a
                href="https://www.fmcgbharat.com/return-and-refund"
                style="text-decoration: none; color: #3b82f6; display: inline-block"
                target="_blank"
                data-saferedirecturl="https://www.google.com/url?q=https://www.fmcgbharat.com/return-and-refund&amp;source=gmail&amp;ust=1730912792468000&amp;usg=AOvVaw0wcCwwACobzlrCcoK0Pq4y"
                >return &amp; refund</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>

    </body>
  </html>

    `;
};

/*
  const itemNameList: string = itemName.join(", ");
  const currentPriceList: string = currentPrice.join(".00, &#8377;");

header
 <div
        style="
          background-color: #fff;
          border-radius: 8px;
          padding: 32px 24px;
        "
      >
        <div
          style="
            display: flex;
            justify-content: flex-start;
            align-items: center;
            margin-bottom: 16px;
          "
        >
          <div>
          <span style="font-weight: 600; font-size: 1.125rem">
            ${itemNameList}
            </span>
            <p style="color: #64748b">&#8377;${currentPriceList}.00 INR</p>
          </div>
        </div>
        <div
          style="display: flex; flex-direction: column; gap: 16px"
          id="order-data"
        >
          <div
            style="
              display: flex;
              gap: 24px;
              justify-content: flex-start;
              align-items: center;
            "
          >
            <div>
              <img
                alt="shop icon"
                loading="lazy"
                width="25"
                height="25"
                decoding="async"
                style="filter: invert(0.6); color: transparent"
                src="https://cdn-icons-png.flaticon.com/512/726/726569.png"
              />
            </div>
            <div style="display: flex; flex-direction: column">
              <span style="color: #64748b">ordered from</span>
              <p style="color: #0f172a">fmcg bharat</p>
            </div>
          </div>
          <div
            style="
              display: flex;
              gap: 24px;
              justify-content: flex-start;
              align-items: center;
            "
          >
            <div>
              <img
                alt="shop icon"
                loading="lazy"
                width="25"
                height="25"
                decoding="async"
                style="filter: invert(0.6); color: transparent"
                src="https://cdn-icons-png.flaticon.com/512/25/25473.png"
              />
            </div>
            <div style="display: flex; flex-direction: column">
              <span style="color: #64748b">total cost</span>
              <p style="color: #0f172a">₹${totalPrice}.00 INR</p>
            </div>
          </div>
          <div
            style="
              display: flex;
              gap: 24px;
              justify-content: flex-start;
              align-items: center;
            "
          >
            <div>
              <img
                alt="shop icon"
                loading="lazy"
                width="25"
                height="25"
                decoding="async"
                style="filter: invert(0.6); color: transparent"
                src="https://cdn-icons-png.flaticon.com/512/3514/3514491.png"
              />
            </div>
            <div style="display: flex; flex-direction: column">
              <span style="color: #64748b">Items</span>
              <ul style="color: #0f172a">
              ${productNameList}
              </ul>
            </div>
          </div>
        </div>
      </div>

      address
 <p style="color: #64748b">D4 platz 6039 Root, Switzerland</p>
              <p style="color: #64748b">
                Goods and services tax (GST) Registration number:
                9922CHE290020SP
              </p>
*/
