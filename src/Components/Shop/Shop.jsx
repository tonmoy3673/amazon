import { useState } from "react";
import "./Shop.css";
import { useEffect } from "react";
import Products from "../Products/Products";

const Shop = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="shop-container py-10">
      <div className="grid grid-cols-3 items-center justify-center gap-5">
        {products?.map((product) => (
          <Products key={product.id} product={product}></Products>
        ))}
      </div>
      <h2>Cart Details</h2>
    </div>
  );
};

export default Shop;
