import { useContext, useState, type ChangeEvent } from "react";
import "../styles/product_list.css";
import Card from "./Card";
import ProductAdder from "./ProductAdder";
import { ProductContext } from "../Context";

function Product_List() {
  const context = useContext(ProductContext);
  if (!context) return null;
  const { product } = context;

  let staticProducts = [
    {
      name: "Wireless Bluetooth Headphones",
      description: "High-quality sound with noise cancellation.",
      specifications: ["Bluetooth 5.0", "20h Battery Life", "Over-Ear"],
      price: 79.99,
      stock: 42,
      category: ["Electronics", "Audio"],
      rating: 4.5,
    },
    {
      name: "Running Shoes",
      description: "Comfortable and durable running shoes for all terrains.",
      specifications: [
        "Size Range: 6-12",
        "Color: Black/White",
        "Weight: 250g",
      ],
      price: 59.99,
      stock: 30,
      category: ["Footwear", "Sports"],
      rating: 3.2,
    },
    {
      name: "Smartwatch",
      description:
        "Stay connected and track your fitness with this sleek smartwatch.",
      specifications: ["Heart Rate Monitor", "GPS", "Water Resistant"],
      price: 199.99,
      stock: 15,
      category: ["Electronics", "Wearables"],
      rating: 5,
    },
  ];

  return (
    <div className="products_container">
      <ProductAdder />
      <div className="product_list">
        {staticProducts.map((product, index) => (
          <Card key={index} product={product} />
        ))}
        {product.map((product, index) => (
          <Card key={index} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Product_List;
