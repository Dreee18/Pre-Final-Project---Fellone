import "../styles/cart_item.css";
import DefaultImage from "../assets/images/default_image.png";
import { useContext, type ChangeEvent } from "react";
import { ProductContext } from "../Context";

function Cart_Item() {
  const context = useContext(ProductContext);
  if (!context) return null;
  const { cart, setCart } = context;

  const RemoveItem = (index: number) => {
    setCart((prevCart) => prevCart.filter((_, i) => i !== index));
  };

  return (
    <ul className="cart_list">
      {cart.map((item, index) => (
        <li key={index} className="cart_item">
          <img
            src={item.product.image ? item.product.image : DefaultImage}
            alt="product image"
            className="item_image"
          />
          <div className="item_info">
            <div className="item_header">
              <h3 className="item_name">{item.product.name}</h3>
              <p className="item_category">{item.product.category}</p>
            </div>
            <div className="item_info">
              <div className="item_body">
                <h4 className="item_subtotal">
                  {(item.product.price * item.quantity).toLocaleString(
                    "en-US",
                    {
                      style: "currency",
                      currency: "PHP",
                    }
                  )}
                </h4>

                <span>
                  <p className="item_stock">Stocks: {item.product.stock}</p>
                  <div className="quantity_controller">
                    <button
                      className="btn_decrement"
                      onClick={() =>
                        setCart((prevCartItems) => {
                          const updatedCart = [...prevCartItems];
                          updatedCart[index] = {
                            ...updatedCart[index],
                            quantity:
                              updatedCart[index].quantity !== 0
                                ? updatedCart[index].quantity - 1
                                : 1,
                          };
                          return updatedCart;
                        })
                      }
                      disabled={item.quantity === 1}
                    >
                      <i className="fa-solid fa-minus"></i>
                    </button>

                    <input
                      type="number"
                      className="item_quantity"
                      min={1}
                      max={item.product.stock}
                      value={
                        item.quantity > item.product.stock
                          ? item.product.stock
                          : item.quantity
                      }
                      onChange={(event: ChangeEvent<HTMLInputElement>) =>
                        setCart((prevCartItems) => {
                          const updatedCart = [...prevCartItems];
                          updatedCart[index] = {
                            ...updatedCart[index],
                            quantity:
                              Number(event.target.value) > item.product.stock
                                ? item.product.stock
                                : Number(event.target.value),
                          };
                          return updatedCart;
                        })
                      }
                    />

                    <button
                      className="btn_increment"
                      onClick={() =>
                        setCart((prevCartItems) => {
                          const updatedCart = [...prevCartItems];
                          updatedCart[index] = {
                            ...updatedCart[index],
                            quantity: updatedCart[index].quantity + 1,
                          };
                          return updatedCart;
                        })
                      }
                      disabled={item.quantity === item.product.stock}
                    >
                      <i className="fa-solid fa-plus"></i>
                    </button>
                  </div>
                </span>
              </div>
            </div>
          </div>
          <button className="btn_remove_item" onClick={() => RemoveItem(index)}>
            <i className="fa-solid fa-trash"></i>
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Cart_Item;
