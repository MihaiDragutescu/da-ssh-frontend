export type ProductType = {
  id: string;
  name: string;
  price: number;
  sizes?: string[];
  brand?: string;
  colors: string[];
  collection?: string;
  category?: string;
  images: string[];
  description?: string;
};
