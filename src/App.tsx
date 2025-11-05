import "./styles/app.css";
import Product_List from "./components/Product_Container";
import { ProductProvider } from "./Context";
import NavBar from "./components/NavBar";
import { useState } from "react";

function App() {
  const [searchFilter , setSearchFilter] = useState("");

  return (
    <ProductProvider>
      <NavBar OnSearch={value => setSearchFilter(value)}/>
      <Product_List searchFilter={searchFilter}/>
    </ProductProvider>
  );
}

export default App;
