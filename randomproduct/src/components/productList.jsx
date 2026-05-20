import ProductCards from './productCards'

function ProductList ({ products }) {
  return (
    <div className="products-grid">
      {products.map((product)=>(
        <ProductCards key={product.id} product={product} />
      ))}
    </div>
  )
}

export default ProductList
