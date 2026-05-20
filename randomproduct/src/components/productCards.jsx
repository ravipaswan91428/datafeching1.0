import './productCards.css';

export default function productCards({ product }) {

    //const product = product?.product;

    if(!product) return <p>Loading</p>
  return (
    <div className="product-card">
      <img 
        src={product.images} 
        alt={product.title} 
      />
      <div className="product-details">
        <h2 className="product-title">{product.title}</h2>
        <b className="product-brand">{product.brand}</b>
        <p className="product-description">{product.description}</p>
        <div className="product-meta">
          <span className="product-price">${product.price}</span>
          <span className="product-rating">⭐ {product.rating}</span>
        </div>
      </div>
    </div>
  )
}
