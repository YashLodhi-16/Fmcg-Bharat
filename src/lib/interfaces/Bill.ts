export interface Bill {
  itemName: string[];
  firstName: string;
  lastName?: string;
  orderId: string;
  useremail: string;
  actualPrice: number[];
  discount: number[];
  currentPrice: number[];
  invoiceID: string;
  totalPrice: string;
  orderDate: Date;
}
