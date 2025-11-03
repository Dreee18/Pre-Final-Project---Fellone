import { useContext, useState } from "react";
import "../styles/navbar.css";
import { ProductContext } from "../Context";
import Cart_Item from "./Cart_List";

function NavBar() {
  const context = useContext(ProductContext);
  if (!context) return null;
  const { setProduct, cart, setCart, totalPrice } = context;
  const [toggleCart, setToggleCart] = useState(Boolean);

  const HandleCheckOut = () => {
    cart.forEach((item) => {
      const updatedStock = item.product.stock - item.quantity;

      setProduct((prevProducts) =>
        prevProducts.map((product) =>
          product.name === item.product.name
            ? { ...product, stock: updatedStock }
            : product
        )
      );
    });

    setCart([]);
    setToggleCart(false);
    alert(
      "Items has been checked out. Total Price is: ".concat(
        String(
          totalPrice.toLocaleString("en-US", {
            style: "currency",
            currency: "PHP",
          })
        )
      )
    );
  };

  return (
    <nav className="navbar_container">
      <a className="navbar_brand">P.M.A.</a>
      <form className="navbar_search">
        <input className="input_search" type="search" placeholder="Search" />
        <button className="btn_search" type="submit">
          Search
        </button>
      </form>

      <button
        className="view_cart"
        onClick={() => setToggleCart(!toggleCart ? true : false)}
      >
        <i className="fa-solid fa-cart-shopping"></i>
        View Cart ({cart.length})
      </button>

      {toggleCart && (
        <div className="cart_container">
          {cart.length === 0 ? (
            <p>Your Cart is Empty.</p>
          ) : (
            <>
              <ul className="cart_list">
                <Cart_Item />
              </ul>

              <span className="summary">
                <span className="price_container">
                  <p className="price_text">Total: </p>
                  <h3 className="total_price">
                    {String(
                      totalPrice.toLocaleString("en-US", {
                        style: "currency",
                        currency: "PHP",
                      })
                    )}
                  </h3>
                </span>

                <button className="btn_check_out" onClick={HandleCheckOut}>
                  Check Out
                </button>
              </span>
            </>
          )}
        </div>
      )}
    </nav>
  );
}

export default NavBar;
