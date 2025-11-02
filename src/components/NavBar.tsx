import { useContext, useState } from "react";
import "../styles/navbar.css";
import { ProductContext } from "../Context";
import Cart_Item from "./Cart_Item";

function NavBar() {
  const context = useContext(ProductContext);
  if (!context) return null;
  const { cart } = context;
  const [toggleCart, setToggleCart] = useState(Boolean);

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
          {cart.length === 0 ? <p>Your Cart is Empty.</p> : <Cart_Item />}
        </div>
      )}
    </nav>
  );
}

export default NavBar;
