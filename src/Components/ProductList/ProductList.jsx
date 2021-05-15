import React from 'react';
import PropTypes from 'prop-types';

import { list } from './product-list.module.css';
import Product from './Product/Product';

function ProductList({ products }) {
  return (
    <div className={list}>
      {products.map((product) => (
        <Product key={product.productId} {...product} />
      ))}
    </div>
  );
}

ProductList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object),
};

export default ProductList;
