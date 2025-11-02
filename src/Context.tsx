import React, { createContext, useState } from "react";

type product_info = {
  image?: string;
  name: string;
  description: string;
  specifications: string[];
  price: number;
  stock: number;
  rating: number | 0;
  category: string[];
};

type cart_item_info = {
  product: product_info
  quantity: number
}

type ProductContextType = {
  product: product_info[];
  setProduct: React.Dispatch<React.SetStateAction<product_info[]>>;

  cart: cart_item_info[];
  setCart: React.Dispatch<React.SetStateAction<cart_item_info[]>>
};

export const ProductContext = createContext<ProductContextType | undefined>(
  undefined
);

export const ProductProvider = ({children}: {children: React.ReactNode}) => {
  const [product, setProduct] = useState<product_info[]>([]);
  const [cart, setCart] = useState<cart_item_info[]>([]);

  return (
    <ProductContext.Provider value={{ product, setProduct, cart, setCart }}>
      {children}
    </ProductContext.Provider>
  );
};
