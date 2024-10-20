export interface Bill {
  itemName: string[];
  username: string;
  orderId: string;
  useremail: string;
  orderDate: Date;
  actualPrice: number[];
  discount: number[];
  currentPrice: number[];
  invoiceID: string;
  totalPrice: number;
}
