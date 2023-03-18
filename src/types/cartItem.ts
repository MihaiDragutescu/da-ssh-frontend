export type cartProductType = {
  id: string;
  name: string;
  price: number;
  size?: string;
  brand: string;
  color: string;
  images: string[];
};

export type cartItemType = {
  product: cartProductType;
  quantity: number;
};
