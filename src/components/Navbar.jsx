import React from "react";

function Navbar({ cartCount }) {
  return (
    <header className="header">
      <nav>
        <div id="cart">
          <h2>
            Корзина: <span id="cart-count">{cartCount}</span>
          </h2>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
