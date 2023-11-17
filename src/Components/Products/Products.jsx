const Products = (product) => {
  console.log(product.product);
  const { id, img, name, price, seller, stock } = product.product;
  return (
    <div className="">
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
      <h5>Seller : {seller}</h5>
      <h5>Stock : {stock}</h5>
    </div>
  );
};

export default Products;
