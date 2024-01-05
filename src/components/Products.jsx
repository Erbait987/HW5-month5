import React from "react";
import ProductItem from "./ProductsItem";

function Products({ products, onBuyClick }) {
  return (
    <div className="products-list">
      {products && products.length > 0 ? (
        products.map((product) => (
          <ProductItem
            key={product.id}
            product={product}
            onBuyClick={onBuyClick}
          />
        ))
      ) : (
        <p>No products available</p>
      )}
    </div>
  );
}

export default Products;
