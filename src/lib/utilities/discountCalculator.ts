const discountCalculator: (
  amount: number,
  discount: number
) => number | null = (amount: number, discount: number): number | null => {
  // try and catch block to avoid error's that can break the program
  try {
    // throw error if amount or discount is not provided.
    if (!amount || !discount) {
      throw new Error("Amount or Discount Is Not Provided...");
    }

    // calculate discount
    const currentPrice: number = Math.floor(amount - (amount * discount) / 100);

    // return the discount amount
    return currentPrice;
  } catch (error) {
    // log error to console and return null
    console.log("Error While Calculating Discount", error);
    return null;
  }
};

// default export because there's only one function
export default discountCalculator;
