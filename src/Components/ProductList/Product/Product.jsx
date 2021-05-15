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
    description,
    imageUrl,
    lowOnStock,
    name,
    price,
    priceWas,
    productId,
    promotionBadge,
    quantity,
  } = props;
  return (
    <article className={container}>
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
      </div>
    </article>
  );
}

Product.propTypes = {
  available: PropTypes.string,
  description: PropTypes.string,
  imageUrl: PropTypes.string,
  lowOnStock: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number,
  priceWas: PropTypes.number,
  productId: PropTypes.number,
  promotionBadge: PropTypes.string,
  quantity: PropTypes.number,
};
