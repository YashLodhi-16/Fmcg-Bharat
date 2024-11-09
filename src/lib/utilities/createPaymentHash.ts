import crypto from "crypto";
const createPaymentHast = (
  key: string,
  txnid: string,
  amount: string,
  productinfo: string,
  firstname: string,
  email: string,
  salt: string
) => {
  const input = `${key}|${txnid}|${amount}|${productinfo}|${firstname}|${email}|||||||||||${salt}`;
  return crypto.createHash("sha512").update(input).digest("hex");
};
export default createPaymentHast;
