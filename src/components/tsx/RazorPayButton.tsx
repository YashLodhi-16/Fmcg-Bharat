import { useEffect, useRef } from "react";

export default function App() {
  const rzpPaymentFormRef = useRef<HTMLFormElement>(null);
  useEffect(() => {
    if (!rzpPaymentFormRef.current?.hasChildNodes()) {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/payment-button.js";
      script.async = true;
      script.dataset.payment_button_id = "pl_POpNsz2eaWKZon";
      rzpPaymentFormRef.current?.appendChild(script);
    }
  });

  return <form id="rzp_payment_form" ref={rzpPaymentFormRef}></form>;
}
