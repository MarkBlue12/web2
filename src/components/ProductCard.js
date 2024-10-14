const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <h3>{product.title}</h3>
      <p>{product.artist}</p>
      <div className="price">{product.price}</div>
    </div>
  )
}

export default ProductCard