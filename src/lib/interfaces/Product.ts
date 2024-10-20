export interface ColorImages {
  color: string;
  url: string[];
}
export interface Product {
  name: string;
  actualPrice: number;
  currentPrice: number;
  discount: number;
  quantity: number;
  colorImages: ColorImages[];
  sales: number;
  category: string;
  brand: string;
  description: string;
  tags: string[];
  size?: string[];
  other?: any;
}

export interface BaseProduct {
  colorImages: ColorImages[];
  discount: number;
  actualPrice: number;
  name: string;
  id: string;
  currentPrice: number;
}
