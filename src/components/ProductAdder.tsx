import { useContext, useState, type ChangeEvent } from "react";
import { ProductContext } from "../Context";
import '../styles/product_adder.css'

type product = {
  image?: string;
  name: string;
  description: string;
  specifications: string[];
  price: number;
  stock: number;
  rating: number | 0;
  category: string[];
};

function ProductAdder() {
  const context = useContext(ProductContext);
  if (!context) return null;
  const { product, setProduct } = context;
  const [toggleForm, setToggleForm] = useState(false);

  const HandleNewProduct = () => {
    const [newProduct, setNewProduct] = useState<product>();

    return (
      <>
        <form
          className="new-product-form"
          onSubmit={(e) => {
            e.preventDefault();
            if (newProduct) {
              setProduct([...product, newProduct]);
              setToggleForm(false);
            }
          }}
          onReset={() => setNewProduct(undefined)}
        >
          <h1 className="form-title">Add New Product</h1>

          <label htmlFor="product_image">Image:</label>
          <input
            type="file"
            id="product_image"
            accept="image/*"
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              const file = e.target.files?.[0];
              if (file) {
                const reader = new FileReader();
                reader.onloadend = () => {
                  setNewProduct({
                    ...newProduct!,
                    image: reader.result as string,
                  });
                };
                reader.readAsDataURL(file);
              }
            }}
          />

          <label htmlFor="product_name">Name:</label>
          <input
            type="text"
            id="product_name"
            maxLength={24}
            autoFocus
            required
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              setNewProduct({ ...newProduct!, name: event.target.value })
            }
            placeholder="e.g. Wireless Bluetooth Headphones"
          />

          <label htmlFor="product_description">Description:</label>
          <textarea
            id="product_description"
            required
            onChange={(event: ChangeEvent<HTMLTextAreaElement>) =>
              setNewProduct({
                ...newProduct!,
                description: event.target.value,
              })
            }
            placeholder="Briefly describe the product features, materials, or usage"
          />

          <label htmlFor="product_specification">Specification:</label>
          <textarea
            id="product_specification"
            required
            onChange={(event: ChangeEvent<HTMLTextAreaElement>) =>
              setNewProduct({
                ...newProduct!,
                specifications: event.target.value
                  .split(",")
                  .map((cat) => cat.trim()),
              })
            }
            placeholder="Separate each specification with commas (,)"
          />

          <div className="numeric_row">
            
            <div className="numeric_field">
              <label htmlFor="product_price">Price:</label>
              <input
                type="number"
                id="product_price"
                min={0}
                step="0.01"
                required
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                  setNewProduct({
                    ...newProduct!,
                    price: Number(event.target.value),
                  })
                }
                placeholder="e.g. 59.99"
              />
            </div>

            <div className="numeric_field">
              <label htmlFor="product_stock">Stock:</label>
              <input
                type="number"
                id="product_stock"
                min={0}
                required
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                  setNewProduct({
                    ...newProduct!,
                    stock: Number(event.target.value),
                  })
                }
                placeholder="e.g. 120"
              />
            </div>
            
            <div className="numeric_field">
              <label htmlFor="product_rating">Rating:</label>
              <input
                type="number"
                id="product_rating"
                min={1}
                max={5}
                step="0.01"
                required
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                  setNewProduct({
                    ...newProduct!,
                    rating: Number(event.target.value),
                  })
                }
                placeholder="1-5"
              />
            </div>
          </div>

          <label htmlFor="product_category">Category:</label>
          <input
            type="text"
            id="product_category"
            required
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              setNewProduct({
                ...newProduct!,
                category: event.target.value
                  .split(",")
                  .map((cat) => cat.trim()),
              })
            }
            placeholder="e.g. Electronics, Audio, Accessories"
          />

          <span className="form-buttons">
            <button type="submit" className="btn-add-product">
              Add Product
            </button>
            <button type="reset" className="btn-clear-form">
              Clear
            </button>
          </span>
        </form>
      </>
    );
  };

  return (
    <>
      <button className="btn_add_product" onClick={() => setToggleForm(toggleForm ? false : true)}>
        Add New Product
      </button>
      {toggleForm && <HandleNewProduct />}
    </>
  );
}

export default ProductAdder;
