import { useState } from "react";
import "./Shop.css";
import { useEffect } from "react";

const Shop = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <div className="shop-container py-10">
      <div>
        <h2>Product Details: </h2>
        {}
      </div>
      <h2>Cart Details</h2>
    </div>
  );
};

export default Shop;
