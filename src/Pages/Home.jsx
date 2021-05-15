import axios from 'axios';
import { useState, useEffect } from 'react';
import ProductList from '../Components/ProductList/ProductList';

import { container, home } from './home.module.css';

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  async function fetchProducts() {
    const productsUrl =
      'https://run.mocky.io/v3/fca7ef93-8d86-4574-9a4a-3900d91a283e';

    try {
      setLoading(true);

      const { data } = await axios.get(productsUrl);
      console.log(data);

      setProducts(data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className={home}>
      <div className={container}>
        {error && <div>{error}</div>}
        {loading && <div>Loading...</div>}
        {products.length ? <ProductList products={products} /> : null}
      </div>
    </div>
  );
}

export default App;
