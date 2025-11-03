import { useContext, useState, type ChangeEvent } from "react";
import "../styles/card.css";
import Default_Image from "../assets/images/default_image.png";
import { ProductContext } from "../Context";

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
  const context = useContext(ProductContext);
  if (!context) return null;
  const { setCart } = context;
  const [quantity, setQuantity] = useState(0);

  const formatted_price = product.price.toLocaleString("en-US", {
    style: "currency",
    currency: "PHP",
  });

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

  const handleCartAdding = () => {
    if (quantity === 0) {
      alert(
        "IF YOU WANT TO ADD THIS ITEM TO THE CART, CONSIDER ADDING 1 QUANTITY!"
      );
      return;
    }

    setQuantity(0);
    setCart((prevCartItems) => {
      const existingIndex = prevCartItems.findIndex(
        (item) => item.product.name === product.name
      );

      if (existingIndex >= 0) {
        const updatedCart = [...prevCartItems];
        updatedCart[existingIndex] = {
          ...updatedCart[existingIndex],
          quantity:
            updatedCart[existingIndex].quantity + quantity > product.stock
              ? product.stock
              : updatedCart[existingIndex].quantity + quantity,
        };
        return updatedCart;
      } else {
        return [...prevCartItems, { product, quantity }];
      }
    });
  };

  return (
    <div className="card_container">
      <div className="image_container">
        <img
          className="product_image"
          src={product.image ? product.image : Default_Image}
          alt={product.name}
        />
      </div>

      <div className="card_header">
        <span>
          <p className="product_category">{product.category[0]}</p>
          <h3 className="product_name">{product.name}</h3>
        </span>

        <span>
          <p
            className={
              product.stock < 5 ? "product_stock_low" : "product_stock"
            }
          >
            Stock:{product.stock}
          </p>
          <h4 className="product_price">{formatted_price}</h4>
        </span>
      </div>

      <div className="card_rating">{handleRating()}</div>

      <div className="card_body">
        <div className="product_quantity">
          <button
            className="btn_decrement"
            onClick={() => setQuantity(quantity - 1)}
            disabled={quantity === 0 || product.stock === 0}
          >
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
            disabled={product.stock === 0}
          />

          <button
            className="btn_increment"
            onClick={() => setQuantity(quantity + 1)}
            disabled={quantity === product.stock || product.stock === 0}
          >
            <i className="fa-solid fa-plus"></i>
          </button>
        </div>

        <button
          className="btn_add_to_cart"
          onClick={() => handleCartAdding()}
          disabled={product.stock === 0}
        >
          <i className="fa-solid fa-cart-shopping"></i>
        </button>
      </div>
    </div>
  );
}

export default Card;
