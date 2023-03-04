export type cartProductType = {
  id: string;
  name: string;
  price: number;
  size?: string;
  brand: string;
  color: string;
  collection: string;
  category: string;
  images: string[];
};

export type cartItemType = {
  product: cartProductType;
  quantity: number;
};
