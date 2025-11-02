import "./styles/app.css";
import Product_List from "./components/Product_List";
import { ProductProvider } from "./Context";

function App() {
  return (
    <ProductProvider>
      <Product_List />
    </ProductProvider>
  );
}

export default App;
