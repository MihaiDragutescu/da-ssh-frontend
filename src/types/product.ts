export type ProductType = {
  id: string;
  name: string;
  price: number;
  size?: string;
  brand?: string;
  color?: string;
  collection?: string;
  category?: string;
  images: string[];
  description?: string;
};
