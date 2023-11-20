const Cart = (myCart) => {
  console.log(myCart);
  const { cart } = myCart;
  let totalPrice = 0;
  let shippingCost = 0;
  for (const product of cart) {
    totalPrice = totalPrice + product.price;
    shippingCost = shippingCost + product.shipping;
  }

  const tax = (totalPrice * 7) / 100;
  const totalCost = totalPrice + shippingCost + tax;

  return (
    <div className="text-start px-7 sticky top-0">
      <h2 className="text-green-500 text-xl font-semibold py-2">
        Order Details
      </h2>
      <h4>Selected Items : {cart.length}</h4>
      <h4>Total Price : ${totalPrice}</h4>
      <h4>Shipping Cost: ${shippingCost}</h4>
      <h4>Tax : ${tax}</h4>
      <h2 className="text-lg font-semibold">Total Cost: ${totalCost}</h2>
    </div>
  );
};

export default Cart;
