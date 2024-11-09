export interface ColorImages {
  color: string;
  colorCode: string;
  url: string[];
}

// interface Others {
//   heading: string;
//   data: (string | React.ReactNode)[];
// }

export interface BaseProduct {
  colorImages: ColorImages[];
  discount: number;
  actualPrice: number;
  name: string;
  _id: string;
  currentPrice: number;
}

export interface Product extends BaseProduct {
  quantity: number;
  sales: number;
  mainCategory: string;
  subCategory: string;
  underCategory?: string;
  brand: string;
  description: string;
  tags: string[];
  size?: string[];
  other?: {
    heading: string;
    data:
      | string[]
      | {
          heading: string;
          data: string;
        }[];
  }[];
  createdAt?: string;
}

export interface SearchProducts {
  sales?: number;
}

// Assuming CategoryDetails allows subcategories with optional string arrays
export interface CategoryDetails {
  noCategories?: string[];
  subCategory: { [subCategory: string]: string[] };
}

// Define the structure for CategoryDetailsFromServer
export interface CategoryDetailsFromServer {
  mainCategory: string;
  subCategory: string;
  underCategory: string;
}

export interface CurrentUrl {
  url: string;
  index: number;
  color: string;
}
