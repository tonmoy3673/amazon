const Cart = (myCart) => {
  console.log(myCart);
  const { cart } = myCart;
  let total = 0;
  for (const product of cart) {
    total = total + product.price;
  }

  return (
    <div>
      <h2 className="text-green-500 text-xl font-semibold py-2">
        Order Details
      </h2>
      <h4>Selected Items :{cart.length}</h4>
      <h4>Total Price : {total}</h4>
    </div>
  );
};

export default Cart;
