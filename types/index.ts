export type Product = {
  id: string;
  name: string;
  description: string;
  category: string;
  price: number;
  imageUrl: string;
  stock: number;
  reviews?: { rating: number; text:string }[];
};

export type CartItem = Product & {
  quantity: number;
};
