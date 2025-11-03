import "./styles/app.css";
import Product_List from "./components/Product_Container";
import { ProductProvider } from "./Context";
import NavBar from "./components/NavBar";
import { useState } from "react";
import Cart_Item from "./components/Cart_List";

function App() {
  return (
    <ProductProvider>
      <NavBar />
      <Product_List />
    </ProductProvider>
  );
}

export default App;
