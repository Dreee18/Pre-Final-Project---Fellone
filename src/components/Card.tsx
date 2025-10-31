import {useState, type ChangeEvent } from "react";
import "../styles/card.css";
import Default_Image from "../assets/images/default_image.png";

type product = {
  image?: string;
  name: string;
  price: number;
  stock: number;
  category: string;
};

type product_list = {
  products: product;
};

function Card({ products }: product_list) {
  const [quantity, setQuantity] = useState(0);
  const [subtotal, setSubtotal] = useState(0);

  const formatted_price = products.price.toLocaleString("en-US", {
    style: "currency",
    currency: "Php",
  });

  const formatted_subtotal = subtotal.toLocaleString("en-US", {
    style: "currency",
    currency: "Php",
  });

  const handleIncrement = () => {
    if (quantity < products.stock) {
      const newQuantity = quantity + 1;
      setQuantity(newQuantity);
      setSubtotal(newQuantity * products.price);
    }
  };

  const handleDecrement = () => {
    if (quantity > 0) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      setSubtotal(newQuantity * products.price);
    }
  };

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity < 0) {
      newQuantity = 0;
    } else if (newQuantity > products.stock) {
      newQuantity = products.stock;
    }
    setQuantity(newQuantity);
    setSubtotal(newQuantity * products.price);
  };

  return (
    <div className="card-container">
      <img
        className="product-image"
        src={products.image ? products.image : Default_Image}
        alt={products.name}
      />

      <div className="card-header">
        <span>
          <p className="product-category">{products.category}</p>
          <h3 className="product-name">{products.name}</h3>
        </span>

        <span>
          <p className="product-stock">Stock:{products.stock}</p>
          <h4 className="product-price">{formatted_price}</h4>
        </span>
      </div>

      <div className="card-body">

        <div className="product-quantity">
          <button className="btn-decrement" onClick={() => handleDecrement()}>
            <i className="fa-solid fa-minus"></i>
          </button>

          <input
            type="number"
            value={quantity}
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              handleQuantityChange(Number(event.target.value))
            }
            min={0}
            max={products.stock}
          />

          <button className="btn-increment" onClick={() => handleIncrement()}>
            <i className="fa-solid fa-plus"></i>
          </button>
        </div>

        <button className="btn-add-to-cart"><i className="fa-solid fa-cart-shopping"></i></button>
      </div>
    </div>
  );
}

export default Card;
