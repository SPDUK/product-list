import React from 'react';
import PropTypes from 'prop-types';

import { list } from './product-list.module.css';
import Product from '../Product/Product.jsx';

function ProductList({ products, toggleSelectProduct }) {
  return (
    <div className={list}>
      {products.map((product) => (
        <Product
          key={product.productId}
          {...product}
          toggleSelectProduct={toggleSelectProduct}
        />
      ))}
    </div>
  );
}

ProductList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object),
  toggleSelectProduct: PropTypes.func,
};

export default ProductList;
