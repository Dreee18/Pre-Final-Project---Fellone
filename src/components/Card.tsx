import { useState, type ChangeEvent } from "react";
import "../styles/card.css";
import Default_Image from "../assets/images/default_image.png";

type product_info = {
  image?: string;
  name: string;
  description: string;
  specifications: string[];
  price: number;
  stock: number;
  rating: number;
  category: string[];
};

type product_object = {
  product: product_info;
};

function Card({ product }: product_object) {
  const [quantity, setQuantity] = useState(0);

  const formatted_price = product.price.toLocaleString("en-US", {
    style: "currency",
    currency: "Php",
  });

  const handleIncrement = () => {
    if (quantity < product.stock) {
      const newQuantity = quantity + 1;
      setQuantity(newQuantity);
    }
  };

  const handleDecrement = () => {
    if (quantity > 0) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
    }
  };

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity < 0) {
      newQuantity = 0;
    } else if (newQuantity > product.stock) {
      newQuantity = product.stock;
    }
    setQuantity(newQuantity);
  };

  const handleRating = () => {
    const stars = [];
    for (let i = 1; i <= Math.floor(product.rating); i++) {
      stars.push(<i key={i} className="fa-solid fa-star"></i>);
    }
    return stars;
  };

  return (
    <div className="card-container">
      <img
        className="product-image"
        src={product.image ? product.image : Default_Image}
        alt={product.name}
      />

      <div className="card-header">
        <span>
          <p className="product-category">{product.category[0]}</p>
          <h3 className="product-name">{product.name}</h3>
        </span>

        <span>
          <p className="product-stock">Stock:{product.stock}</p>
          <h4 className="product-price">{formatted_price}</h4>
        </span>
      </div>

      <div className="card-rating">{handleRating()}</div>

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
            max={product.stock}
          />

          <button className="btn-increment" onClick={() => handleIncrement()}>
            <i className="fa-solid fa-plus"></i>
          </button>
        </div>

        <button className="btn-add-to-cart">
          <i className="fa-solid fa-cart-shopping"></i>
        </button>
      </div>
    </div>
  );
}

export default Card;
