import { useEffect, useState } from 'react'
import ProductList from './components/productList';
import './App.css'

function App() {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProducts = () => {
    setLoading(true);
    fetch('https://api.freeapi.app/api/v1/public/randomproducts')
      .then(res => res.json())
      .then((data) => {
        setProducts(data.data.data || []);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="app-container">
      <h1>🛍️ Product Showcase</h1>
      <section className="product-display-section">
        {loading ? (
          <div className="loading">Loading amazing products...</div>
        ) : products.length > 0 ? (
          <ProductList products={products} />
        ) : (
          <div className="error">No products available</div>
        )}
      </section>
    </div>
  )
}

export default App
