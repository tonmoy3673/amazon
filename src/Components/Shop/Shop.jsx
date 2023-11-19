import { useState } from "react";
import "./Shop.css";
import { useEffect } from "react";
import Products from "../Products/Products";
import Cart from "../Cart/Cart";

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
        <Cart />
      </div>
    </div>
  );
};

export default Shop;
