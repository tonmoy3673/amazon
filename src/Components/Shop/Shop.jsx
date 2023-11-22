import { useState } from "react";
import "./Shop.css";
import { useEffect } from "react";
import Products from "../Products/Products";
import Cart from "../Cart/Cart";
import { addToDb } from "../../FakeDB/fakeDB.JSX";
import { getShoppingCart } from "../../FakeDB/fakeDB.JSX";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const handleProduct = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
    addToDb(product.id);
  };

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  useEffect(() => {
    const storedCart = getShoppingCart();
    for (const id in storedCart) {
      const addedProduct = products.find((product) => product.id === id);
      if (addedProduct) {
        const quantity = storedCart[id];
        addedProduct.quantity = quantity;
        console.log(addedProduct);
      }
    }
  }, [products]);

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
        <Cart cart={cart} />
      </div>
    </div>
  );
};

export default Shop;
