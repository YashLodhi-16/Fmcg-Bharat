// if (!process.env.NEXT_PUBLIC_DEV_API || !process.env.NEXT_PUBLIC_PRO_API) {
//   throw new Error("Please provide API URL");
// }
export const legalId = "legalContainer",
  title = "Fmcg Bharat",
  titleConcatinate = " | ",
  cartProducts = "cartProducts",
  environment =
    process.env.NODE_ENV === "development"
      ? process.env.NEXT_PUBLIC_DEV_API || ""
      : process.env.NEXT_PUBLIC_PRO_API || "";
