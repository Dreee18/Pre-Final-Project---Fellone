import { useState, type ChangeEvent } from "react";
import "../styles/product_list.css";
import Card from "./Card";

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

function Product_List() {
  const [toggleForm, setToggleForm] = useState<boolean>(false);
  const [products, setProducts] = useState<product[]>([
    {
      name: "Wireless Bluetooth Headphones",
      description: "High-quality sound with noise cancellation.",
      specifications: ["Bluetooth 5.0", "20h Battery Life", "Over-Ear"],
      price: 79.99,
      stock: 42,
      category: ["Electronics", "Audio"],
      rating: 4.5,
    },
    {
      name: "Running Shoes",
      description: "Comfortable and durable running shoes for all terrains.",
      specifications: [
        "Size Range: 6-12",
        "Color: Black/White",
        "Weight: 250g",
      ],
      price: 59.99,
      stock: 30,
      category: ["Footwear", "Sports"],
      rating: 3.2,
    },
    {
      name: "Smartwatch",
      description:
        "Stay connected and track your fitness with this sleek smartwatch.",
      specifications: ["Heart Rate Monitor", "GPS", "Water Resistant"],
      price: 199.99,
      stock: 15,
      category: ["Electronics", "Wearables"],
      rating: 5,
    },
  ]);

  const HandleNewProduct = () => {
    const [newProduct, setNewProduct] = useState<product>();

    return (
      <>
        <form
          className="new-product-form"
          onSubmit={(e) => {
            e.preventDefault();
            if (newProduct) {
              setProducts([...products, newProduct]);
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
              />
            </div>
            
            <div className="numeric_field">
              <label htmlFor="product_rating">Rating:</label>
              <input
                type="number"
                id="product_rating"
                min={1}
                max={5}
                required
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                  setNewProduct({
                    ...newProduct!,
                    rating: Number(event.target.value),
                  })
                }
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
    <div className="products-container">
      <button onClick={() => setToggleForm(toggleForm ? false : true)}>
        Add New Product
      </button>
      {toggleForm && <HandleNewProduct />}

      {products.map((product, index) => (
        <Card key={index} product={product} />
      ))}
    </div>
  );
}

export default Product_List;
