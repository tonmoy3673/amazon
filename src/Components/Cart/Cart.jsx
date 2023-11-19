const Cart = () => {
  return (
    <div>
      <h2 className="text-green-500 text-xl font-semibold py-2">
        Order Details
      </h2>
      <h4>Selected Items : {cart.length}</h4>
    </div>
  );
};

export default Cart;
