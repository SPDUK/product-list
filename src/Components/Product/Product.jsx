import React from 'react';
import PropTypes from 'prop-types';
import {
  container,
  image,
  header,
  footer,
  promotionBanner,
  prices,
  nameText,
  priceText,
  priceWasText,
  removeCheckbox,
  inStocktext,
  stockContainer,
  lowOnStockText,
  outOfStockText,
} from './product.module.css';

// api response:

// available: "TRUE"
// description: "• Shimmer finish\n• Pleat design\n• Magnetic closure\n• Inner pocket\n• Detachable chain strap"
// imageUrl: "https://i8.amplience.net/i/Quiz/00100024698_XM?w=1024"
// lowOnStock: "FALSE"
// name: "Rose Gold Shimmer Clutch Bag"
// price: 9.09
// priceWas: 12.99
// productId: 100024698
// promotionBadge: "30% OFF"
// quantity: 96

export default function Product(props) {
  const {
    available,
    imageUrl,
    lowOnStock,
    name,
    price,
    priceWas,
    productId,
    promotionBadge,
    quantity,
    selected,
    toggleSelectProduct,
  } = props;

  const isAvailable = available === 'TRUE' && quantity >= 1;
  const isLowStock = lowOnStock === 'TRUE';

  function handleToggleChange(event) {
    const removing = event.target.checked;

    toggleSelectProduct(productId, removing);
  }

  // display either out of stock or quantity in stock
  function getStocktext() {
    if (!isAvailable) return <div className={outOfStockText}>Out of Stock</div>;

    return <div className={inStocktext}>{quantity} in stock</div>;
  }

  return (
    <article className={container}>
      <input
        type="checkbox"
        selected={selected}
        onChange={handleToggleChange}
        className={removeCheckbox}
      />
      <div className={header}>
        <img className={image} src={imageUrl} alt={name} />
        {promotionBadge && (
          <div className={promotionBanner}>{promotionBadge}</div>
        )}
      </div>

      <div className={footer}>
        <div className={nameText}>{name}</div>
        <div className={prices}>
          <span className={priceText}>£{price}</span>
          <span className={priceWasText}>{priceWas}</span>
        </div>
        <span className={stockContainer}>
          {getStocktext()}

          {isLowStock && isAvailable && (
            <div className={lowOnStockText}>Low on stock</div>
          )}
        </span>
      </div>
    </article>
  );
}

Product.propTypes = {
  available: PropTypes.string,
  imageUrl: PropTypes.string,
  lowOnStock: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number,
  priceWas: PropTypes.number,
  productId: PropTypes.number,
  promotionBadge: PropTypes.string,
  quantity: PropTypes.number,
  selected: PropTypes.bool,
  toggleSelectProduct: PropTypes.func,
};
