import { useContext, useEffect } from "react";
import "../styles/product_container.css";
import Card from "./Card";
import ProductAdder from "./ProductAdder";
import { ProductContext } from "../Context";

import WirelesssHeadphones from '../assets/images/WirelessHeadphones.png'
import RunningShoes from '../assets/images/RunningShoes.png'
import SmartWatch from '../assets/images/Smartwatch.png'

function Product_List() {
  const context = useContext(ProductContext);
  if (!context) return null;
  const { product, setProduct } = context;

  let staticProducts = [
    {
      image: WirelesssHeadphones,
      name: "Wireless Bluetooth Headphones",
      description: "High-quality sound with noise cancellation.",
      specifications: ["Bluetooth 5.0", "20h Battery Life", "Over-Ear"],
      price: 79.99,
      stock: 42,
      category: ["Electronics", "Audio"],
      rating: 4.5,
    },
    {
      image: RunningShoes,
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
      image: SmartWatch,
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

  useEffect(() => {
    setProduct((prev) => {
      if (!prev || prev.length === 0) return [...staticProducts];
      return prev;
    });
  }, []);

  return (
    <div className="products_container">
      <ProductAdder />
      <div className="featured_products">
        {product.map(
          (product, index) =>
            product.rating >= 4 && <Card key={index} product={product} />
        )}
      </div>

      <div className="product_list">
        {product.length === 0 ? (
          <p>Product is Empty</p>
        ) : (
          product.map((product, index) => (
            <Card key={index} product={product} />
          ))
        )}
      </div>
    </div>
  );
}

export default Product_List;
