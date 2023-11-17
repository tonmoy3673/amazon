const Products = (product) => {
  console.log(product.product);
  const { id, img, name, price, seller, stock, ratings } = product.product;
  return (
    <div className="border-2 py-2 pt-4 rounded-md truncate">
      <img
        className="lg:w-42 mx-auto w-9/12 rounded"
        src={img}
        alt="Images"
      ></img>
      <h2 className="text-md text-green-700 py-2">
        {name.length > 12 ? name.slice(0, 15) : name}
      </h2>
      <h5>
        Price : <span className="font-semibold text-red-700">${price}</span>
      </h5>
      <h5 className="text-base">Seller : {seller}</h5>
      <h5 className="text-base">Rating : {ratings} stars</h5>
      <h5 className="text-base">Stock : {stock}</h5>
      <div className="py-3">
        <button className=" bg-green-500 font-semibold hover:bg-orange-500 w-full lg:w-1/2  p-2 rounded-md">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Products;
