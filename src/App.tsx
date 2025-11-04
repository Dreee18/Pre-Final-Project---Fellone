import "./styles/app.css";
import Product_List from "./components/Product_Container";
import { ProductProvider } from "./Context";
import NavBar from "./components/NavBar";

function App() {
  return (
    <ProductProvider>
      <NavBar />
      <Product_List />
    </ProductProvider>
  );
}

export default App;
