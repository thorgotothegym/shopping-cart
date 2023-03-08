import { AddProduct, Product } from "../models";

export const getAllProducts = async (): Promise<Product> => {
  const response = await fetch(`https://fakestoreapi.com/products`);
  if (!response.ok) {
    console.log("error rsponse", response);
  }
  return response.json();
};

export const getProduct = async (idProduct: number): Promise<Product> => {
  const response = await fetch(
    `https://fakestoreapi.com/products/${idProduct}`
  );
  return response.json();
};

export const addNewProduct = async ({ date, products, userId }: AddProduct) => {
  const response = fetch(`https://fakestoreapi.com/carts`, {
    method: "POST",
    body: JSON.stringify({ date, products, userId }),
  });
  return response;
};
