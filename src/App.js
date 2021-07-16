import React from "react";
import theme from "./theme";
import "fontsource-roboto";
import { ThemeProvider } from "@material-ui/core/styles";
import { Products, Navbar, Cart } from "./components";
import { commerce } from "./lib/commerce";
import { useState, useEffect } from "react";

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
  };

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };

  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);

    setCart(item.cart);
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  // console.log(cart);
  return (
    <ThemeProvider theme={theme}>
      <Navbar totalItems={cart.total_items} />
      {/* <Products products={products} onAddToCart={handleAddToCart} /> */}
      <Cart cart={cart} />
    </ThemeProvider>
  );
};

export default App;
