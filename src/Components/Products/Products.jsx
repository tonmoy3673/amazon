const Products = (product) => {
  console.log(product.product);
  const { id, img, name, price, seller, stock } = product.product;
  return (
    <div>
      <h2>{name}</h2>
    </div>
  );
};

export default Products;
