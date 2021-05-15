import axios from 'axios';
import { useState, useEffect } from 'react';
import ProductList from '../Components/ProductList/ProductList';

import { container, home, actionBtn } from './home.module.css';

function App() {
  const [products, setProducts] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  function removeProducts() {
    if (selectedProducts.length) {
      const newProducts = products.filter(
        (product) => !selectedProducts.some((id) => id === product.productId)
      );

      setProducts(newProducts);
    }

    // reset selected after removing them
    setSelectedProducts([]);
  }

  function toggleSelectProduct(productId, removing) {
    if (removing) {
      setSelectedProducts((prevProducts) => [...prevProducts, productId]);
    } else {
      setSelectedProducts((prevProducts) =>
        prevProducts.filter((prod) => prod.productId !== productId)
      );
    }
  }

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

  // any time we select/unselect a checkbox -> update the products list to add selected onto that product
  useEffect(() => {
    const updatedProducts = products.map((product) => {
      if (selectedProducts.includes(product.productId))
        return { ...product, selected: true };

      return product;
    });

    setProducts(updatedProducts);
  }, [selectedProducts]);

  return (
    <div className={home}>
      <div className={container}>
        <button type="button" className={actionBtn} onClick={removeProducts}>
          Remove selected products
        </button>

        {error && <div>{error}</div>}
        {loading && <div>Loading...</div>}
        {products.length ? (
          <ProductList
            products={products}
            toggleSelectProduct={toggleSelectProduct}
          />
        ) : null}
      </div>
    </div>
  );
}

export default App;
