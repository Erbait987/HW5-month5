import React, { useState, useEffect } from "react";
import ProductsList from "./components/Products";
import axios from "axios";
import Navbar from "./components/Navbar";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState(0);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products?limit=20")
      .then((res) => {
        setProducts(res.data.products);
        console.log(res);
      })

      .catch((error) => console.error("Ошибка при загрузке данных:", error));
  }, []);

  const handleBuyClick = () => {
    setCart(cart + 1);
  };

  return (
    <div className="app">
      <Navbar cartCount={cart} />
      <ProductsList products={products} onBuyClick={handleBuyClick} />
    </div>
  );
}

export default App;
