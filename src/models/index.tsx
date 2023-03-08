export interface Product {
  productId: number;
  quantity: number;
}

export interface AddProduct {
  userId: number;
  date: string;
  products: Product[];
}

export interface Product {
  id: number;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
}
