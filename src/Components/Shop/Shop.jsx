import { useState } from "react";
import "./Shop.css";
import { useEffect } from "react";
import Products from "../Products/Products";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const handleProduct = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
    console.log(cart);
  };

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="shop-container py-10">
      <div className="grid grid-cols-3 items-center justify-center gap-5">
        {products?.map((product) => (
          <Products
            key={product.id}
            handleProduct={handleProduct}
            product={product}
          ></Products>
        ))}
      </div>
      <div>
        <h2 className="text-green-500 text-xl font-semibold py-2">
          Order Details
        </h2>
        <h4>Selected Items : {cart.length}</h4>
      </div>
    </div>
  );
};

export default Shop;
