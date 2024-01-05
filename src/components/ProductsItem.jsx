import React from "react";

function ProductsItem({ product, onBuyClick }) {
  return (
    <div className="product">
      <img
        width={120}
        height={90}
        src={product.thumbnail}
        alt={product.title}
      />
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <b>{product.price} $</b>
      <button onClick={onBuyClick}>Купить</button>
    </div>
  );
}

export default ProductsItem;
